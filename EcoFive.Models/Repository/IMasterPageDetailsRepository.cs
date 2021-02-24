using EcoFive.Models.Models;

namespace EcoFive.Models.Repository
{
    public interface IMasterPageDetailsRepository
    {
        MasterPageDetail GetDetails(int id);
        MasterPageDetail Update(MasterPageDetail detailsChanges);
        MasterPageDetail Add(MasterPageDetail detailsChanges);
    }
}
