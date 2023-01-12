import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: calc(100% - 20rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  article {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6;
    color: ${({ theme }) => theme['gray-800']};
  }
`
