import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

import { addNewItemAction, emptyAction, removeItemAction, updateQuantityAction } from "../reducers/chart/actions";
import { chartItem, chartReducers } from "../reducers/chart/reducer";

interface ChartContextType {
  chart: chartItem[]
  totalItems: number
  addChartItem: (data: chartItem) => void
  removeChartItem: (id: number) => void
  updateChartItemQtd: (id: number, qtd: number) => void
  clearChart: () => void
}

interface ChartContextProviderProps {
  children: ReactNode
}

export const ChartContext = createContext<ChartContextType>(
  {} as ChartContextType,
)

export function ChartContextProvider({ children }: ChartContextProviderProps) {
  const [chartState, dispatch] = useReducer(
    chartReducers,
    {
      chart: [],
      totalItems: 0,
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:chart-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        chart: [],
        totalItems: 0,
      }
    },
  )

  const { chart, totalItems } = chartState

  function addChartItem(data: chartItem) {
    dispatch(addNewItemAction(data))
  }

  function removeChartItem(id: number) {
    dispatch(removeItemAction(id))
  }
  function updateChartItemQtd(id: number, qtd: number) {
    dispatch(updateQuantityAction(id, qtd))
  }

  function clearChart() {
    dispatch(emptyAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(chartState)

    localStorage.setItem('@coffee-delivery:chart-state-1.0.0', stateJSON)
  }, [chartState])

  return (
    <ChartContext.Provider
      value={{
        chart,
        totalItems,
        clearChart,
        addChartItem,
        removeChartItem,
        updateChartItemQtd,
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}
