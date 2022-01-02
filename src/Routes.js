import React from "react"
import { useRoutes, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom"
import Signin from "./components/authentication/Signin"
import Signup from "./components/authentication/Signup"
import ForgotPassword from "./components/authentication/ForgotPassword"
import LoginCallback from "./components/authentication/LoginCallback"
import HomePage from "./pages/HomePage"
import AdminPage from "./pages/AdminPage"
import ProtectedPage from "./pages/ProtectedPage"

const PrivateRoute = ({ children }) => {
    console.log(children)
    let location = useLocation()
    const isAuthenticated = false
  
    return isAuthenticated ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    )
  }

const RoutesasObj = () => {
  let element = useRoutes([
    { path: "/", element: <PrivateRoute> <HomePage /> </PrivateRoute>  },
    { path: "admin", element: <PrivateRoute> <AdminPage /> </PrivateRoute> },
    { path: "protected", element :  <PrivateRoute> <ProtectedPage x={1} /> </PrivateRoute> },
    { path: "login", element: <Signin /> },
    { path: "signup", element: <Signup /> },
    { path: "forgotpassword", element: <ForgotPassword /> },
    { path: "oauth_callback", element: <LoginCallback /> },
    {
      path: "route1",
      element: <Route1 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    {
        path: "users",
        element: <Users />,
        children: [
          { path: "", element: <UsersIndex /> },
          { path: ":id", element: <UserProfile /> },
          { path: "me", element: <OwnUserProfile /> },
        ],
      },
    { path: "*", element: <NotFound /> },
  ])

  return element;
}

const NotFound = () => <h1>NotFound</h1>
const Route1 = () => <> 
                        <h1>route 1 </h1>
                        <Outlet/>
                     </>
const Child1 = () => <h1>Route1 Child 1</h1>
const Child2 = () => <h1>Route1 child 2</h1>

const Users = () => <h1>Users profile page <Outlet/></h1>
const UsersIndex  = () => <h1> UsersIndex </h1>
const UserProfile  = () => <h1>other users profile extracting from an id</h1>
const OwnUserProfile = () => <h1> OwnUserProfile </h1>

export default RoutesasObj; 


