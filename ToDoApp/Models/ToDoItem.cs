using System.ComponentModel.DataAnnotations;

namespace ToDoApp.Models
{
    public class ToDoItem
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Task { get; set; }

        public bool IsCompleted { get; set; }
    }
}
