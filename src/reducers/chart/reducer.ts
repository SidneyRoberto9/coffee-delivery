import { produce } from "immer";

import { Menu } from "../../@types/menu";
import { ActionTypes } from "./actions";

export interface chartItem extends Menu {}

interface ChartState {
  chart: chartItem[]
  totalItems: number
}

export function chartReducers(state: ChartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      const isExistent = state.chart.find(
        (item) => item.id === action.payload.newItem.id,
      )

      if (isExistent) {
        return produce(state, (draft) => {
          const currentChartIndex = draft.chart.findIndex(
            (chart) => chart.id === action.payload.newItem.id,
          )
          draft.chart[currentChartIndex].qtd += action.payload.newItem.qtd
          draft.totalItems += action.payload.newItem.qtd
        })
      }

      return produce(state, (draft) => {
        draft.chart.push(action.payload.newItem)
        draft.totalItems += action.payload.newItem.qtd
      })

    case ActionTypes.REMOVE_ITEM: {
      const id = action.payload.id
      const currentChartIndex = state.chart.findIndex(
        (chart) => chart.id === id,
      )

      if (currentChartIndex < 0) {
        return state
      }

      const currentChart = state.chart[currentChartIndex]

      return produce(state, (draft) => {
        draft.totalItems -= currentChart.qtd
        draft.chart = draft.chart.filter((chart) => chart.id !== id)
      })
    }

    case ActionTypes.EMPTY: {
      return produce(state, (draft) => {
        draft.chart = []
        draft.totalItems = 0
      })
    }

    case ActionTypes.UPDATE_QUANTITY: {
      return produce(state, (draft) => {
        const currentChartIndex = draft.chart.findIndex(
          (chart) => chart.id === action.payload.id,
        )
        const oldQtd = draft.chart[currentChartIndex].qtd
        const newQtd = draft.totalItems - oldQtd + action.payload.qtd

        draft.chart[currentChartIndex].qtd = action.payload.qtd
        draft.totalItems = newQtd
      })
    }

    default:
      return state
  }
}
