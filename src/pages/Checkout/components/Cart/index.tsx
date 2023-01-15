import { useContext } from "react";

import { ChartContext } from "../../../../context/ChartContext";
import { Card } from "../Card";
import { CartContainer, ConfirmButton, TotalItens } from "./styles";

export function Cart() {
  const { chart } = useContext(ChartContext)

  const chartTotal = chart.reduce((acc, item) => {
    return acc + item.price * item.qtd
  }, 0)

  return (
    <CartContainer>
      {chart.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          qtd={item.qtd}
        />
      ))}

      <TotalItens>
        <span>
          <p>Total de Itens</p>
          <p>
            R$ <ins>{chartTotal > 0 ? chartTotal.toFixed(2) : '0,00'}</ins>
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
            R$
            <strong>{chartTotal > 0 ? chartTotal.toFixed(2) : '3,50'}</strong>
          </strong>
        </span>
      </TotalItens>

      <ConfirmButton>
        <button type="submit">confirmar pedido</button>
      </ConfirmButton>
    </CartContainer>
  )
}
