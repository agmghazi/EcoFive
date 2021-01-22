using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using System.Collections.Generic;
using System.Linq;

namespace EcoFive.DataAccessLayer
{
    public class AccountAccessLayer : IAccountRepository
    {
        private readonly AppDbContext _context;

        public AccountAccessLayer(AppDbContext context)
        {
            _context = context;
        }
        public List<City> GetCity(int id)
        {
            var cities = _context.Cities
                .Where(city => city.GovernorateId == id)
               .ToList();
            return cities;
        }

        public List<Governorate> GetGovernorate(int id)
        {
            var governorates = _context.Governorates
                .Where(gov => gov.CountryId == id)
                .ToList();
            return governorates;
        }

        public IEnumerable<Country> GetAllCountries()
        {
            return _context.Countries;
        }

        public IEnumerable<City> GetAllCites()
        {
            return _context.Cities;
        }

        public IEnumerable<Governorate> GetAllGovernorate()
        {
            return _context.Governorates;
        }

        public string GetCurrentCity(int id)
        {
            return _context.Cities.Find(id).Name;
        }

        public string GetCurrentGovernorate(int id)
        {
            return _context.Governorates.Find(id).Name;
        }

        public string GetCurrentCountry(int id)
        {
            return _context.Countries.Find(id).Name;
        }

        //this method to change status by ajax with json data
        public bool ChangeStatus(string id)
        {
            var user = _context.Users.Find(id);

            user.CloseAccount = !user.CloseAccount;
            _context.SaveChanges();
            return user.CloseAccount;
        }


    }
}
