using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Interfaces
{
    public interface IDepartmentService
    {
        Task<IEnumerable<Department>> GetDepartments();
    }
}
