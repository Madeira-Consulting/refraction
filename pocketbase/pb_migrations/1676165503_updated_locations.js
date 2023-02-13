migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wzw30pq3gjy4mnv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsifasnw",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("wzw30pq3gjy4mnv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsifasnw",
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
})
