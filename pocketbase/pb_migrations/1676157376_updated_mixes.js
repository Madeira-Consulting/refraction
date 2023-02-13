migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o3ipdy0u",
    "name": "media",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "video",
        "audio"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sn5vbiio",
    "name": "hasCrowd",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ussnlnnd",
    "name": "isCurated",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("o3ipdy0u")

  // remove
  collection.schema.removeField("sn5vbiio")

  // remove
  collection.schema.removeField("ussnlnnd")

  return dao.saveCollection(collection)
})
