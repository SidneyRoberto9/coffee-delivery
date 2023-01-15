import { createContext, ReactNode, useState } from "react";

interface Order {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  complemento: string
  paymentMethod: string
}

interface OrderContextType {
  order: Order
  updateOrder: (data: Order) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>({} as Order)

  function updateOrder(data: Order) {
    setOrder(data)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        updateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
