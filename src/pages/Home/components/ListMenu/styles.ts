import styled from "styled-components";

export const ListMenuContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: calc(100% - 20rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.4;

    color: ${({ theme }) => theme['gray-900']};
  }

  article {
    max-width: 100%;
    padding: 3.5rem 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
