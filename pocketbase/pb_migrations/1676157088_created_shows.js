migrate((db) => {
  const collection = new Collection({
    "id": "ykronu1z7coeac8",
    "created": "2023-02-11 23:11:28.673Z",
    "updated": "2023-02-11 23:11:28.673Z",
    "name": "shows",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "79jy9djs",
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
  const collection = dao.findCollectionByNameOrId("ykronu1z7coeac8");

  return dao.deleteCollection(collection);
})
