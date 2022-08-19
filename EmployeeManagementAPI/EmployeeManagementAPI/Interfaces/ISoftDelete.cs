namespace EmployeeManagementAPI.Interfaces
{
    public interface ISoftDelete
    {
        bool IsActive { get; }
        void Activate();
        void Deactivate();
    }
}
