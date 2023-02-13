migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
