using System;
using System.Collections.Generic;
using System.Text;
using EcoFive.Models.Models;
using EcoFive.Models.Repository;

namespace EcoFive.DataAccessLayer
{
   public class ContactAccessLayer :IContactRepository
    {
        private readonly AppDbContext _context;

        public ContactAccessLayer(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Contact> GetMessages()
        {
            return _context.Contacts;
        }

        public Contact Add(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return contact;
        }
    }
}
