import { ShoppingCart } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import { Actions, CartCardContainer, ListCardContainer, Stepper, StepperButton } from "./styles";

interface CardProps {
  type: 'cart' | 'list'
  image: string
  title: string
  description: string
  price: number
  tags: string[]
}

export function Card({
  type,
  image,
  description,
  price,
  title,
  tags,
}: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handlePlusQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleMinusQuantity() {
    setQuantity((prev) => (prev != 0 ? prev - 1 : prev))
  }

  if (type == 'cart') {
    return (
      <CartCardContainer>
        <h1>a</h1>
      </CartCardContainer>
    )
  } else {
    return (
      <ListCardContainer>
        <img src={image} alt="" />

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
}
