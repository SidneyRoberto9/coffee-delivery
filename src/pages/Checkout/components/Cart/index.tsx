import { NavLink } from "react-router-dom";

import { Card } from "../Card";
import { CartContainer, ConfirmButton, TotalItens } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <Card />
      <Card />

      <TotalItens>
        <span>
          <p>Total de Itens</p>
          <p>
            R$ <ins>29,97</ins>
          </p>
        </span>
        <span>
          <p>Entrega</p>
          <p>
            R$ <ins>3,50</ins>
          </p>
        </span>
        <span>
          <strong>Total </strong>
          <strong>
            R$ <strong>29,97</strong>
          </strong>
        </span>
      </TotalItens>

      <NavLink to="/order">
        <ConfirmButton>
          <button>confirmar pedido</button>
        </ConfirmButton>
      </NavLink>
    </CartContainer>
  )
}
