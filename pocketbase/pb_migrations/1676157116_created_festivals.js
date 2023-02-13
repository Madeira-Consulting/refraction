migrate((db) => {
  const collection = new Collection({
    "id": "j66ilcg7xlaok7e",
    "created": "2023-02-11 23:11:56.262Z",
    "updated": "2023-02-11 23:11:56.262Z",
    "name": "festivals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m1qgql7e",
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
  const collection = dao.findCollectionByNameOrId("j66ilcg7xlaok7e");

  return dao.deleteCollection(collection);
})
