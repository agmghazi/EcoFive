using EcoFive.Models.Models;
using EcoFive.Models.Repository;

namespace EcoFive.DataAccessLayer.Admin
{
    public class MasterPageDetailsAccessLayer : IMasterPageDetailsRepository
    {
        private readonly AppDbContext _context;

        public MasterPageDetailsAccessLayer(AppDbContext context)
        {
            _context = context;
        }


        public MasterPageDetail GetDetails(int id)
        {
            return _context.MasterPageDetails.Find(id);

        }

        public MasterPageDetail Update(MasterPageDetail detailsChanges)
        {
            var details = _context.MasterPageDetails.Attach(detailsChanges);
            details.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return detailsChanges;
        }

        public MasterPageDetail Add(MasterPageDetail detailsChanges)
        {
            _context.MasterPageDetails.Add(detailsChanges);
            _context.SaveChanges();
            return detailsChanges;

        }
    }
}
