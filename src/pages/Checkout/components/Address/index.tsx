import { MapPinLine } from "phosphor-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { AddressContainer, Input, Row } from "./styles";

export function Address() {
  const { register, watch, setValue } = useFormContext()

  const cep: string = watch('cep')

  useEffect(() => {
    if (cep.length > 7) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((res) => {
          setValue('rua', res.logradouro)
          setValue('bairro', res.bairro)
          setValue('cidade', res.localidade)
          setValue('uf', res.uf)
        })
    }
  }, [cep])

  return (
    <AddressContainer>
      <article>
        <div>
          <MapPinLine size={26} />
        </div>

        <span>
          <p> Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </article>

      <ins>
        <Input placeholder="CEP" type="number" {...register('cep')} />
        <Input placeholder="Rua" large="x" type="text" {...register('rua')} />

        <Row>
          <Input placeholder="Número" type="number" {...register('numero')} />
          <Input
            placeholder="Complemento"
            large="l"
            type="text"
            {...register('complemento')}
          />
        </Row>

        <Row>
          <Input placeholder="Bairro" type="text" {...register('bairro')} />
          <Input
            placeholder="Cidade"
            large="g"
            type="text"
            {...register('cidade')}
          />
          <Input
            placeholder="UF"
            large="p"
            type="text"
            maxLength={2}
            {...register('uf')}
          />
        </Row>
      </ins>
    </AddressContainer>
  )
}
