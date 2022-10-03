import { Route, Routes } from "react-router-dom";
import LoginModal from "./organisms/modals/loginModal";
import DonationPage from "./pages/DashboardPages/Donation";
import Profile from "./pages/DashboardPages/Profile";
import Support from "./pages/DashboardPages/Support";
import Transaction from "./pages/DashboardPages/Transaction";
import About from "./pages/NavPages/About";
import Contact from "./pages/NavPages/Contact";
import HomePage from "./pages/NavPages/Home";
import News from "./pages/NavPages/News";
import Projects from "./pages/NavPages/ProjectsPage";
import Subscribe from "./pages/NavPages/subscribe";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-donation" element={<DonationPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support-project" element={<Support />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
