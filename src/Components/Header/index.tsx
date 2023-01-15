import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/coffee-logo.svg";
import { ChartContext } from "../../context/ChartContext";
import { HeaderContainer, Locale, ShoppingCarIcon } from "./styles";

export function Header() {
  const { totalItems } = useContext(ChartContext)

  useEffect(() => {
    console.log(totalItems)
  }, [totalItems])

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
          <ShoppingCarIcon>
            <ShoppingCart size={22} weight="fill" />
            {totalItems > 0 && <span>{totalItems}</span>}
          </ShoppingCarIcon>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
