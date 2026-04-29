import { createBrowserRouter } from "react-router";
import App from '../App'
import Home from '../pages/home'
import Orders from "../pages/orders"
import About from "../pages/about"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/orders",
            element:<Orders/>
        },
        {
            path:"/about",
            element:<About/>
        }
    ]
  },
]);

export default router;