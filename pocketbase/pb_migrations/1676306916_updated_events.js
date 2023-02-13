migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v4dotfih",
    "name": "logo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/svg+xml"
      ],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vorg8ocz",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
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
  collection.schema.removeField("v4dotfih")

  // remove
  collection.schema.removeField("vorg8ocz")

  return dao.saveCollection(collection)
})
