import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/LandingPage";
import PrivacyPolicyPage from "./pages/privacy-policy/PrivacyPolicyPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ScrollToHash } from "./components/ScrollToHash";
import { MobileProvider } from "./providers/MobileProvider";
import { LocaleProvider } from "./providers/LocaleProvider";
import { QueryProvider } from "./providers/QueryProvider";

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<LandingPage />} />
        {/* <Route path="/faq" element={<FAQPage />} /> */}
        {/* <Route path="/about-us" element={<AboutUsPage />} /> */}
        {/* <Route path="/stage" element={<StagingPage />} /> */}
      </Routes>
    </>
  );
};

const AppWithProviders = () => {
  return (
    <QueryProvider>
      <LocaleProvider>
        <MobileProvider>
          <App />
        </MobileProvider>
      </LocaleProvider>
    </QueryProvider>
  );
};

export default AppWithProviders;
