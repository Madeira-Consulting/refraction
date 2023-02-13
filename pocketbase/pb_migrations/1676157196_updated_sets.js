migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // remove
  collection.schema.removeField("6a8fohbb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vq1lytzh",
    "name": "views",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "innnwe9n",
    "name": "likes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "reifh75p",
    "name": "date",
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
    "id": "gmh8csoy",
    "name": "artist",
    "type": "relation",
    "required": true,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5czzo6ey",
    "name": "promoter",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0n5leh4a3g523i6",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6a8fohbb",
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

  // remove
  collection.schema.removeField("vq1lytzh")

  // remove
  collection.schema.removeField("innnwe9n")

  // remove
  collection.schema.removeField("reifh75p")

  // remove
  collection.schema.removeField("gmh8csoy")

  // remove
  collection.schema.removeField("k2hfl8bh")

  // remove
  collection.schema.removeField("iwkeoa3d")

  // remove
  collection.schema.removeField("0g8gtepb")

  // remove
  collection.schema.removeField("5czzo6ey")

  return dao.saveCollection(collection)
})
