migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
