export type Taste =
  | 'Americano'
  | 'Arabe'
  | 'CafeComLeite'
  | 'CafeGelado'
  | 'Capuccino'
  | 'ChocolateQuente'
  | 'Cubano'
  | 'Expresso'
  | 'ExpressoCremoso'
  | 'Havaiano'
  | 'Latte'
  | 'Macchiato'
  | 'Mochaccino'
  | 'Irlandes'

export type CoffeeTag =
  | 'Alcoólico'
  | 'Tradicional'
  | 'Especial'
  | 'Gelado'
  | 'Com Leite'

export type MenuType = 'cart' | 'list'

export interface Menu {
  id?: number
  type: MenuType
  image: Taste
  title: string
  description: string
  tags: CoffeeTag[]
  price: number
}
