namespace EmployeeManagementAPI.Models;

public class Department
{
    public int DepartmentId { get; set; }
    public string DepartmentName { get; init; } = string.Empty;
    public ICollection<Employee> Employees { get; set; } = null!;
}
