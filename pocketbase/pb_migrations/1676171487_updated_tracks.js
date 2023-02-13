migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

  // remove
  collection.schema.removeField("ewsgyrsz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcylhqju",
    "name": "timestamp",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7")

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

  // remove
  collection.schema.removeField("jcylhqju")

  return dao.saveCollection(collection)
})
