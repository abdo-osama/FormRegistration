using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Form_DemoAPI.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string FName { get; set; }
        [Required]
        public string MName { get; set; }
        [Required]
        public string LName { get; set; }
        [Required]
        public string Birth_Date { get; set; }
        [Required]
        public string Mobile { get; set; }
        [Required]
        public string Email { get; set; }

        [Required]
        public string Governate { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public int Flat_Number { get; set; }
        [Required]
        public int Building_Num { get; set; }



    }
}
