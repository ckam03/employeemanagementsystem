using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Interfaces;
using EmployeeManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementAPI.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly EmployeeDbContext _context;
        public DepartmentService(EmployeeDbContext context)
        {
            _context = context;
        }

        public async Task <IEnumerable<Department>> GetDepartments()
        {
            return await _context.Departments
                .Include(d => d.Employees)
                .ToListAsync();
        }
    }
}
