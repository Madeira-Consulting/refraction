migrate((db) => {
  const collection = new Collection({
    "id": "btvpqxlqn5ytp3j",
    "created": "2023-02-13 16:27:35.412Z",
    "updated": "2023-02-13 16:27:35.412Z",
    "name": "events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mpdm9qpp",
        "name": "name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("btvpqxlqn5ytp3j");

  return dao.deleteCollection(collection);
})
