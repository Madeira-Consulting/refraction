migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8js60ybhjdn4zm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dyl4geh",
    "name": "isInitial",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8js60ybhjdn4zm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dyl4geh",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
