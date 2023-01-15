import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import orderLogo from "../../assets/orderLogo.png";
import { OrderContext } from "../../context/OrderContext";
import { Icon, OrderContainer, OrderMain } from "./styles";

export function Order() {
  const { order } = useContext(OrderContext)
  const { cep, rua, numero, complemento, bairro, cidade, uf, paymentMethod } =
    order

  const navigate = useNavigate()

  if (order.cep == null) {
    navigate('/')
  }

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
                Entrega em <strong>{`${rua}, ${numero}`}</strong>
              </p>
              <p>{`${bairro} - ${cidade}, ${uf}`}</p>
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
                <strong>{paymentMethod}</strong>
              </p>
            </div>
          </span>
        </div>
        <img src={orderLogo} alt="" />
      </OrderMain>
    </OrderContainer>
  )
}
