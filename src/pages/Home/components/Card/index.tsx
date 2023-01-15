import { ShoppingCart } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";

import { Menu } from "../../../../@types/menu";
import { Coffee } from "../../../../Components/Coffee";
import { ChartContext } from "../../../../context/ChartContext";
import { Actions, ListCardContainer, Stepper, StepperButton } from "./styles";

interface CardProps extends Menu {}

export function Card({
  id,
  image,
  description,
  price,
  title,
  tags,
}: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const { addChartItem } = useContext(ChartContext)

  function handlePlusQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleMinusQuantity() {
    setQuantity((prev) => (prev != 1 ? prev - 1 : prev))
  }

  function handleAddInChart() {
    const item = {
      id,
      image,
      title,
      description,
      tags,
      price,
    }

    for (let i = 0; i < quantity; i++) {
      addChartItem(item)
    }
  }

  return (
    <ListCardContainer>
      <Coffee taste={image} />

      <h5>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </h5>

      <h6>
        <strong>{title}</strong>
        <p>{description}</p>
      </h6>

      <Actions>
        <span>
          R$ <p>{price}</p>
        </span>

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

          <span onClick={handleAddInChart}>
            <ShoppingCart size={22} weight="fill" />
          </span>
        </div>
      </Actions>
    </ListCardContainer>
  )
}
