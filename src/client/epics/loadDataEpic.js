import { mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import axios from 'axios'
import { types } from '../actions'
import { config } from '../utils/config'

const { loadData } = types

export const loadDataEpic = action$ =>
  action$.pipe(
    ofType(types.loadData.requested),
    mergeMap(({ payload }) =>
      axios
        .get(
          `${config.baseUrl}/people?filter=${encodeURIComponent(
            JSON.stringify(payload)
          )}`
        )
        .then(res => {
          return {
            type: loadData.completed,
            payload: res.data
          }
        })
        .catch(error => ({
          type: loadData.failed,
          payload: error
        }))
    )
  )

export default [loadDataEpic]
