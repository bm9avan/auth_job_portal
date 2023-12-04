import { useState, useEffect } from "react";
import Form from "./components/profile/Form";
import { useDispatch } from "react-redux";
import { authActions } from "./store/authStore";
import NavBar from "./components/NavBar";
import authFn from "./appWrite/AuthFn";
import { Home, About, Events } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as jobLoader } from "./pages/Events";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div style={{ height: "4rem" }}></div>
          <NavBar />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/account", element: <Form loading={loading} /> },
        { path: "/about", element: <About /> },
        { path: "/events", element: <Events />, loader: jobLoader },
      ],
    },
  ]);

  useEffect(() => {
    authFn
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(authActions.login({ userData }));
        } else {
          dispatch(authActions.logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
