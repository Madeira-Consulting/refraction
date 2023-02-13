migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("07gno40pwo5psbs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kppniocm",
    "name": "continent",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "europe",
        "northamerica",
        "southamerica"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("07gno40pwo5psbs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kppniocm",
    "name": "continent",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "europe",
        "northamerica",
        "southamerica"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
