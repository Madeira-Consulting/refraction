migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  collection.createRule = null

  return dao.saveCollection(collection)
})
