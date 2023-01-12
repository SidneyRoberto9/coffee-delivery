import { MapPinLine } from "phosphor-react";

import { AddressContainer, Input } from "./styles";

export function Address() {
  return (
    <AddressContainer>
      <article>
        <MapPinLine size={26} />
        <span>
          <p> Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </article>

      <form action="">
        <Input />
      </form>
    </AddressContainer>
  )
}
