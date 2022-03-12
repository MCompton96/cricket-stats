using System;
using System.ComponentModel.DataAnnotations;

namespace cricket_api.Models
{
    public class Batting
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public Guid GameId { get; set; }
        public Game Game { get; set; }
        [Required]
        public int Runs { get; set; }
        [Required]
        public bool Out { get; set; }
        public int? Boundaries { get; set; }
        public int? Sixes { get; set; }
    }
}