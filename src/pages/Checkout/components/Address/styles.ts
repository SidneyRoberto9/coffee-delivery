import styled from "styled-components";

export const AddressContainer = styled.div`
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

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

const INPUT_SIZES = {
  p: '3.75rem',
  m: '12.5rem',
  g: '17.25rem',
  l: '21.75rem',
  x: '35rem',
} as const

interface InputProps {
  large?: keyof typeof INPUT_SIZES
}

export const Input = styled.input<InputProps>`
  width: ${({ large }) => (large ? INPUT_SIZES[large] : INPUT_SIZES.m)};
  padding-left: 0.25rem;
  padding: 0.875rem;
  border: none;
  outline: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-700']};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
