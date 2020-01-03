import { todoTypes } from "../actionTypes";

export function todoItems(state = [], action) {
  // console.log(action);
  const { payload } = action;

  const { item, isComplete } = payload || {};

  switch (action.type) {
    case todoTypes.ADD_ITEM:
      return (item && [...state, item]) || state;
    case todoTypes.REMOVE_ITEM:
      return state.filter(e => e !== item);
    case todoTypes.CLEAR_COMPLETE_ITEM:
      return state.filter(e => !e.isComplete);
    case todoTypes.CHANGE_IS_COMPLETED_ALL:
      return (
        (isComplete !== "undefined" &&
          state.map(e => ({
            ...e,
            isComplete
          }))) ||
        state
      );
    case todoTypes.CHANGE_IS_COMPLETE:
      item.isComplete = isComplete;
      return [...state];
    default:
      return state;
  }
}

export function filterState(state = true, action) {}
