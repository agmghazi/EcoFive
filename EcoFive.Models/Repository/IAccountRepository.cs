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

        Country AddCountry(Country country);
        Country UpdateCountry(Country countryChanges);
        Country DeleteCountry(int id);

        Governorate AddGovernorate(Governorate governorate);
        Governorate UpdateGovernorate(Governorate governorateChanges);
        Governorate DeleteGovernorate(int id);


        City AddCity(City city);
        City UpdateCity(City countryChanges);
        City DeleteCity(int id);
    }
}
