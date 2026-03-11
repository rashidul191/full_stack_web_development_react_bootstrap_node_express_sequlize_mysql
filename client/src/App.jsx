import { Routes, Route } from "react-router-dom";
import FrontLayout from "./view/layouts/FrontLayout";
import UserLayout from "./view/layouts/UserLayout";
import AdminLayout from "./view/layouts/AdminLayout";
import Home from "./view/FrontEnd/Pages/Home";
import NotFound from "./view/FrontEnd/Pages/NotFound";
import BlogDetails from "./view/FrontEnd/Pages/BlogDetails";
import LoginUser from "./view/Auth/LoginUser";
import RegistrationUser from "./view/Auth/RegistrationUser";
import LoginAdmin from "./view/Auth/LoginAdmin";
import PrivateRoute from "./routes/PrivateRoute";

import GeneralSetting from "./view/Admin/Setting/GeneralSetting";
import { ROLES } from "./utility/roles";
import SocialLinks from "./view/Admin/Setting/SocialLinks";
import BlogPage from "./view/FrontEnd/pages/BlogPage";
import BlogIndex from "./view/Admin/Blog/BlogIndex";
import BlogForm from "./view/Admin/Blog/BlogForm";
import CategoryIndex from "./view/Admin/Category/CategoryIndex";
import CategoryForm from "./view/Admin/Category/CategoryForm";
import SliderIndex from "./view/Admin/Slider/SliderIndex";
import SliderForm from "./view/Admin/Slider/SliderForm";

function App() {
  return (
    <Routes>
      {/* FrontEnd Layout */}
      <Route element={<FrontLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>

      {/* User Auth Route */}
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegistrationUser />} />
      <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />

      {/* User Panel [role from backend enum value] User = 1*/}
      <Route
        path="/user"
        element={
          <PrivateRoute role={ROLES.USER}>
            <UserLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<h1>User Dashboard</h1>} />
        <Route path="profile" element={<h1>User Profile</h1>} />
      </Route>

      {/* Admin Auth Route  */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      {/* <Route path="/register" element={<h1>Register</h1>} /> */}

      {/* Admin Panel [role from backend enum value] Admin = 0 */}
      <Route
        path="/admin"
        element={
          // <PrivateRoute role={ROLES.ADMIN}>
          <AdminLayout />
          // </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<h1>Admin Dashboard</h1>} />

        <Route path="slider">
          <Route path="" element={<SliderIndex />} />
          <Route path="create" element={<SliderForm />} />
          <Route path="edit/:id" element={<SliderForm />} />
        </Route>
        <Route path="review">
          <Route path="" element={<BlogIndex />} />
          <Route path="create" element={<BlogForm />} />
          <Route path="edit/:id" element={<BlogForm />} />
        </Route>

        <Route path="blog">
          <Route path="" element={<BlogIndex />} />
          <Route path="create" element={<BlogForm />} />
          <Route path="edit/:id" element={<BlogForm />} />
        </Route>

        <Route path="category">
          <Route path="" element={<CategoryIndex />} />
          <Route path="create" element={<CategoryForm />} />
          <Route path="edit/:id" element={<CategoryForm />} />
        </Route>

        <Route path="setting">
          <Route path="general" element={<GeneralSetting />} />
          <Route path="social-links" element={<SocialLinks />} />
          {/* <Route path="profile" element={<GeneralSetting />} /> */}
        </Route>
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
