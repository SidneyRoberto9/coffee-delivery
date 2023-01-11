import { Card } from "../../Components/Card";
import { Main } from "./components/Main";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Main />
      <Card
        key={1}
        type="list"
        image="Expresso"
        title="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
        tags={['Tradicional']}
        price={9.99}
      />
    </HomeContainer>
  )
}
