import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import orderLogo from "../../assets/orderLogo.png";
import { Icon, OrderContainer, OrderMain } from "./styles";

export function Order() {
  return (
    <OrderContainer>
      <header>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é so aguardar que logo o café chegará até você</p>
      </header>

      <OrderMain>
        <div>
          <span>
            <Icon variant="purple">
              <MapPin size={18} weight="fill" />
            </Icon>
            <div>
              <p>
                Entrega em <strong>Rua joão Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </span>

          <span>
            <Icon variant="yellow">
              <Timer size={18} weight="fill" />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </span>

          <span>
            <Icon variant="orange">
              <CurrencyDollar size={18} weight="fill" />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </span>
        </div>
        <img src={orderLogo} alt="" />
      </OrderMain>
    </OrderContainer>
  )
}
