﻿using EcoFive.Models.Models;
using EcoFive.UI.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using DNTCaptcha.Core;

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
            services.AddAuthentication()
                .AddGoogle(options =>
                {
                    options.ClientId = "XXXXX";
                    options.ClientSecret = "YYYYY";
                })
                .AddFacebook(options =>
                {
                    options.AppId = "XXXXX";
                    options.AppSecret = "YYYYY";
                });


            // add security code
            services.AddDNTCaptcha(options =>
                options.UseCookieStorageProvider()
                    .ShowThousandsSeparators(false)
            );

            //config connection strings
            services.AddDbContextPool<AppDbContext>(options =>
                options.UseSqlServer(_config.GetConnectionString("EcoFiveDBConnection")));

            //config access denied page
            services.ConfigureApplicationCookie(options =>
            {
                options.AccessDeniedPath = new PathString("/Administraion/AccessDenied");
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
                    options.Password.RequiredLength = 10;
                    options.Password.RequiredUniqueChars = 3;
                    options.SignIn.RequireConfirmedEmail = true;
                    options.Tokens.EmailConfirmationTokenProvider = "CustomEmailConfirmation";

                    //lockout account
                    options.Lockout.MaxFailedAccessAttempts = 5;    //5 Times try
                    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);

                }).AddEntityFrameworkStores<AppDbContext>()
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
            }).AddXmlSerializerFormatters();

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
            app.UseMvc(routes =>
            {
                routes.MapRoute("areaRoute", "{area:exists}/{controller=Admin}/{action=Index}/{id?}");
                routes.MapRoute("Home", "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
