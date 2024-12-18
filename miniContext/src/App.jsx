import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/login"
import Profile from "./components/profile"

function App() {
  

  return (
    <UserContextProvider>
      <h1>
        Welcome to learn React with chai aur code
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
