using DNTCaptcha.Core;
using EcoFive.DataAccessLayer;
using EcoFive.DataAccessLayer.Admin;
using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.Hubs;
using EcoFive.UI.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace EcoFive.UI
{
    public class Startup
    {
        private IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //add facebook and google auth
            //services.AddAuthentication()
            //    .AddGoogle(options =>
            //    {
            //        options.ClientId = "XXXXX";
            //        options.ClientSecret = "YYYYY";
            //    })
            //    .AddFacebook(options =>
            //    {
            //        options.AppId = "XXXXX";
            //        options.AppSecret = "YYYYY";
            //    });

            //to add change languages in application
            services.AddLocalization(opts =>
                opts.ResourcesPath = "Resources");


            // add security code
            services.AddDNTCaptcha(options =>
                options.UseCookieStorageProvider()
                    .ShowThousandsSeparators(false)
            );

            //config connection strings
            services.AddDbContextPool<AppDbContext>(options =>
                options.UseSqlServer(_config.GetConnectionString("EcoFiveDBConnection")).EnableSensitiveDataLogging());

            //config access denied page
            services.ConfigureApplicationCookie(options =>
            {
                options.AccessDeniedPath = new PathString("/admin/Administraion/AccessDenied");
            });

            //config authorization
            services.AddAuthorization(options =>
            {
                options.AddPolicy("EditPolePolicy", policy =>
                    policy.AddRequirements(new ManageAdminRolesAndClaimsRequirement()));

                options.AddPolicy("CreatePolePolicy", policy =>
                    policy.RequireClaim("Create Role", "true"));

                options.AddPolicy("DeletePolePolicy", policy =>
                    policy.RequireClaim("Delete Role", "true"));
            });

            //config Identity table
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
                {
                    //overwrite register model
                    options.Password.RequiredLength = 8;
                    options.Password.RequiredUniqueChars = 3;
                    options.SignIn.RequireConfirmedEmail = true;
                    options.Tokens.EmailConfirmationTokenProvider = "CustomEmailConfirmation";

                    //lockout account
                    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);
                    options.Lockout.MaxFailedAccessAttempts = 5;    //5 Times try

                }).AddEntityFrameworkStores<AppDbContext>()
                .AddRoles<IdentityRole>()
                .AddDefaultTokenProviders()
                .AddTokenProvider<CustomEmailConfirmationTokenProvider
                    <ApplicationUser>>("CustomEmailConfirmation");

            // Changes token lifespan of all token types
            services.Configure<DataProtectionTokenProviderOptions>(o =>
                o.TokenLifespan = TimeSpan.FromHours(5));   //5 hours

            // Changes token lifespan of just the Email Confirmation Token type
            services.Configure<CustomEmailConfirmationTokenProviderOptions>(o =>
                o.TokenLifespan = TimeSpan.FromDays(3));  //3 days


            services.AddMvc(options =>
            {
                //to config Authorize
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            }).AddXmlSerializerFormatters()
                .AddViewLocalization(opts =>
                {
                    opts.ResourcesPath = "Resources";
                }).AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization();

            services.Configure<RequestLocalizationOptions>(opts =>
            {
                var supportCultures = new List<CultureInfo>
                {
                    new CultureInfo("en"),
                    new CultureInfo("ar")
                };
                opts.DefaultRequestCulture = new RequestCulture("ar");
                opts.SupportedCultures = supportCultures;
                opts.SupportedUICultures = supportCultures;
            });

            services.AddSignalR();

            services.AddScoped<IAccountRepository, AccountAccessLayer>();
            services.AddScoped<IMasterPageDetailsRepository, MasterPageDetailsAccessLayer>();
            services.AddScoped<IContactRepository, ContactAccessLayer>();
            services.AddScoped<IChatRepository, ChatRepository>();

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseStatusCodePagesWithReExecute("/Error/{0}");
            }
            app.UseStaticFiles();
            app.UseAuthentication();

            //config resources
            var options = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(options.Value);
            app.UseCookiePolicy();

            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chatHub");
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute("areaRoute", "{area:exists}/{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute("Home", "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
