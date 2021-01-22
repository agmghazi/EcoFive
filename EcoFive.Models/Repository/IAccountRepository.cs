using EcoFive.Models.Models;
using System.Collections.Generic;

namespace EcoFive.Models.Repository
{
    public interface IAccountRepository
    {
        List<City> GetCity(int id);
        List<Governorate> GetGovernorate(int id);
        IEnumerable<Country> GetAllCountries();
        IEnumerable<City> GetAllCites();
        IEnumerable<Governorate> GetAllGovernorate();

        string GetCurrentCity(int id);
        string GetCurrentGovernorate(int id);
        string GetCurrentCountry(int id);

        bool ChangeStatus(string id);
    }
}
