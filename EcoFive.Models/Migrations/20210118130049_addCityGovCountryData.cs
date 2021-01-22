using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addCityGovCountryData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "المملكه العربية السعودية" });

            migrationBuilder.InsertData(
                table: "Governorates",
                columns: new[] { "Id", "CountryId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "المنطقه الشرقية" },
                    { 2, 1, "منطقة نجران" },
                    { 3, 1, "منطقة مكة المكرمة" },
                    { 4, 1, "منطقة عسير" },
                    { 5, 1, "منطقة حائل" },
                    { 6, 1, "منطقة جازان" },
                    { 7, 1, "منطقة الرياض" },
                    { 8, 1, "منطقة القصيم" },
                    { 9, 1, "منطقة المدينة المنورة" },
                    { 10, 1, "منطقة الحدود الشماليه" },
                    { 11, 1, "منطقة الجوف" },
                    { 12, 1, "منطقة الباحه" },
                    { 13, 1, "منطقة تبوك" }
                });

            migrationBuilder.InsertData(
                table: "Cities",
                columns: new[] { "Id", "CountryId", "GovernorateId", "Name" },
                values: new object[,]
                {
                    { 1, 1, 1, "رأس تنورة" },
                    { 45, 1, 7, "ضرما" },
                    { 46, 1, 7, "المزاحمية" },
                    { 47, 1, 7, "رماح" },
                    { 48, 1, 7, "ثادق" },
                    { 49, 1, 7, "حريملاء" },
                    { 50, 1, 7, "الحريق" },
                    { 51, 1, 7, "الغاط" },
                    { 52, 1, 7, "مرات" },
                    { 53, 1, 7, "الدلم" },
                    { 54, 1, 7, "الرين" },
                    { 55, 1, 8, "بريدة" },
                    { 56, 1, 8, "عنيزة" },
                    { 57, 1, 8, "الرس" },
                    { 58, 1, 8, "المذنب" },
                    { 59, 1, 8, "البكيرية" },
                    { 44, 1, 7, "السليل" },
                    { 60, 1, 8, "البدائع" },
                    { 43, 1, 7, "عفيف" },
                    { 41, 1, 7, "شقراء" },
                    { 91, 1, 6, "الدائر" },
                    { 92, 1, 6, "الريث" },
                    { 93, 1, 6, "الحرث" },
                    { 94, 1, 6, "فرسان" },
                    { 95, 1, 6, "الطوال" },
                    { 96, 1, 6, "هروب" },
                    { 97, 1, 6, "فيفاء" },
                    { 32, 1, 7, "الدرعية" },
                    { 33, 1, 7, "الخرج" },
                    { 35, 1, 7, "الدوادمى" },
                    { 36, 1, 7, "المجمعة" },
                    { 37, 1, 7, "القويعية" },
                    { 38, 1, 7, "وادي الدواسر" },
                    { 39, 1, 7, "الأفلاج" },
                    { 40, 1, 7, "الزلفى" },
                    { 42, 1, 7, "حوطة بنى تميم" },
                    { 90, 1, 6, "العيدابي" },
                    { 61, 1, 8, "الأسياح" },
                    { 63, 1, 8, "عيون الجواء" },
                    { 24, 1, 11, "دومة الجندل" },
                    { 25, 1, 11, "طبرجل" },
                    { 13, 1, 12, "غامد الزناد" },
                    { 14, 1, 12, "المندق" },
                    { 15, 1, 12, "المخواة" },
                    { 16, 1, 12, "العقيق" },
                    { 17, 1, 12, "قلوة" },
                    { 18, 1, 12, "القرى" },
                    { 19, 1, 12, "بني حسن" },
                    { 20, 1, 12, "الحجرة" },
                    { 21, 1, 12, "بلجرشي" },
                    { 75, 1, 13, "تيماء" },
                    { 76, 1, 13, "ضباء" },
                    { 77, 1, 13, "الوجه" },
                    { 78, 1, 13, "حقل" },
                    { 23, 1, 11, "القريات" },
                    { 62, 1, 8, "النبهانية" },
                    { 22, 1, 11, "سكاكا" },
                    { 30, 1, 10, "جديدة عرعر" },
                    { 64, 1, 8, "الشماسية" },
                    { 65, 1, 8, "عقلة الصقور" },
                    { 66, 1, 8, "ضرية" },
                    { 67, 1, 9, "ينبع" },
                    { 68, 1, 9, "بدر" },
                    { 69, 1, 9, "العلا" },
                    { 70, 1, 9, "الحناكية" },
                    { 71, 1, 9, "مهد الذهب" },
                    { 72, 1, 9, "خيبر" },
                    { 73, 1, 9, "العيص" },
                    { 74, 1, 9, "وادي الفرع" },
                    { 26, 1, 10, "عرعر" },
                    { 27, 1, 10, "طريف" },
                    { 28, 1, 10, "رفحاء" },
                    { 29, 1, 10, "العويقيلة" },
                    { 31, 1, 10, "شعبة نصاب" },
                    { 89, 1, 6, "الدرب" },
                    { 88, 1, 6, "ضمد" },
                    { 87, 1, 6, "العارضة" },
                    { 129, 1, 3, "مكه" },
                    { 130, 1, 3, "جدة" },
                    { 131, 1, 3, "الطائف" },
                    { 132, 1, 3, "رابغ" },
                    { 133, 1, 3, "الكامل" },
                    { 134, 1, 3, "القنفذة" },
                    { 135, 1, 3, "تربة" },
                    { 136, 1, 3, "الليث" },
                    { 137, 1, 3, "الجموم" },
                    { 138, 1, 3, "خليص" },
                    { 139, 1, 3, "أضم" },
                    { 140, 1, 3, "الخرمة" },
                    { 141, 1, 3, "رنية" },
                    { 142, 1, 3, "العرضيات" },
                    { 143, 1, 3, "الموية" },
                    { 153, 1, 2, "الخرخير" },
                    { 144, 1, 3, "ميسان" },
                    { 152, 1, 2, "خباش" },
                    { 150, 1, 2, "يدمه" },
                    { 2, 1, 1, "الدمام" },
                    { 3, 1, 1, "النعيرية" },
                    { 4, 1, 1, "الخفجى" },
                    { 5, 1, 1, "حفر الباطن" },
                    { 6, 1, 1, "قرية العليا" },
                    { 7, 1, 1, "الخبر" },
                    { 8, 1, 1, "القطيف" },
                    { 9, 1, 1, "الاحساء" },
                    { 10, 1, 1, "الجبيل" },
                    { 11, 1, 1, "بقيق" },
                    { 12, 1, 1, "العديد" },
                    { 146, 1, 2, "نجران" },
                    { 147, 1, 2, "شرورة" },
                    { 148, 1, 2, "الحصينية" },
                    { 149, 1, 2, "ثار" },
                    { 151, 1, 2, "بدر الجنوب" },
                    { 145, 1, 3, "بحرة" },
                    { 112, 1, 4, "أبها" },
                    { 113, 1, 4, "خميس مشيط" },
                    { 103, 1, 5, "موقق" },
                    { 104, 1, 5, "الحائط" },
                    { 105, 1, 5, "السليمي" },
                    { 106, 1, 5, "الشملي" },
                    { 107, 1, 5, "سميراء" },
                    { 108, 1, 5, "الحليفة" },
                    { 109, 1, 5, "تربه" },
                    { 110, 1, 5, "جبة" },
                    { 111, 1, 5, "وسيطاء الحفن" },
                    { 81, 1, 6, "صبيا" },
                    { 82, 1, 6, "صامطة" },
                    { 83, 1, 6, "أبو عريش" },
                    { 84, 1, 6, "جازان" },
                    { 85, 1, 6, "أحد المسارحة" },
                    { 86, 1, 6, "بيش" },
                    { 102, 1, 5, "الشنان" },
                    { 101, 1, 5, "الغزالة" },
                    { 100, 1, 5, "قفار" },
                    { 99, 1, 5, "بقعاء" },
                    { 114, 1, 4, "بيشة" },
                    { 115, 1, 4, "النماص" },
                    { 116, 1, 4, "أحد رفيدة" },
                    { 117, 1, 4, "بارق" },
                    { 118, 1, 4, "البرك" },
                    { 119, 1, 4, "بلقرن" },
                    { 120, 1, 4, "تثليث" },
                    { 79, 1, 13, "املج" },
                    { 121, 1, 4, "تنومة" },
                    { 123, 1, 4, "الحرجة" },
                    { 124, 1, 4, "سراة عبيدة" },
                    { 125, 1, 4, "طريب" },
                    { 126, 1, 4, "ظهران الجنوب" },
                    { 127, 1, 4, "محايل عسير" },
                    { 128, 1, 4, "المجاردة" },
                    { 98, 1, 5, "حائل" },
                    { 122, 1, 4, "رجال ألمع" },
                    { 80, 1, 13, "البدع" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 72);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 74);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 75);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 76);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 77);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 78);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 79);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 80);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 81);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 82);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 83);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 84);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 85);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 86);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 87);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 88);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 89);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 90);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 91);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 92);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 93);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 94);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 95);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 96);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 97);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 98);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 99);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 100);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 101);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 102);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 103);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 104);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 105);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 106);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 107);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 108);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 109);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 110);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 111);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 112);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 113);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 114);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 115);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 116);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 117);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 118);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 119);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 120);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 121);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 122);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 123);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 124);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 125);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 126);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 127);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 128);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 129);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 130);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 131);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 132);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 133);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 134);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 135);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 136);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 137);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 138);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 139);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 140);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 141);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 142);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 143);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 144);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 145);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 146);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 147);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 148);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 149);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 150);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 151);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 152);

            migrationBuilder.DeleteData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 153);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Countries",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
