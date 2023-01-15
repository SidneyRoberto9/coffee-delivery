import { menuList } from "../../../../data/menu.data";
import { Card } from "../Card";
import { ListMenuContainer } from "./styles";

export function ListMenu() {
  return (
    <ListMenuContainer>
      <h1>Nossos cafés</h1>

      <article>
        {menuList.map((coffee) => {
          return (
            <Card
              key={coffee.id}
              id={coffee.id}
              qtd={coffee.qtd}
              image={coffee.image}
              title={coffee.title}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
            />
          )
        })}
      </article>
    </ListMenuContainer>
  )
}
