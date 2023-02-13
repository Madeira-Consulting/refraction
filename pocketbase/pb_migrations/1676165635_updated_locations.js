migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wzw30pq3gjy4mnv")

  collection.name = "venues"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wzw30pq3gjy4mnv")

  collection.name = "locations"

  return dao.saveCollection(collection)
})
