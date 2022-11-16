namespace EmployeeManagementAPI.Interfaces;

public interface ISoftDeletableEntity
{
    bool IsActive { get; }
    void Activate();
    void Deactivate();
}
