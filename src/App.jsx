import { Home, Login, PageNotFound, Register, ResetPassword } from "./pages";
import { Route, Routes } from "react-router-dom";
import { route } from "./routes";
import AnonymousRoute from "./routes/AnonymousRoute";
import AuthRoute from "./routes/AuthRoute";

const App = () => {

  return (
    <Routes>

      <Route element={<AuthRoute />}>
        {/* if user exist, then navigate in these pages... */}
        <Route path={route.root} element={<Home />} />
        <Route path={route.home} element={<Home />} />
      </Route>

      <Route element={<AnonymousRoute />}>
        {/* if user not exist, then navigate in these pages... */}
      </Route>

      <Route path={route.login} element={<Login />} />
      <Route path={route.register} element={<Register />} />
      <Route path={route.resetPassword} element={<ResetPassword />} />

      <Route path={route.pageNotFound} element={<PageNotFound />} />

    </Routes>
  )
}

export default App;