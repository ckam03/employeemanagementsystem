using EmployeeManagementAPI.Interfaces;

namespace EmployeeManagementAPI.Models;

public class SoftDeletableEntity : ISoftDeletableEntity
{
    public int Id { get; set; }
    public bool IsActive { get; set; } = true;

    public void Activate()
    {
        throw new NotImplementedException();
    }

    public void Deactivate()
    {
        throw new NotImplementedException();
    }
}
