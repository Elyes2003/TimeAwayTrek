import { Routes,Route ,Navigate} from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { LoginPage } from '../pages/login';
import { PageNotFound } from '../pages/PageNotFound';
import { SignUp } from '../pages/signup';
import AdminHome from '../pages/admin/adminHome';
import { AdminProfile } from '../pages/admin/adminprofile';
import Dashboard from '../pages/admin/processus';
import RequestList from '../pages/admin/requestlist';
import { Users } from '../pages/admin/employes';
import UserHome from '../pages/cuurentuser/userHome';
import DemandeUser from '../pages/cuurentuser/demandeUser';
import { About } from '../pages/About';
import { Infouser } from '../pages/cuurentuser/infoUser';
import { EmployeeHome } from '../pages/cuurentuser/notificationUser';
import { NotificationAdmin } from '../pages/admin/notificationsAdmin';
import { useAuthContext } from '../hooks/useAuthContext';
import { UserDashboard } from '../pages/cuurentuser/DashboardUser';

export const AllRoutes = () => {
  const {user} = useAuthContext()
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route 
    path="/login" 
    element={
      !user ? (
        <LoginPage />
      ) : user.isAdmin === true ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/user" />
      )
    } 
   />
    <Route path="/" element={<HomePage />} />
      <Route 
    path="/signup" 
    element={
      !user ? (
        <SignUp />
      ) : user.isAdmin === true ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/user" />
      )
    } 
   />
    <Route path="/about" element={<About />} />

     <Route path="/admin" element={user ? <AdminHome /> : <Navigate to="/login"/>}>
        <Route path="profile" element={<AdminProfile />} />
        <Route path="dashboard"  element={<Dashboard />} />
        <Route  index element={<Dashboard />} />
        <Route path="demandes" element={<RequestList />} />
        <Route path="notificationAdmin" element={<NotificationAdmin />} />
        <Route path="employees" element={<Users />} />
    </Route>



        <Route path="/user" element={user ? <UserHome /> : <Navigate to="/login"/>}>
            <Route path="dashboard"  element={<UserDashboard />} />
            <Route  index element={<UserDashboard />} />
            <Route path="demandeUser" element={<DemandeUser />} />
            <Route path="infouser" element={<Infouser />} />
            <Route path="notificationUser" element={<EmployeeHome />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

</Routes>

)
}
