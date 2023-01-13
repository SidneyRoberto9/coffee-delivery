import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme['gray-400']};

  & + & {
    padding-top: 1.5rem;
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;
    padding: 0.25rem 0;

    article {
      display: flex;
      flex-direction: column;

      p {
        padding: 0.25rem 0;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;
      }

      div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
      }
    }
  }

  footer {
    margin-top: -2.5rem;
    span {
      display: flex;
      flex-direction: row;

      font-weight: 700;
      font-size: 1rem;
      text-align: right;
      p {
        text-indent: 0.25rem;
      }
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

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0 0.35rem;
  border-radius: 8px;

  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme['purple-300']};
  background-color: ${({ theme }) => theme['gray-400']};
  transition: background-color 200ms;

  p {
    font-size: 0.75rem;
    line-height: 1.4;
    color: ${({ theme }) => theme['gray-700']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`
