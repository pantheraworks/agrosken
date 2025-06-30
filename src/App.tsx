import "./App.css";
import { LandingPage } from "./pages/landing-page/LandingPage";
import PrivacyPolicyPage from "./pages/privacy-policy/PrivacyPolicyPage";
import StagingPage from "./pages/staging/StagingPage";
import FAQPage from "./pages/faq/FAQPage";

function App() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/stage":
      return <StagingPage />;
    case "/faq":
      return <FAQPage />;
    case "/privacy-policy":
      return <PrivacyPolicyPage />;
    default:
      return <LandingPage />;
  }
}

export default App;
