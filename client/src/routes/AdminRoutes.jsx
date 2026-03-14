import React from "react";
import { Route } from "react-router-dom";
import { ROLES } from "../enum/Roles";
import PrivateRoute from "./PrivateRoute";
import LoginAdmin from "../view/Auth/LoginAdmin";
import AdminLayout from "../view/layouts/AdminLayout";
import AdminDashboard from "../view/Admin/AdminDashboard";
import MenuIndex from "../view/Admin/Menu/MenuIndex";
import MenuForm from "../view/Admin/Menu/MenuForm";
import SubMenuIndex from "../view/Admin/SubMenu/SubMenuIndex";
import SubMenuForm from "../view/Admin/SubMenu/SubMenuForm";
import SliderIndex from "../view/Admin/Slider/SliderIndex";
import SliderForm from "../view/Admin/Slider/SliderForm";
import ReviewIndex from "../view/Admin/Review/ReviewIndex";
import ReviewForm from "../view/Admin/Review/ReviewForm";
import BlogIndex from "../view/Admin/Blog/BlogIndex";
import BlogForm from "../view/Admin/Blog/BlogForm";
import CategoryIndex from "../view/Admin/Category/CategoryIndex";
import CategoryForm from "../view/Admin/Category/CategoryForm";
import GeneralSetting from "../view/Admin/Setting/GeneralSetting";
import SocialLinks from "../view/Admin/Setting/SocialLinks";
import TeamIndex from "../view/Admin/Team/TeamIndex";
import TeamForm from "../view/Admin/Team/TeamForm";
import ContactMessageIndex from "../view/Admin/ContactMessage/ContactMessageIndex";
import ContactMessageShow from "../view/Admin/ContactMessage/ContactMessageShow";
import ClientBrandIndex from "../view/Admin/ClientBrand/ClientBrandIndex";
import ClientBrandForm from "../view/Admin/ClientBrand/ClientBrandForm";
import FAQIndex from "../view/Admin/FAQ/FAQIndex";
import FAQForm from "../view/Admin/FAQ/FAQForm";

export const AdminRoutes = (
  <>
    <Route path="/admin/login" element={<LoginAdmin />} />
    {/* <Route path="/register" element={<h1>Register</h1>} /> */}

    {/* Admin Panel [role from backend enum value] Admin = 0 */}
    <Route
      path="/admin"
      element={
        // <PrivateRoute role={ROLES.Admin}>
        <AdminLayout />
        // </PrivateRoute>
      }
    >
      <Route path="dashboard" element={<AdminDashboard></AdminDashboard>} />

      <Route path="menu">
        <Route path="" element={<MenuIndex />} />
        <Route path="create" element={<MenuForm />} />
        <Route path="edit/:id" element={<MenuForm />} />
      </Route>

      <Route path="sub-menu">
        <Route path="" element={<SubMenuIndex />} />
        <Route path="create" element={<SubMenuForm />} />
        <Route path="edit/:id" element={<SubMenuForm />} />
      </Route>
      <Route path="slider">
        <Route path="" element={<SliderIndex />} />
        <Route path="create" element={<SliderForm />} />
        <Route path="edit/:id" element={<SliderForm />} />
      </Route>

      <Route path="review">
        <Route path="" element={<ReviewIndex />} />
        <Route path="create" element={<ReviewForm />} />
        <Route path="edit/:id" element={<ReviewForm />} />
      </Route>

      <Route path="team">
        <Route path="" element={<TeamIndex />} />
        <Route path="create" element={<TeamForm />} />
        <Route path="edit/:id" element={<TeamForm />} />
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

      <Route path="client-brand">
        <Route path="" element={<ClientBrandIndex />} />
        <Route path="create" element={<ClientBrandForm />} />
        <Route path="edit/:id" element={<ClientBrandForm />} />
      </Route>

      <Route path="faq">
        <Route path="" element={<FAQIndex />} />
        <Route path="create" element={<FAQForm />} />
        <Route path="edit/:id" element={<FAQForm />} />
      </Route>

      <Route path="contact-message">
        <Route path="" element={<ContactMessageIndex />} />
        <Route path="show/:id" element={<ContactMessageShow />} />
      </Route>

      <Route path="setting">
        <Route path="general" element={<GeneralSetting />} />
        <Route path="social-links" element={<SocialLinks />} />
        {/* <Route path="profile" element={<GeneralSetting />} /> */}
      </Route>
    </Route>
  </>
);
