migrate((db) => {
  const collection = new Collection({
    "id": "0rccdgg28x4v0v9",
    "created": "2023-02-13 16:21:08.417Z",
    "updated": "2023-02-13 16:21:08.417Z",
    "name": "genre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ahqgtet1",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oyj2g2j0",
        "name": "bpm",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("0rccdgg28x4v0v9");

  return dao.deleteCollection(collection);
})
