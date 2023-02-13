migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xregalve",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("xregalve")

  return dao.saveCollection(collection)
})
