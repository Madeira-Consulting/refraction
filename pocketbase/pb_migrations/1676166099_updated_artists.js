migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbzuyogr",
    "name": "followers",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // remove
  collection.schema.removeField("nbzuyogr")

  return dao.saveCollection(collection)
})
