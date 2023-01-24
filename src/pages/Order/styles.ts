import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2.5rem;

  header {
    strong {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['yellow-500']};
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${({ theme }) => theme['gray-800']};
    }
  }
`

export const OrderMain = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p,
  strong {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['gray-700']};
    line-height: 1.4;
  }

  strong {
    font-weight: 700;
  }

  div:first-child {
    width: 33rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    background: linear-gradient(
          ${({ theme }) => theme.white},
          ${({ theme }) => theme.white}
        )
        padding-box,
      linear-gradient(
          to right,
          ${({ theme }) => theme['yellow-300']},
          ${({ theme }) => theme['purple-300']}
        )
        border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
  }

  span {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    div {
    }
  }
`

const ICON_VARIANT = {
  purple: 'purple-300',
  yellow: 'yellow-300',
  orange: 'yellow-500',
} as const

interface IconProps {
  variant: keyof typeof ICON_VARIANT
}

export const Icon = styled.ins<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 999px;
  padding: 0.5rem;
  margin-top: 0.25rem;

  background: ${({ theme, variant }) => theme[ICON_VARIANT[variant]]};
  color: ${({ theme }) => theme.white};
`
