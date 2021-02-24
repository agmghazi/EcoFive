using System;
using System.Collections.Generic;
using System.Text;
using EcoFive.Models.Models;

namespace EcoFive.Models.Repository
{
   public interface IContactRepository
    {
        IEnumerable<Contact> GetMessages();

        Contact Add(Contact contact);
    }
}
