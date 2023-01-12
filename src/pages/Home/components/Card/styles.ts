import styled from "styled-components";

export const CartCardContainer = styled.div``

export const ListCardContainer = styled.div`
  height: 19rem;
  width: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem 2.5rem 0.5rem 2.5rem;

  img {
    margin-top: -2.5rem;
  }

  h5 {
    display: flex;
    gap: 0.25rem;

    span {
      padding: 0.25rem;
      font-weight: bold;

      font-size: 0.625rem;
      border-radius: 0.5rem;
      color: ${({ theme }) => theme['yellow-500']};
      background-color: ${({ theme }) => theme['yellow-100']};
    }
  }

  h6 {
    strong {
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: 'Baloo 2', cursive;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.6;

      color: ${({ theme }) => theme['gray-800']};
    }

    p {
      font-size: 0.875rem;
      font-weight: normal;
      width: 90%;
      line-height: 1.4;
      margin: 0 auto;
      text-align: center;

      color: ${({ theme }) => theme['gray-600']};
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  span {
    padding: 0 0.4375rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    p {
      font-family: 'Baloo 2', cursive;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.6;
      text-indent: 0.25rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;

      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;

      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['purple-500']};
    }
  }
`

export const Stepper = styled.div`
  display: flex;
  width: 5.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['gray-400']};

  input {
    width: 100%;
    outline: 0;
    text-align: center;
    border: none;

    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-900']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

interface StepperButtonProps {
  model: 'increment' | 'decrement'
}

export const StepperButton = styled.button<StepperButtonProps>`
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  transition: color 200ms;

  padding: ${({ model }) =>
    model === 'decrement'
      ? `0.25rem 0.025rem 0.25rem 0.75rem`
      : `0.25rem 0.75rem 0.25rem 0.025rem`};
  border-radius: ${({ model }) =>
    model === 'decrement' ? `45px 0 0 45px` : `0 45px 45px 0`};

  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['purple-300']};

  &:hover {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`
