import AccountCreated from "./components/auth/AccountCreated";
import Index from "./components/auth/Index";
import SelectRole from "./components/auth/SelectRole";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Welcome from "./components/auth/Welcome";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/selectRole" element={<SelectRole />} />
            <Route path="/accountCreated" element={<AccountCreated />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
