migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqw6sia8",
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
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // remove
  collection.schema.removeField("uqw6sia8")

  return dao.saveCollection(collection)
})
