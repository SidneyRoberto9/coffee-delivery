import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h1>Complete Seu Pedido</h1>
        <Address />
        <Payment />
      </main>

      <span>
        <h1>Cafés selecionados</h1>
        <Cart />
      </span>
    </CheckoutContainer>
  )
}
