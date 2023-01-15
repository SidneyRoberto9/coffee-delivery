import { createContext, ReactNode, useEffect, useReducer } from "react";

import { addNewItemAction, emptyAction, removeItemAction } from "../reducers/chart/actions";
import { chartItem, chartReducers } from "../reducers/chart/reducer";

interface ChartContextType {
  chart: chartItem[]
  chartTotalItems: number
  chartTotalPrice: number
  addChartItem: (data: chartItem) => void
  removeChartItem: (id: number) => void
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
      }
    },
  )

  const { chart } = chartState

  const chartTotalPrice = chart.reduce((acc, item) => acc + item.price, 0)

  const chartTotalItems = chart.length

  function addChartItem(data: chartItem) {
    dispatch(addNewItemAction(data))
  }

  function removeChartItem(id: number) {
    dispatch(removeItemAction(id))
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
        chartTotalPrice,
        chartTotalItems,
        clearChart,
        addChartItem,
        removeChartItem,
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}
