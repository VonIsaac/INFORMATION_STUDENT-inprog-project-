import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DataItem from "./Components/Data"
import StudentInfo from "./Components/StudentInfo"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DataItem />,
      
    },

    {
      path: '/info/:id',
      element: <StudentInfo />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
