import { types } from '../actions'

export const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.loadData.completed:
      return {
        data: payload
      }

    default:
      return { ...state }
  }
}

export default {
  people: reducer
}
