const actionsBuilder = name => {
  const prefix = name.toUpperCase()
  return {
    requested: `${prefix}_REQUESTED`,
    completed: `${prefix}_COMPLETED`,
    failed: `${prefix}_FAILED`,
    cancelled: `${prefix}_CANCELLED`
  }
}

export const types = {
  loadData: actionsBuilder('load_data')
}

// filterObs: {
//   gender: [string],
//   ageFrom: [number],
//   ageTo: [number]
// }
export const loadData = (filterObj = {}) => ({
  type: types.loadData.requested,
  payload: filterObj
})
