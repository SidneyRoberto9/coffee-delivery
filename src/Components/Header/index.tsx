import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/coffee-logo.svg";
import { HeaderContainer, Locale, ShoppingCar } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Locale>

        <NavLink to="/checkout">
          <ShoppingCar>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCar>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
