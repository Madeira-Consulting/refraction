migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9srtl5u",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9srtl5u",
    "name": "tracklist",
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
})
