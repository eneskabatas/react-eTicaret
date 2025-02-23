import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./pages/homepage/Homepage"
import { useContext } from "react"
import { CartContext } from "./context/CartProvider"
import OffCanvas from "./components/offcanvas/OffCanvas"
import Detail from "./pages/detail/Detail"
import Order from "./pages/sipariş/Order"
import Mens from "./pages/category/Mens"
import TopBtn from "./components/topBtn/TopBtn"


function App() {

  const { cartShow } = useContext(CartContext)

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"detail/:id",
          element:<Detail/>
        },
        {
          path:"order",
          element:<Order/>
        },
        {
          path:"erkek",
          element:<Mens/>
        }
      ]
    }
  ])
 

  return (
    <>
     <RouterProvider router={router} />
     {
      cartShow && <OffCanvas/>
     }
     <TopBtn/>
    </>
  )
}

export default App
