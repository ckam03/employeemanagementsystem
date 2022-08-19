namespace EmployeeManagementAPI.Dtos;

public class CreateDepartmentDto
{
    public int DepartmentId { get; set; }
    public string DepartmentName { get; set; } = string.Empty;
}