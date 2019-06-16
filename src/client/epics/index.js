import { combineEpics } from 'redux-observable'
import dataEpic from './loadDataEpic'

const rootEpic = combineEpics(...dataEpic)
export default rootEpic
