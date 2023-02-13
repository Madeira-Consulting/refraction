migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqgvkefi",
    "name": "genre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0rccdgg28x4v0v9",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // remove
  collection.schema.removeField("sqgvkefi")

  return dao.saveCollection(collection)
})
