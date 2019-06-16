import { getPeople } from "../models/peopleModel"

const parseQueryString = filterStr => {
  let filter = {}
  let ageFrom = NaN
  let ageTo = NaN
  try {
    filter = JSON.parse(filterStr)
    ageFrom = parseInt(filter.ageFrom || 0)
    ageTo = parseInt(filter.ageTo || 100)
  } catch (err) {
    console.error(err)
    return undefined
  }

  if (isNaN(ageFrom) || isNaN(ageTo)) {
    return undefined
  }

  // make sure data type is number
  filter.ageFrom = ageFrom
  filter.ageTo = ageTo
  return filter
}

export const getPeopleHandler = (req, res) => {
  console.log(req.query.filter)
  let filter = parseQueryString(req.query.filter)
  if (!filter) {
    res.status(400).send("Invalid filter format")
    return
  }

  getPeople(filter)
    .then(doc => {
      res.contentType("application/json")
      res.status(200).send(doc)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send(error)
    })
}
