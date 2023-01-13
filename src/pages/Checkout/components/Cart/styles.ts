import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-200']};
  border-radius: 6px 44px;
`

export const TotalItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.375rem 0;

    ins {
      text-decoration: none;
    }

    p,
    ins {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['gray-700']};
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['gray-800']};
    }
  }
`

export const ConfirmButton = styled.div`
  padding: 0 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme.white};

    width: 100%;
    padding: 0.875rem 0;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: background-color 200ms;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-500']};
    }
  }
`
