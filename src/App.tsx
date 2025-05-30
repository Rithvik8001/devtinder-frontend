import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Toaster } from "sonner";
import Signup from "./components/Signup/Signup";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={appStore}>
        <Toaster />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
