migrate((db) => {
  const collection = new Collection({
    "id": "0n5leh4a3g523i6",
    "created": "2023-02-11 23:13:13.611Z",
    "updated": "2023-02-11 23:13:13.611Z",
    "name": "promoters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r2y5rgvf",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0n5leh4a3g523i6");

  return dao.deleteCollection(collection);
})
