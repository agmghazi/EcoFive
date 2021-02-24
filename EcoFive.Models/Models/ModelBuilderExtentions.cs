using EcoFive.Models.Models.Chatting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EcoFive.Models.Models
{
    public static class ModelBuilderExtentions
    {

        public static void Seed(this ModelBuilder modelBuilder)
        {
            #region seed admin
            // Super Admin
            string SuperAdmin_ID = "02174cf0–9412–4cfe-afbf-59f706d72cf6";
            string SuperROLE_ID = "341743f0-asd2–42de-afbf-59kmkkmk72cf6";

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
                UserName = "agmghazi",
                Email = "agmghazi@hotmail.com",
                NormalizedEmail = "agmghazi@hotmail.com".ToUpper(),
                NormalizedUserName = "agmghazi".ToUpper(),
                TwoFactorEnabled = false,
                EmailConfirmed = true,
                PhoneNumber = "0534740221",
                PhoneNumberConfirmed = true,
                SecurityStamp = "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF",
                CityId = 1,
                GovernorateId = 1,
                CountryId = 1,
                FirstName = "Ahmed",
                LastName = "Gamal",
                LocationLatitude = "24.728287478442276",
                LocationLongitude = "46.66198973512585",
                VisaDate = "06/30",
                VisaName = "ahmed ghazy",
                VisaNumber = "555555555555555",
                VisaPassword = "123"
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
            #endregion


            #region seed User
            // user
            string User_ID = "02974cw0–9412–4nfe-afbf-59f701d72cf6";

            //create User
            var appUserC = new ApplicationUser
            {
                Id = User_ID,
                UserName = "user1",
                Email = "user1@hotmail.com",
                NormalizedEmail = "user1@hotmail.com".ToUpper(),
                NormalizedUserName = "user1".ToUpper(),
                TwoFactorEnabled = false,
                EmailConfirmed = true,
                PhoneNumber = "051265136845",
                PhoneNumberConfirmed = true,
                SecurityStamp = "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF",
                CityId = 1,
                GovernorateId = 1,
                CountryId = 1,
                FirstName = "User",
                LastName = "User",
                LocationLatitude = "30.156351019625248",
                LocationLongitude = "37.156914062556666",
                VisaDate = "06/21",
                VisaName = "user user",
                VisaNumber = "555551111111122",
                VisaPassword = "123"
            };

            //set user password
            PasswordHasher<ApplicationUser> phUser = new PasswordHasher<ApplicationUser>();
            appUserC.PasswordHash = phUser.HashPassword(appUserC, "SUser@Suser2587");

            //seed user
            modelBuilder.Entity<ApplicationUser>().HasData(appUserC);

            #endregion


            modelBuilder.Entity<ChatUser>()
                .HasKey(x => new { x.ChatId, x.UserId });


            modelBuilder.Entity<Country>().HasData(
                new List<Country>
                {
                    new Country(){Id = 1, Name = "المملكه العربية السعودية"},
                    new Country(){Id = 2, Name = "مصر"}
                });


            modelBuilder.Entity<Governorate>().HasData(
                new List<Governorate>

                {
                        new Governorate() {Id = 1, Name = "المنطقه الشرقية", CountryId = 1},
                        new Governorate(){Id = 2,Name = "منطقة نجران",CountryId = 1},
                        new Governorate(){Id = 3,Name = "منطقة مكة المكرمة",CountryId = 1},
                        new Governorate(){Id = 4,Name = "منطقة عسير",CountryId = 1},
                        new Governorate(){Id = 5,Name = "منطقة حائل",CountryId = 1},
                        new Governorate(){Id = 6,Name = "منطقة جازان",CountryId = 1},
                        new Governorate(){Id = 7,Name = "منطقة الرياض",CountryId = 1},
                        new Governorate(){Id = 8,Name = "منطقة القصيم",CountryId = 1},
                        new Governorate(){Id = 9,Name = "منطقة المدينة المنورة",CountryId = 1},
                        new Governorate(){Id = 10,Name = "منطقة الحدود الشماليه",CountryId = 1},
                        new Governorate(){Id = 11,Name = "منطقة الجوف",CountryId = 1},
                        new Governorate(){Id = 12,Name = "منطقة الباحه",CountryId = 1},
                        new Governorate(){Id = 13,Name = "منطقة تبوك",CountryId = 1},


                        new Governorate(){Id = 14,Name = "الإسكندرية",CountryId = 2},
                        new Governorate(){Id = 15,Name = "الإسماعيلية",CountryId = 2},
                        new Governorate(){Id = 16,Name = "أسوان",CountryId = 2},
                        new Governorate(){Id = 17,Name = "أسيوط",CountryId = 2},
                        new Governorate(){Id = 18,Name = "الأقصر",CountryId = 2},
                        new Governorate(){Id = 19,Name = "البحر الأحمر",CountryId = 2},
                        new Governorate(){Id = 20,Name = "البحيرة",CountryId = 2},
                        new Governorate(){Id = 21,Name = "بني سويف",CountryId = 2},
                        new Governorate(){Id = 22,Name = "بورسعيد",CountryId = 2},
                        new Governorate(){Id = 23,Name = "جنوب سيناء",CountryId = 2},
                        new Governorate(){Id = 24,Name = "الجيزة",CountryId = 2},
                        new Governorate(){Id = 25,Name = "الدقهلية",CountryId = 2},
                        new Governorate(){Id = 26,Name = "دمياط",CountryId = 2},
                        new Governorate(){Id = 27,Name = "سوهاج",CountryId = 2},
                        new Governorate(){Id = 28,Name = "السويس",CountryId = 2},
                        new Governorate(){Id = 29,Name = "الشرقية",CountryId = 2},
                        new Governorate(){Id = 30,Name = "شمال سيناء",CountryId = 2},
                        new Governorate(){Id = 31,Name = "الغربية",CountryId = 2},
                        new Governorate(){Id = 32,Name = "الفيوم",CountryId = 2},
                        new Governorate(){Id = 33,Name = "القاهرة",CountryId = 2},
                        new Governorate(){Id = 34,Name = "القليوبية",CountryId = 2},
                        new Governorate(){Id = 35,Name = "قنا",CountryId = 2},
                        new Governorate(){Id = 36,Name = "كفر الشيخ",CountryId = 2},
                        new Governorate(){Id = 37,Name = "مطروح",CountryId = 2},
                        new Governorate(){Id = 38,Name = "المنوفية",CountryId = 2},
                        new Governorate(){Id = 39,Name = "المنيا",CountryId = 2},
                        new Governorate(){Id = 40,Name = "الوادي الجديد",CountryId = 2},
                }
            );

            modelBuilder.Entity<City>().HasData(
                new List<City>

                {
                        new City() {Id = 1, Name = "رأس تنورة",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 2, Name = "الدمام",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 3, Name = "النعيرية",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 4, Name = "الخفجى",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 5, Name = "حفر الباطن",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 6, Name = "قرية العليا",GovernorateId = 1, CountryId = 1},
                        new City() {Id =7, Name = "الخبر",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 8, Name = "القطيف",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 9, Name = "الاحساء",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 10, Name = "الجبيل",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 11, Name = "بقيق",GovernorateId = 1, CountryId = 1},
                        new City() {Id = 12, Name = "العديد",GovernorateId = 1, CountryId = 1},




                        new City() {Id = 13, Name = "غامد الزناد",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 14, Name = "المندق",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 15, Name = "المخواة",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 16, Name = "العقيق",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 17, Name = "قلوة",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 18, Name = "القرى",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 19, Name = "بني حسن",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 20, Name = "الحجرة",GovernorateId = 12, CountryId = 1},
                        new City() {Id = 21, Name = "بلجرشي",GovernorateId = 12, CountryId = 1},


                        new City() {Id = 22, Name = "سكاكا",GovernorateId = 11, CountryId = 1},
                        new City() {Id = 23, Name = "القريات",GovernorateId = 11, CountryId = 1},
                        new City() {Id = 24, Name = "دومة الجندل",GovernorateId = 11, CountryId = 1},
                        new City() {Id = 25, Name = "طبرجل",GovernorateId = 11, CountryId = 1},


                        new City() {Id = 26, Name = "عرعر",GovernorateId = 10, CountryId = 1},
                        new City() {Id = 27, Name = "طريف",GovernorateId = 10, CountryId = 1},
                        new City() {Id = 28, Name = "رفحاء",GovernorateId = 10, CountryId = 1},
                        new City() {Id = 29, Name = "العويقيلة",GovernorateId = 10, CountryId = 1},
                        new City() {Id = 30, Name = "جديدة عرعر",GovernorateId = 10, CountryId = 1},
                        new City() {Id = 31, Name = "شعبة نصاب",GovernorateId = 10, CountryId = 1},


                        new City() {Id = 32, Name = "الدرعية",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 33, Name = "الخرج",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 35, Name = "الدوادمى",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 36, Name = "المجمعة",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 37, Name = "القويعية",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 38, Name = "وادي الدواسر",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 39, Name = "الأفلاج",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 40, Name = "الزلفى",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 41, Name = "شقراء",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 42, Name = "حوطة بنى تميم",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 43, Name = "عفيف",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 44, Name = "السليل",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 45, Name = "ضرما",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 46, Name = "المزاحمية",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 47, Name = "رماح",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 48, Name = "ثادق",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 49, Name = "حريملاء",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 50, Name = "الحريق",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 51, Name = "الغاط",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 52, Name = "مرات",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 53, Name = "الدلم",GovernorateId = 7, CountryId = 1},
                        new City() {Id = 54, Name = "الرين",GovernorateId = 7, CountryId = 1},


                        new City() {Id = 55, Name = "بريدة",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 56, Name = "عنيزة",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 57, Name = "الرس",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 58, Name = "المذنب",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 59, Name = "البكيرية",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 60, Name = "البدائع",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 61, Name = "الأسياح",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 62, Name = "النبهانية",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 63, Name = "عيون الجواء",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 64, Name = "الشماسية",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 65, Name = "عقلة الصقور",GovernorateId = 8, CountryId = 1},
                        new City() {Id = 66, Name = "ضرية",GovernorateId = 8, CountryId = 1},


                        new City() {Id = 67, Name = "ينبع",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 68, Name = "بدر",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 69, Name = "العلا",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 70, Name = "الحناكية",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 71, Name = "مهد الذهب",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 72, Name = "خيبر",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 73, Name = "العيص",GovernorateId = 9, CountryId = 1},
                        new City() {Id = 74, Name = "وادي الفرع",GovernorateId = 9, CountryId = 1},



                        new City() {Id = 75, Name = "تيماء",GovernorateId = 13, CountryId = 1},
                        new City() {Id = 76, Name = "ضباء",GovernorateId = 13, CountryId = 1},
                        new City() {Id = 77, Name = "الوجه",GovernorateId = 13, CountryId = 1},
                        new City() {Id = 78, Name = "حقل",GovernorateId = 13, CountryId = 1},
                        new City() {Id = 79, Name = "املج",GovernorateId = 13, CountryId = 1},
                        new City() {Id = 80, Name = "البدع",GovernorateId = 13, CountryId = 1},


                        new City() {Id = 81, Name = "صبيا",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 82, Name = "صامطة",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 83, Name = "أبو عريش",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 84, Name = "جازان",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 85, Name = "أحد المسارحة",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 86, Name = "بيش",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 87, Name = "العارضة",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 88, Name = "ضمد",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 89, Name = "الدرب",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 90, Name = "العيدابي",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 91, Name = "الدائر",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 92, Name = "الريث",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 93, Name = "الحرث",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 94, Name = "فرسان",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 95, Name = "الطوال",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 96, Name = "هروب",GovernorateId = 6, CountryId = 1},
                        new City() {Id = 97, Name = "فيفاء",GovernorateId = 6, CountryId = 1},


                        new City() {Id = 98, Name = "حائل",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 99, Name = "بقعاء",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 100, Name = "قفار",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 101, Name = "الغزالة",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 102, Name = "الشنان",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 103, Name = "موقق",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 104, Name = "الحائط",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 105, Name = "السليمي",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 106, Name = "الشملي",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 107, Name = "سميراء",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 108, Name = "الحليفة",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 109, Name = "تربه",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 110, Name = "جبة",GovernorateId = 5, CountryId = 1},
                        new City() {Id = 111, Name = "وسيطاء الحفن",GovernorateId = 5, CountryId = 1},


                        new City() {Id = 112, Name = "أبها",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 113, Name = "خميس مشيط",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 114, Name = "بيشة",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 115, Name = "النماص",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 116, Name = "أحد رفيدة",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 117, Name = "بارق",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 118, Name = "البرك",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 119, Name = "بلقرن",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 120, Name = "تثليث",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 121, Name = "تنومة",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 122, Name = "رجال ألمع",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 123, Name = "الحرجة",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 124, Name = "سراة عبيدة",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 125, Name = "طريب",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 126, Name = "ظهران الجنوب",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 127, Name = "محايل عسير",GovernorateId = 4, CountryId = 1},
                        new City() {Id = 128, Name = "المجاردة",GovernorateId = 4, CountryId = 1},


                        new City() {Id = 129, Name = "مكه",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 130, Name = "جدة",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 131, Name = "الطائف",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 132, Name = "رابغ",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 133, Name = "الكامل",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 134, Name = "القنفذة",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 135, Name = "تربة",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 136, Name = "الليث",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 137, Name = "الجموم",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 138, Name = "خليص",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 139, Name = "أضم",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 140, Name = "الخرمة",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 141, Name = "رنية",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 142, Name = "العرضيات",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 143, Name = "الموية",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 144, Name = "ميسان",GovernorateId = 3, CountryId = 1},
                        new City() {Id = 145, Name = "بحرة",GovernorateId = 3, CountryId = 1},


                        new City() {Id = 146, Name = "نجران",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 147, Name = "شرورة",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 148, Name = "الحصينية",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 149, Name = "ثار",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 150, Name = "يدمه",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 151, Name = "بدر الجنوب",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 152, Name = "خباش",GovernorateId = 2, CountryId = 1},
                        new City() {Id = 153, Name = "الخرخير",GovernorateId = 2, CountryId = 1},

                }
            );
        }
    }
}
