import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 2rem auto;

  max-width: 90rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 1.3;
`

export const Locale = styled(Icon)`
  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-500']};
`

export const ShoppingCar = styled(Icon)`
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-500']};
`
