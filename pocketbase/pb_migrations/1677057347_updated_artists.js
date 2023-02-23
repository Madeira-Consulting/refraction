migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qacbt2yu",
    "name": "urlParameter",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // remove
  collection.schema.removeField("qacbt2yu")

  return dao.saveCollection(collection)
})
