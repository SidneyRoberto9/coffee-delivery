import { Taste } from "../../@types/menu";

interface CoffeeProps {
  taste: Taste
}

export function Coffee({ taste }: CoffeeProps) {
  return <img src={`/coffee/${taste}.svg`} alt="" />
}
