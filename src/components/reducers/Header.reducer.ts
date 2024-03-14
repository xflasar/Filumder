export const initialState = {
  searchValue: ''
}

export const enum REDUCER_ACTION_TYPE {
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
}

type ACTION = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

export const headerReducer = (state: typeof initialState, action: ACTION): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload ?? ''
      }
    default:
      return state
  }
}
