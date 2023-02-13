migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("kfmnbaof")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfmnbaof",
    "name": "tracklist",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "r8js60ybhjdn4zm",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
