using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace EcoFive.UI.Utilities
{
    public static class SendMailModel
    {
        public static void SendMail(string currentMail, string toMail, string subject, string body)
        {
            //config and send mail to client
            using (MailMessage message = new MailMessage(currentMail, toMail))
            {
                message.Subject = subject;
                message.IsBodyHtml = true;
                message.Body = body;

                using (SmtpClient smtp = new SmtpClient())
                {
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    NetworkCredential credential = new NetworkCredential(currentMail, "Dev**27med20100");
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = credential;
                    smtp.Port = 587;
                    smtp.Send(message);
                }
            }

        }
    }
}
