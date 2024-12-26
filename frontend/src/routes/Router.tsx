import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

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
]);

export default router;
