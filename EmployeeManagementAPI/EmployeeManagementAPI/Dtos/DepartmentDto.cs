﻿using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Dtos
{
    public class DepartmentDto
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
    }
}
