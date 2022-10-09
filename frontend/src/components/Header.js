import React from "react"
import { Button, Navbar, NavbarBrand, NavbarText } from "reactstrap"
import { useAuth } from "../Context/UserAuth"
import authService from "../services/AuthService"

export default () => {
  const { isAuthenticated, logout } = useAuth()

  const userLogout = () => {
    logout()
    authService.logout()
  }

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="text-white">&nbsp;Challenge Mission 2</NavbarBrand>
        { isAuthenticated() &&
          (
            <div className="col-md-10">
              <Button onClick={() => userLogout()} style={{ float: "right"}}>Sair</Button>
            </div>
          )
        }
      </Navbar>
    </div>
  )
}