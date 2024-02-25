import { Home, Login, PageNotFound, Register, ResetPassword } from "./pages";
import { Route, Routes } from "react-router-dom";
import { route } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={route.root} element={<Home />} />
      <Route path={route.home} element={<Home />} />
      <Route path={route.login} element={<Login />} />
      <Route path={route.register} element={<Register />} />
      <Route path={route.resetPassword} element={<ResetPassword />} />
      <Route path={route.pageNotFound} element={<PageNotFound />} />
    </Routes>
  )
}

export default App