import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-200']};

  article {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    gap: 0.5rem;
    padding-bottom: 2rem;

    div {
      margin-bottom: 1.25rem;
      color: ${({ theme }) => theme['yellow-500']};
    }

    span {
      color: ${({ theme }) => theme['gray-800']};

      font-size: 1rem;
      line-height: 1.5;

      p:last-child {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['gray-700']};
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    input {
      display: none;
    }
  }
`

interface PaymentMethodProps {
  variant: boolean
}

export const PaymentMethod = styled.div<PaymentMethodProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  width: 11.75rem;
  padding: 1.125rem;
  border-radius: 6px;

  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 200ms;

  color: ${({ theme }) => theme['purple-300']};

  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-700']};
  }

  box-shadow: ${({ theme, variant }) =>
    variant ? `0 0 0 2px ${theme['purple-300']}` : 'none'};

  background-color: ${({ theme, variant }) =>
    variant ? theme['purple-100'] : theme['gray-400']};

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`
