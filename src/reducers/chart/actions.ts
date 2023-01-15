import { chartItem } from "./reducer";

export enum ActionTypes {
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  EMPTY = 'EMPTY',
}

export function updateQuantityAction(id: number, qtd: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: {
      id,
      qtd,
    },
  }
}

export function addNewItemAction(newItem: chartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export function emptyAction() {
  return {
    type: ActionTypes.EMPTY,
  }
}
