import { Taste } from "../../@types/menu";

interface CoffeeProps {
  taste: Taste
  width?: number
  height?: number
}

export function Coffee({ taste, width = 100, height = 100 }: CoffeeProps) {
  return (
    <img src={`/coffee/${taste}.svg`} alt="" width={width} height={height} />
  )
}
