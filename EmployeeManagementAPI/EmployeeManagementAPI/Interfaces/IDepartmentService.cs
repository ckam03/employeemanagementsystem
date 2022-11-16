using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Interfaces
{
    public interface IDepartmentService
    {
        Task<IEnumerable<Department>> GetDepartments();
        Task CreateAsync(Department department);
        Task<Department?> GetByIdAsync(int DepartmentId);
        Task UpdateAsync(Department department);
    }
}
