import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserRegister from "./pages/UserRegister.jsx";
import UserVerifyOtp from "./pages/UserVerifyOtp.jsx";
import WorkerLogin from "./pages/WorkerLogin.jsx";
import WorkerRegister from "./pages/WorkerRegister.jsx";
import WorkerVerifyOtp from "./pages/WorkerVerifyOtp.jsx";
import BookWorker from "./pages/BookWorker.jsx";
import BookingVerifyOtp from "./pages/BookingVerifyOtp.jsx";
import BookingSuccess from "./pages/BookingSuccess.jsx";
import PortalGateway from "./pages/PortalGateway.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<PortalGateway />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />

      <Route path="/users/login" element={<UserLogin />} />
      <Route path="/users/register" element={<UserRegister />} />
      <Route path="/users/verify-otp" element={<UserVerifyOtp />} />

      <Route path="/workers/login" element={<WorkerLogin />} />
      <Route path="/workers/register" element={<WorkerRegister />} />
      <Route path="/workers/verify-otp" element={<WorkerVerifyOtp />} />

      <Route path="/booking" element={<BookWorker />} />
      <Route path="/booking/verify-otp" element={<BookingVerifyOtp />} />
      <Route path="/booking/success" element={<BookingSuccess />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}