using System;
using System.ComponentModel.DataAnnotations;

namespace cricket_api.Models
{
    public class GameLocation
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid GameId { get; set; }

        public Game Game { get; set; }

        [Required]
        public bool Home { get; set; }

        [Required]
        public string Ground { get; set; }
    }
}