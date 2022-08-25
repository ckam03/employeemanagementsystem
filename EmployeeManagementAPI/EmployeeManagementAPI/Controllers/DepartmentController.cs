using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Dtos;
using EmployeeManagementAPI.Interfaces;
using EmployeeManagementAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace EmployeeManagementAPI.Controllers
{
    [Route("Department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly EmployeeDbContext _context;
        private readonly IDepartmentService _departmentService;
        
        public DepartmentController(EmployeeDbContext context, IDepartmentService departmentService)
        {
            _context = context;
            _departmentService = departmentService;
        }
        // GET: api/<DepartmentController>
        [HttpGet]
        public async Task<IEnumerable<DepartmentDto>> Get()
        {
            var departments = await _departmentService.GetDepartments();
            var departmentDto = departments
                .Select(department => new DepartmentDto()
            {
                DepartmentId = department.DepartmentId,
                DepartmentName = department.DepartmentName,
                Employees = department.Employees.Select(employee => new EmployeeDto()
                {
                    EmployeeId = employee.EmployeeId,
                    FirstName = employee.FirstName,
                    LastName = employee.LastName,
                    PhoneNumber = employee.PhoneNumber,
                    Salary = employee.Salary,
                    Email = employee.Email,
                }).ToList()
            });
            return departmentDto;
        }

        // POST api/<DepartmentController>
        [HttpPost]
        public async Task CreateDepartment(CreateDepartmentDto departmentDto)
        {
            var department = new Department()
            {
                DepartmentId = departmentDto.DepartmentId,
                DepartmentName = departmentDto.DepartmentName,
            };
            await _context.Departments.AddAsync(department);
            await _context.SaveChangesAsync();
        }

        // PUT api/<DepartmentController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateDepartment(DepartmentDto updateDepartment)
        {
            var department = await _context.Departments.FindAsync(updateDepartment.DepartmentId);

            if (department is null)
            {
                return NotFound();
            }

            _context.Departments.Update(department);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<DepartmentController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
        }
    }
}
