import { ShoppingCart } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import { Menu } from "../../../../@types/menu";
import { Coffee } from "../../../../Components/Coffee";
import { Actions, ListCardContainer, Stepper, StepperButton } from "./styles";

interface CardProps extends Menu {}

export function Card({ image, description, price, title, tags }: CardProps) {
  const [quantity, setQuantity] = useState<number>(0)

  function handlePlusQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleMinusQuantity() {
    setQuantity((prev) => (prev != 0 ? prev - 1 : prev))
  }

  return (
    <ListCardContainer>
      <Coffee taste={image} />

      <h5>
        {tags.map((tag) => (
          <span>{tag}</span>
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

          <span>
            <ShoppingCart size={22} weight="fill" />
          </span>
        </div>
      </Actions>
    </ListCardContainer>
  )
}
