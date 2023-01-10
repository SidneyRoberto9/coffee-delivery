import { MapPin, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";

import logo from "../../assets/coffee-logo.svg";
import { HeaderContainer, Locale, ShoppingCar } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Locale>

        <ShoppingCar>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCar>
      </nav>
    </HeaderContainer>
  )
}
