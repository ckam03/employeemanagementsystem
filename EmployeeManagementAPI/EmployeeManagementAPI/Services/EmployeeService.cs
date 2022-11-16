using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Services;

public class EmployeeService
{
	private readonly EmployeeDbContext _context;

    public EmployeeService(EmployeeDbContext context)
    {
        _context = context;
    }

    public async Task<Employee?> GetEmployeeById(int id)
	{
        var employee = await _context.Employees.FindAsync(id);
        return employee;
    }

    public async Task CreateAsync(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
    }
}
