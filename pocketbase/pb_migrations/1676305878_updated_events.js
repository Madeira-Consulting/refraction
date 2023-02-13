migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeomocl2",
    "name": "nation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "07gno40pwo5psbs",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // remove
  collection.schema.removeField("eeomocl2")

  return dao.saveCollection(collection)
})
