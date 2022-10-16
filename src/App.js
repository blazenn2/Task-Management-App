import { Route, Routes } from "react-router-dom";
import AppWrapper from "./components/Wrappers/AppWrapper";
import Index from "./pages/Index";
import Manage from "./pages/Manage";
import Reports from "./pages/Reports";
import Schedule from "./pages/Schedule";
import Boards from "./pages/Boards";
import Settings from "./pages/Settings";


function App() {
  return (
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppWrapper>
  );
}

export default App;
