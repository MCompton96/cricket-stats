using System;
using System.ComponentModel.DataAnnotations;

namespace cricket_api.Models
{
    public class Game
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Opponent { get; set; }

        public Result Result { get; set; }

        public GameLocation GameLocation { get; set; }

        public Bowling Bowling { get; set; }
        
        public Batting Batting { get; set; }
    }
}