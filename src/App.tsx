import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/LandingPage";
import PrivacyPolicyPage from "./pages/privacy-policy/PrivacyPolicyPage";
import StagingPage from "./pages/staging/StagingPage";
import FAQPage from "./pages/faq/FAQPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import { ScrollToHash } from "./components/ScrollToHash";
import { MobileProvider } from "./providers/MobileProvider";

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/stage" element={<StagingPage />} />
      </Routes>
    </>
  );
};

const AppWithProviders = () => {
  return (
    <MobileProvider>
      <App />
    </MobileProvider>
  );
};

export default AppWithProviders;
