import { Route } from "react-router-dom";

import Home from "../view/FrontEnd/Pages/Home";
import BlogPage from "../view/FrontEnd/pages/BlogPage";
import BlogDetails from "../view/FrontEnd/Pages/BlogDetails";
import FrontendLayout from "../view/layouts/FrontEndLayout";
import TopMenuContent from "../view/FrontEnd/Pages/TopMenuContent";
import SubMenuContent from "../view/FrontEnd/Pages/SubMenuContent";
import Contact from "../view/FrontEnd/pages/ContactPage";
import AboutPage from "../view/FrontEnd/pages/AboutPage";
import ContentDetails from "../view/FrontEnd/pages/ContentDetails";

export const FrontendRoutes = (
  <>
    <Route element={<FrontendLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/:slug" element={<TopMenuContent />} />
      <Route path="/:slug/:slug" element={<SubMenuContent />} />

      <Route path="/more-details/:slug" element={<ContentDetails />} />

      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      <Route path="/contact-us" element={<Contact />} />
    </Route>
  </>
);
