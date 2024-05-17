import { Routes,Route } from 'react-router-dom';
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


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        
        <Route path="/admin" element={<AdminHome/>}>
          <Route path="profile" element={<AdminProfile/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="demandes" element={<RequestList/>}></Route>
          <Route path="notificationAdmin" element={<NotificationAdmin/>}></Route>
          <Route path="employees" element={<Users/>}></Route>
        </Route>

        <Route path="/user" element={<UserHome/>}>
          <Route path="demandeUser" element={<DemandeUser/>}></Route>
          <Route path="infouser" element={<Infouser/>}></Route>
          <Route path="notificationUser" element={<EmployeeHome/>}></Route>
        </Route>

    </Routes>
)
}
