import { Trash } from "phosphor-react";
import { useContext, useState } from "react";

import { Menu } from "../../../../@types/menu";
import { Coffee } from "../../../../Components/Coffee";
import { ChartContext } from "../../../../context/ChartContext";
import { StepperButton } from "../../../Home/components/Card/styles";
import { CardContainer, RemoveButton, Stepper } from "./styles";

interface removedProps {
  description: string
  tags: string[]
}

interface CardProps extends Omit<Menu, keyof removedProps> {}

export function Card({ id, image, price, title, qtd }: CardProps) {
  const [quantity, setQuantity] = useState<number>(qtd)
  const { updateChartItemQtd, removeChartItem } = useContext(ChartContext)

  function handlePlusQuantity() {
    if (id) {
      setQuantity((prev) => prev + 1)
      updateChartItemQtd(id, quantity + 1)
    }
  }

  function handleMinusQuantity() {
    if (id && quantity > 1) {
      setQuantity((prev) => prev - 1)
      updateChartItemQtd(id, quantity - 1)
    }
  }

  function handleRemoveItem() {
    if (id) {
      removeChartItem(id)
    }
  }

  return (
    <CardContainer>
      <div>
        <Coffee taste={image} width={64} height={64} />

        <article>
          <p>{title}</p>
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

            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={20} />
              <p>Remover</p>
            </RemoveButton>
          </div>
        </article>
      </div>

      <footer>
        <span>
          R$ <p>{price}</p>
        </span>
      </footer>
    </CardContainer>
  )
}
