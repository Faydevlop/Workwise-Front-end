
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import EmployeeLogin from '../pages/employee/EmployeeLogin';
import EmployeeDashboard from '../pages/employee/EmployeeDashboard';
import EmployeeTaskmanagment from '../pages/employee/EmployeeTaskmanagment';
import EmployeeMeetingSchedule from '../pages/employee/EmployeeMeetingSchedule';
import EmployeePayroll from '../pages/employee/EmployeePayroll';
import EmployeeLeavemanagment from '../pages/employee/EmployeeLeavemanagment';
import EmployeeChat from '../pages/employee/EmployeeChat';
import EmployeeProfile from '../pages/employee/EmployeeProfile';
import EditProfile from '../pages/employee/EditProfile';
import ResetPassword from '../pages/employee/ResetPass';
import Resetpage from '../pages/employee/Resetpage';
import ApplyLeave from '../pages/employee/leavemanagment/ApplyLeave';

function EmployeeRoutes() {
  const isEmployeeAuth = useSelector((state) => state.employeeAuth.isAuthenticated);

  return (
    <Routes>
      <Route path="login" element={<EmployeeLogin />} />
      <Route path="dashboard" element={isEmployeeAuth ? <EmployeeDashboard /> : <Navigate to="/employee/login" />} />
      <Route path="tasks" element={isEmployeeAuth ? <EmployeeTaskmanagment /> : <Navigate to="/employee/login" />} />
      <Route path="meetings" element={isEmployeeAuth ? <EmployeeMeetingSchedule /> : <Navigate to="/employee/login" />} />
      <Route path="payroll" element={isEmployeeAuth ? <EmployeePayroll /> : <Navigate to="/employee/login" />} />
      <Route path="leave" element={isEmployeeAuth ? <EmployeeLeavemanagment /> : <Navigate to="/employee/login" />} />
      <Route path="profile" element={isEmployeeAuth ? <EmployeeProfile /> : <Navigate to="/employee/login" />} />
      <Route path="chat" element={isEmployeeAuth ? <EmployeeChat /> : <Navigate to="/employee/login" />} />
      <Route path="editprofile/:userId" element={isEmployeeAuth ? <EditProfile /> : <Navigate to="/employee/login" />} />
      <Route path="request-reset-password" element={isEmployeeAuth ? <ResetPassword /> : <Navigate to="/employee/login" />} />
      <Route path="leave/applyLeave" element={isEmployeeAuth ? <ApplyLeave /> : <Navigate to="/employee/login" />} />
      <Route path="reset-password" element={<Resetpage />} />
    </Routes>
  );
}

export default EmployeeRoutes;