import styled from "styled-components";

export const CheckoutContainer = styled.div`
  form {
    width: 100%;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
  }

  main,
  footer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6;
    padding: 1rem 0;

    color: ${({ theme }) => theme['gray-800']};
  }

  @media (max-width: 1260px) {
    form {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 2rem auto;
      height: auto;
    }
  }
`
