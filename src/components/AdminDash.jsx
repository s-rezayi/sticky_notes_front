import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AdminDash = () => {
  return (
    <>
      <AdminHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminDash;
