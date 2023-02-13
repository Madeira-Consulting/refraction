migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgmn3l4x",
    "name": "editions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "btvpqxlqn5ytp3j",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // remove
  collection.schema.removeField("zgmn3l4x")

  return dao.saveCollection(collection)
})
