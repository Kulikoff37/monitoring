import {
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from '../pages/Login';
import Notifications from '../pages/Notifications';
import UsersPage from '../pages/Users';

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/users" element={<UsersPage />} />
  </Routes>
);

export default Router;
