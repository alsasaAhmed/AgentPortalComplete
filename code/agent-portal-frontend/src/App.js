import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AgentHome from "./pages/AgentHome";
import AgentNewApplication from "./pages/AgentNewApplication";
import AgentSignIn from "./components/SignIn/AgentSignIn";
import OtherSignIn from "./components/SignIn/OtherSignIn";
import OtherUserHome from './pages/OtherUserHome'
import OtherUserFormView from "./pages/OtherUserFormView";
import PasswordCreation from "./components/PasswordCreation/PasswordCreation";
import ProfileUpdate from "./pages/ProfileUpdate";
import AgentDashboard from "./pages/AgentDashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/registration" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/otherUserHome" element={<OtherUserHome />}/>
            <Route path="/agent" element={<AgentHome />}/>
            <Route path="/agentApplication" element={<AgentNewApplication />}/>
            <Route path="/agentLogin" element={<AgentSignIn />}/>
            <Route path="/otherLogin" element={<OtherSignIn />}/>
            <Route path="/otherUserFormView" element={<OtherUserFormView />}/>
            <Route path="/passwordCreation" element={<PasswordCreation />}/>
            <Route path="/agentHome" element={<AgentHome />}/>
            <Route path="/profileUpdate" element={<ProfileUpdate />}/>
            <Route path="/agentDashboard" element={<AgentDashboard />} />
            <Route path="/" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
