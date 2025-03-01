import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import HomePage from "./pages/Home2";
import ResourcesPage from "./pages/ResourcePage";
import OvulationCalendar from "./pages/ovulatoinCalendar";
import HealthyPregnancyRecipes from "./pages/healthyRecipes";
import PregnancyQuestionsCenter from "./pages/pregnancyQuestions";
import NearbyHospitals from "./pages/NearbyHospitals";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/ovulationCalendar" element={<OvulationCalendar />} />
        <Route path="/healthy-pregnancy-recipes" element={<HealthyPregnancyRecipes />} />
        <Route path="/pregnancy-questions" element={<PregnancyQuestionsCenter />} />
        <Route path="/nearby-hospitals" element={<NearbyHospitals />} />
      </Routes>
    </Router>
  );
}

export default App;

