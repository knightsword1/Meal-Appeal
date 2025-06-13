import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

import {
  createBrowserRouter as Router,
  RouterProvider,
  Outlet,
} from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";

import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import OrderSuccess from "./components/OrderSuccess.js";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Ayush",
    };

    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />

          {/*  Outlet is replaced by the children of AppLayout according to different paths */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = Router([
  // Path is an object

  /* We make body, about, contact as children of appLayout*/

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ordersuccess",
        element: <OrderSuccess />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
