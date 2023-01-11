import styled from "styled-components";

import background from "../../../../assets/intro-background.png";

export const MainContainer = styled.main`
  width: 100%;
  margin: 2rem auto;
  height: 34rem;
  padding: 0 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${background});
  background-size: contain;

  div {
    width: 36.75rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1.4;

    color: ${({ theme }) => theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
  }
`

export const Icons = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`

const ICON_COLOR = {
  orange: 'yellow-500',
  yellow: 'yellow-300',
  purple: 'purple-500',
  gray: 'gray-700',
} as const

interface IconProps {
  variant: keyof typeof ICON_COLOR
}

export const Icon = styled.div<IconProps>`
  span {
    display: flex;
    align-items: center;

    padding: 0.35rem;
    border-radius: 9999px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, variant }) => theme[ICON_COLOR[variant]]};
  }
`
