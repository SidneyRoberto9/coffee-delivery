import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";

import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { CheckoutContainer } from "./styles";

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1).max(9),
  rua: zod.string().min(5),
  numero: zod.string().min(1),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(1).max(2),
  complemento: zod.string().min(1),
  paymentMethod: zod.string().min(1),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      complemento: '',
      paymentMethod: '',
    },
  })

  const { handleSubmit, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
    //createNewCycle(data)
    reset()
    navigate('/order')
  }
  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newOrderForm}>
          <main>
            <h1>Complete Seu Pedido</h1>
            <Address />
            <Payment />
          </main>

          <footer>
            <h1>Cafés selecionados</h1>
            <Cart />
          </footer>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
