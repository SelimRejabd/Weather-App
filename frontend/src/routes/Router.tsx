import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Registration from "../components/Registration";
import Login from "../components/Login";

// const Layout = ({ children }) => (
//   <>
//     <Header />
//     {children}
//     <Footer />
//   </>
// );
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <Dashboard />
//       </Layout>
//     ),
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/registration",
    element: (
      <>
        <Header />
        <Registration />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
]);

export default router;
