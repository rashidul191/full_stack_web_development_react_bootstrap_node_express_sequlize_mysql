import { Route } from "react-router-dom";

import Home from "../view/FrontEnd/Pages/Home";
import BlogPage from "../view/FrontEnd/pages/BlogPage";
import BlogDetails from "../view/FrontEnd/Pages/BlogDetails";
import FrontendLayout from "../view/layouts/FrontEndLayout";
import TopMenuContent from "../view/FrontEnd/Pages/TopMenuContent";
import SubMenuContent from "../view/FrontEnd/Pages/SubMenuContent";
import Contact from "../view/FrontEnd/pages/ContactPage";

export const FrontendRoutes = (
  <>
    <Route element={<FrontendLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/:slug" element={<TopMenuContent />} />
      <Route path="/:slug/:slug" element={<SubMenuContent />} />

      <Route path="/contact-us" element={<Contact />} />
    </Route>
  </>
);
