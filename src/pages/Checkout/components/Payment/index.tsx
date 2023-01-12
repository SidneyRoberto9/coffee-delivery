import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";

import { PaymentContainer, PaymentMethod } from "./styles";

export function Payment() {
  const [active, setActive] = useState<number | null>(null)

  function handleSelectPaymentMethod(method: number) {
    setActive(method)
  }

  return (
    <PaymentContainer>
      <article>
        <div>
          <CurrencyDollar size={26} />
        </div>

        <span>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </article>

      <nav>
        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(1)}
          method={active == 1}
        >
          <CreditCard size={16} />
          <p>cartão de crédito</p>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(2)}
          method={active == 2}
        >
          <Bank size={16} />
          <p>cartão de débito</p>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(3)}
          method={active == 3}
        >
          <Money size={16} />
          <p>dinheiro</p>
        </PaymentMethod>
      </nav>
    </PaymentContainer>
  )
}
