import expresso from "../../assets/coffee/expresso.svg";
import { Card } from "../../Components/Card";
import { Main } from "./components/Main";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Main />
      <Card
        type="list"
        image={expresso}
        title="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
        tags={['Tradicional']}
        price={9.99}
      />
    </HomeContainer>
  )
}
