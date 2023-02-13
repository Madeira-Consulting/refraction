migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1li8lr3h",
    "name": "tracks",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2zk9ijr9ra8bmb7",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("1li8lr3h")

  return dao.saveCollection(collection)
})
