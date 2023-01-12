import { MapPinLine } from "phosphor-react";

import { AddressContainer, Input, Row } from "./styles";

export function Address() {
  return (
    <AddressContainer>
      <article>
        <div>
          <MapPinLine size={26} />
        </div>

        <span>
          <p> Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </article>

      <form action="">
        <Input placeholder="CEP" type="number" />
        <Input placeholder="Rua" large="x" type="text" />

        <Row>
          <Input placeholder="Número" type="number" />
          <Input placeholder="Complemento" large="l" type="text" />
        </Row>

        <Row>
          <Input placeholder="Bairro" type="text" />
          <Input placeholder="Cidade" large="g" type="text" />
          <Input placeholder="UF" large="p" type="text" />
        </Row>
      </form>
    </AddressContainer>
  )
}
