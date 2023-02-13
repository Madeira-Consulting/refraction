migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhvn5tsc",
    "name": "nationality",
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
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // remove
  collection.schema.removeField("mhvn5tsc")

  return dao.saveCollection(collection)
})
