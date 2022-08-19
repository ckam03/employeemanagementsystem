using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Dtos;
using EmployeeManagementAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace EmployeeManagementAPI.Controllers
{
    [ApiController]
    [Route("Employee")]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext _context;
        public EmployeeController(EmployeeDbContext context)
        {
            _context = context;
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
                })
                .ToListAsync();

            return employees;
        }

        [HttpPost]
        public async Task<ActionResult> CreateEmployee([FromBody]CreateEmployeeDto employeeDto)
        {
            var department = await _context.Departments.FindAsync(employeeDto.DepartmentId);

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

            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        //[HttpPut]
        //public async Task UpdateEmployee()
        //{

        //}

        //[HttpDelete]
        //public async Task DeleteEmployee()
        //{

        //}
    }
}
