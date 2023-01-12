import styled from "styled-components";

export const AddressContainer = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-200']};

  article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['yellow-500']};

    span {
      color: ${({ theme }) => theme['gray-800']};

      font-size: 1rem;
      line-height: 1.4;

      p:last-child {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['gray-700']};
      }
    }
  }
`

const INPUT_SIZES = {
  p: '3.17rem',
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
`
