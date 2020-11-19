using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Form_DemoAPI.Models
{
    public class Form_DBContext : DbContext
    {
        public Form_DBContext(DbContextOptions<Form_DBContext>options)
            :base(options)
        {
              
        }
        public DbSet<User> User { get; set; }

    }
}
