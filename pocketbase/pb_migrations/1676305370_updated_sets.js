migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("iwkeoa3d")

  // remove
  collection.schema.removeField("0g8gtepb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwkeoa3d",
    "name": "show",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ykronu1z7coeac8",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0g8gtepb",
    "name": "festival",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j66ilcg7xlaok7e",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
