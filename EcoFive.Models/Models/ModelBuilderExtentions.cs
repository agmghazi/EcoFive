using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace EcoFive.Models.Models
{
    public static class ModelBuilderExtentions
    {

        public static void Seed(this ModelBuilder modelBuilder)
        {
            //Super Admin
            string SuperAdmin_ID = "02174cf0–9412–4cfe - afbf - 59f706d72cf6";
            string SuperROLE_ID = "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6";

            //seed SuperAdmin role
            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "SuperAdmin",
                NormalizedName = "SuperAdmin",
                Id = SuperROLE_ID,
                ConcurrencyStamp = SuperROLE_ID
            });

            //create SuperAdmin
            var appUser = new ApplicationUser
            {
                Id = SuperAdmin_ID,
                UserName = "Sadmin@Sadmin.com",
                Email = "Sadmin@Sadmin.com",
                NormalizedEmail = "Sadmin@Sadmin.com".ToUpper(),
                NormalizedUserName = "Sadmin@Sadmin.com".ToUpper(),
                TwoFactorEnabled = false,
                EmailConfirmed = true,
                PhoneNumber = "",
                PhoneNumberConfirmed = false,
                LockoutEnabled = false,
                SecurityStamp = "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF"

            };

            //set user password
            PasswordHasher<ApplicationUser> ph = new PasswordHasher<ApplicationUser>();
            appUser.PasswordHash = ph.HashPassword(appUser, "SAdmin@Sadmin2587");

            //seed user
            modelBuilder.Entity<ApplicationUser>().HasData(appUser);

            //set user role to admin
            modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                RoleId = SuperROLE_ID,
                UserId = SuperAdmin_ID
            });


            //modelBuilder.Entity<Employee>().HasData(
            //    new Employee
            //    {
            //        Id = 1,
            //        Name = "Mary",
            //        Department = Dept.IT,
            //        Email = "mary@gmail.com"
            //    },
            //    new Employee
            //    {
            //        Id = 2,
            //        Name = "ali",
            //        Department = Dept.HR,
            //        Email = "ali@gmail.com"
            //    }
            //    );

        }
    }
}
