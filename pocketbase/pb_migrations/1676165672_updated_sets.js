migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k2hfl8bh",
    "name": "venue",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wzw30pq3gjy4mnv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k2hfl8bh",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wzw30pq3gjy4mnv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
