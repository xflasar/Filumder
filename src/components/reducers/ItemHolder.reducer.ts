export const initialState: HeaderState = {
    isLoading: true,
    error: '',
    data: []
}
export type HeaderState = {
  isLoading: boolean;
  error: string;
  data: Item[];
}


// transfer to Item component
type Item = {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
}

export const enum REDUCER_ACTION_TYPE {
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_DATA = 'SET_DATA'
}

export type ACTION = {
    type: REDUCER_ACTION_TYPE.SET_DATA,
    payload: Item[] | []
} |
{
    type: REDUCER_ACTION_TYPE.SET_ERROR
    payload: string | ''
} |
{
  type: REDUCER_ACTION_TYPE.SET_LOADING
  payload: boolean
}

export const itemHolderReducer = (state: typeof initialState, action: ACTION): typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case REDUCER_ACTION_TYPE.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REDUCER_ACTION_TYPE.SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}