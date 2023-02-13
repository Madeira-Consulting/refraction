migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // remove
  collection.schema.removeField("wmamow5g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewsgyrsz",
    "name": "timestamp",
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
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmamow5g",
    "name": "duration",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("ewsgyrsz")

  return dao.saveCollection(collection)
})
