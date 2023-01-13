import { Trash } from "phosphor-react";
import { useState } from "react";

import { Coffee } from "../../../../Components/Coffee";
import { StepperButton } from "../../../Home/components/Card/styles";
import { CardContainer, RemoveButton, Stepper } from "./styles";

export function Card() {
  const [quantity, setQuantity] = useState<number>(1)

  function handlePlusQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleMinusQuantity() {
    setQuantity((prev) => (prev != 1 ? prev - 1 : prev))
  }

  return (
    <CardContainer>
      <div>
        <Coffee taste="Expresso" width={64} height={64} />

        <article>
          <p>Expresso Tradicional</p>
          <div>
            <Stepper>
              <StepperButton model="decrement" onClick={handleMinusQuantity}>
                -
              </StepperButton>
              <input type="number" value={quantity} readOnly />
              <StepperButton model="increment" onClick={handlePlusQuantity}>
                +
              </StepperButton>
            </Stepper>

            <RemoveButton>
              <Trash size={20} />
              <p>Remover</p>
            </RemoveButton>
          </div>
        </article>
      </div>

      <footer>
        <span>
          R$ <p>5,00</p>
        </span>
      </footer>
    </CardContainer>
  )
}
