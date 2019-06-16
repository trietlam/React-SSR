import * as Datastore from 'nedb'

const db = new Datastore({
  filename: '../db.json',
  autoload: true
})

// wrappers to convert callbacks to promise
const nedbFind = query =>
  new Promise((resolve, reject) => {
    db.find(query, (err, docs) => {
      if (err) reject(err)
      resolve(docs)
    })
  })

const buildQuery = filterObj => {
  const { gender, ageFrom, ageTo } = filterObj
  const conditions = [{ age: { $gte: ageFrom } }, { age: { $lte: ageTo } }]
  if (gender) {
    conditions.push({ gender })
  }
  const query = {
    $and: conditions
  }
  return query
}

export const getPeople = (filter = {}) => {
  const query = buildQuery(filter)
  return nedbFind(query)
}
