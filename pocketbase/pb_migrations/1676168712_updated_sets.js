migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  collection.listRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
