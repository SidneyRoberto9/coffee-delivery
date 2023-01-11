import { ListMenu } from "./components/ListMenu";
import { Main } from "./components/Main";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Main />
      <ListMenu />
    </HomeContainer>
  )
}
