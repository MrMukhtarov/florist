import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/cliently/ClientLayout";
import AdminLayot from "./layout/adminLayout/AdminLayot";
import Admin from "./admin/Admin";
import LogoDetail from "./admin/Logo/LogoDetail";
import LogoUpdate from "./admin/Logo/LogoUpdate";
import Home from "./pages/Home/Home";
import AddSlider from "./admin/Slider/AddSlider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayot />}>
          <Route index element={<Admin />} />
          <Route path="/admin/logodetail" element={<LogoDetail />} />
          <Route path="/admin/updatelogo/:id" element={<LogoUpdate />} />
          <Route path="/admin/addslider" element={<AddSlider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
