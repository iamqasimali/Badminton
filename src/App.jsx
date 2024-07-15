import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AccountCreated from "./components/auth/AccountCreated";
import Index from "./components/auth/Index";
import SelectRole from "./components/auth/SelectRole";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Welcome from "./components/auth/Welcome";
import PlayerInfo from "./components/auth/PlayerInfo";
import Congrats from "./components/auth/Congrats";
import Dashboard from "./components/Pages/Dashboard"
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsAndServices from "./components/Pages/TermsAndServices";
import Faqs from "./components/Pages/Faqs";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/selectRole" element={<SelectRole />} />
            <Route path="/accountCreated" element={<AccountCreated />} />
            <Route path="/playerInfo" element={<PlayerInfo/>} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-services" element={<TermsAndServices />} />
            <Route path="/faqs" element={<Faqs />} />
            
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
