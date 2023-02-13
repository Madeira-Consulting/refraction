migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m2hcbphn",
    "name": "set",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "oo8jxhoo8efsvqh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // remove
  collection.schema.removeField("m2hcbphn")

  return dao.saveCollection(collection)
})
