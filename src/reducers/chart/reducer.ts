import { produce } from "immer";

import { Menu } from "../../@types/menu";
import { ActionTypes } from "./actions";

export interface chartItem extends Menu {}

interface ChartState {
  chart: chartItem[]
}

export function chartReducers(state: ChartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.chart.push(action.payload.newCycle)
      })

    case ActionTypes.REMOVE_ITEM: {
      const id = action.payload.id
      const currentChartIndex = state.chart.findIndex(
        (chart) => chart.id === id,
      )

      if (currentChartIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.chart = draft.chart.filter((chart) => chart.id !== id)
      })
    }

    case ActionTypes.EMPTY: {
      return produce(state, (draft) => {
        draft.chart = []
      })
    }

    default:
      return state
  }
}
