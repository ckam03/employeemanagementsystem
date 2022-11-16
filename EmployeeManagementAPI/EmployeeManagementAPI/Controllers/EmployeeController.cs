using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Dtos;
using EmployeeManagementAPI.Interfaces;
using EmployeeManagementAPI.Models;
using EmployeeManagementAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementAPI.Controllers;

[ApiController]
[Route("Employee")]
public class EmployeeController : ControllerBase
{
    private readonly EmployeeDbContext _context;
    private readonly EmployeeService _employeeService;

    public EmployeeController(EmployeeDbContext context, EmployeeService employeeService)
    {
        _context = context;
        _employeeService = employeeService;
    }

    [HttpGet]
    public async Task<IEnumerable<EmployeeDto>> GetEmployees()
    {     
        var employees = await _context.Employees
            .Select(e => new EmployeeDto()
            {
                EmployeeId = e.EmployeeId,
                FirstName = e.FirstName,
                LastName = e.LastName,
                PhoneNumber = e.PhoneNumber,
                Salary = e.Salary,
                Email = e.Email,
                DepartmentName = e.Department.DepartmentName
            })
            .ToListAsync();

        return employees;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult> GetEmployeeById([FromQuery] int id)
    {
        var employee = await _employeeService.GetEmployeeById(id);

        if (employee is null)
        {
            return NotFound();
        }

        return Ok(employee);
    }

    [HttpPost]
    public async Task<ActionResult> CreateEmployee([FromBody]CreateEmployeeDto employeeDto, [FromServices] IDepartmentService _departmentService)
    {
        var department = await _departmentService.GetByIdAsync(employeeDto.DepartmentId);

        if (department is null)
        {
            return NotFound();
        }
        
        var employee = new Employee()
        {
            EmployeeId = Guid.NewGuid(),
            FirstName = employeeDto.FirstName,
            LastName = employeeDto.LastName,
            PhoneNumber = employeeDto.PhoneNumber,
            Salary = employeeDto.Salary,
            Email = employeeDto.Email,
            Department = department
        };

        await _employeeService.CreateAsync(employee);
        return NoContent();
    }

    [HttpPut]
    public async Task<ActionResult> UpdateEmployee([FromBody]EmployeeDto employeeDto)
    {
        var employee = await _context.Employees.FindAsync(employeeDto.EmployeeId);
        if (employee is null)
        {
            return NotFound();
        }

        _context.Employees.Update(employee);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    //[HttpDelete]
    //public async Task DeleteEmployee()
    //{

    //}
}
