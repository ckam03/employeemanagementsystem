namespace EmployeeManagementAPI.Dtos;

public class CreateEmployeeDto
{
    public int DepartmentId { get; set; }
    public string FirstName { get; init; } = string.Empty;
    public string LastName { get; init; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Salary { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}