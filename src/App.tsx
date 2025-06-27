import "./App.css";
import { LandingPage } from "./pages/landing-page/LandingPage";
import PrivacyPolicyPage from "./pages/privacy-policy/PrivacyPolicyPage";
import StagingPage from "./pages/staging/StagingPage";

function App() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/stage":
      return <StagingPage />;
    case "/privacy-policy":
      return <PrivacyPolicyPage />;
    default:
      return <LandingPage />;
  }
}

export default App;
