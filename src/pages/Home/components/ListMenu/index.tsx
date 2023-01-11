import { Card } from "../../../../Components/Card";
import { menuList } from "../../../../data/menu.data";
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
              type={coffee.type}
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
