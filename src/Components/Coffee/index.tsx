export type Taste =
  | 'Americano'
  | 'Arabe'
  | 'CafeComLeite'
  | 'CafeGelado'
  | 'Cappuccino'
  | 'ChocolateQuente'
  | 'Cubano'
  | 'Expresso'
  | 'ExpressoCremoso'
  | 'Havaiano'
  | 'Latte'
  | 'Macchiato'
  | 'Mochaccino'

interface CoffeeProps {
  taste: Taste
}

export function Coffee({ taste }: CoffeeProps) {
  return <img src={`/coffee/${taste}.svg`} alt="" />
}
