import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import mainLogo from "../../../../assets/main-logo.svg";
import { Icon, Icons, MainContainer, Title } from "./styles";

export function Main() {
  return (
    <MainContainer>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Icons>
          <Icon variant="orange">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </Icon>

          <Icon variant="gray">
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </Icon>

          <Icon variant="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </Icon>

          <Icon variant="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </Icon>
        </Icons>
      </div>
      <img src={mainLogo} alt="" />
    </MainContainer>
  )
}
