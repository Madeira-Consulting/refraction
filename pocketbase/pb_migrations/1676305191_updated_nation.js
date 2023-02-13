migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("07gno40pwo5psbs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvi9dxbg",
    "name": "flag",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("07gno40pwo5psbs")

  // remove
  collection.schema.removeField("hvi9dxbg")

  return dao.saveCollection(collection)
})
