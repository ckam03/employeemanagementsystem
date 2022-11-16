using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Interfaces;
using EmployeeManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementAPI.Services;

public class DepartmentService : IDepartmentService
{
    private readonly EmployeeDbContext _context;
        
    public DepartmentService(EmployeeDbContext context)
    {
        _context = context;
    }

    public async Task <IEnumerable<Department>> GetDepartments()
    {
        return await _context.Departments.ToListAsync();
    }

    public async Task<Department?> GetByIdAsync(int DepartmentId)
    {
        return await _context.Departments.FindAsync(DepartmentId);
    }

    public async Task CreateAsync(Department department)
    {
        await _context.Departments.AddAsync(department);
        _context.SaveChanges();
    }

    public async Task UpdateAsync(Department department)
    {
        _context.Departments.Update(department);
        await _context.SaveChangesAsync();
    }
}
