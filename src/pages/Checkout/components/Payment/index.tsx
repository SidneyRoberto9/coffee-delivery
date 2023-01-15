import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { PaymentContainer, PaymentMethod } from "./styles";

interface methods {
  first: boolean
  second: boolean
  third: boolean
}

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<methods>({
    first: false,
    second: false,
    third: false,
  })

  const { register, setValue } = useFormContext()

  function handleSelectPaymentMethod(method: number) {
    if (method == 1) {
      setPaymentMethod({
        first: true,
        second: false,
        third: false,
      })
      setValue('paymentMethod', 'Cartão de Crédito')
    } else if (method == 2) {
      setPaymentMethod({
        first: false,
        second: true,
        third: false,
      })
      setValue('paymentMethod', 'Cartão de Débito')
    } else if (method == 3) {
      setPaymentMethod({
        first: false,
        second: false,
        third: true,
      })
      setValue('paymentMethod', 'Dinheiro')
    }
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
        <input type="text" {...register('paymentMethod')} />
        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(1)}
          variant={paymentMethod.first}
        >
          <CreditCard size={16} />
          <p>cartão de crédito</p>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(2)}
          variant={paymentMethod.second}
        >
          <Bank size={16} />
          <p>cartão de débito</p>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => handleSelectPaymentMethod(3)}
          variant={paymentMethod.third}
        >
          <Money size={16} />
          <p>dinheiro</p>
        </PaymentMethod>
      </nav>
    </PaymentContainer>
  )
}
