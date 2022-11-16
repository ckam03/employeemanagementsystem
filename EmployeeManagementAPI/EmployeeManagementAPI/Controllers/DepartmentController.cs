using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Dtos;
using EmployeeManagementAPI.Interfaces;
using EmployeeManagementAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagementAPI.Controllers;

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
        var departmentDto = departments.Select(department => new DepartmentDto()
        {
            DepartmentId = department.DepartmentId,
            DepartmentName = department.DepartmentName
        }).ToList();

        return departmentDto;
    }

    // POST api/<DepartmentController>
    [HttpPost]
    public async Task<ActionResult> CreateDepartment(CreateDepartmentDto departmentDto)
    {
        var department = new Department()
        {
            DepartmentName = departmentDto.DepartmentName,
        };

        await _departmentService.CreateAsync(department);
        return Ok(department);
    }

    // PUT api/<DepartmentController>/5
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateDepartment(DepartmentDto departmentDto)
    {
        var department = await _departmentService.GetByIdAsync(departmentDto.DepartmentId);
        if (department is null)
        {
            return NotFound();
        }

        await _departmentService.UpdateAsync(department);
        return NoContent();
    }

    // DELETE api/<DepartmentController>/5
    [HttpDelete("{id}")]
    public async Task Delete(DepartmentDto departmentDto)
    {
        var department = await _context.Departments.FindAsync(departmentDto.DepartmentId);
    }
}
