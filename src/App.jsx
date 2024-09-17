import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DataItem from "./Components/Data"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import StudentInfo from "./Components/StudentInfo"
import FrontPage from "./Components/FrontPage"

function App() {

  const queryClients = new QueryClient()

  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <FrontPage />,
    },

    {
      path: '/getUsers',
      element: <DataItem />
    },
    {
      path: '/getUsers/:id',
      element: <StudentInfo />
    }
  ])

  return (
    <>
      <QueryClientProvider client={queryClients}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
