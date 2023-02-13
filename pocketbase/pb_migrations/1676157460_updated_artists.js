migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jmjl1ie",
    "name": "alias",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wt02nz9hdjxzhxx",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgdlzsvu",
    "name": "age",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfsyahag",
    "name": "profilepicture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wke9pfxj",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx")

  // remove
  collection.schema.removeField("6jmjl1ie")

  // remove
  collection.schema.removeField("jgdlzsvu")

  // remove
  collection.schema.removeField("kfsyahag")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wke9pfxj",
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
