using System;
using System.ComponentModel.DataAnnotations;

namespace cricket_api.Models
{
    public class Bowling
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public Guid GameId { get; set; }
        public Game Game { get; set; }
        [Required]
        public int Overs { get; set; }
        [Required]
        public int Wickets { get; set; }
        [Required]
        public int Runs { get; set; }
        public int Maidens { get; set; }
    }
}