import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/cliently/ClientLayout";
import AdminLayot from "./layout/adminLayout/AdminLayot";
import Admin from "./admin/Admin";
import LogoDetail from "./admin/Logo/LogoDetail";
import LogoUpdate from "./admin/Logo/LogoUpdate";
import Home from "./pages/Home/Home";
import AddSlider from "./admin/Slider/AddSlider";
import SliderDetail from "./admin/Slider/SliderDetail";
import UpdateSlider from "./admin/Slider/UpdateSlider";

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
          <Route path="/admin/sliderdetail" element={<SliderDetail />} />
          <Route path="/admin/updateslider/:id" element={<UpdateSlider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
