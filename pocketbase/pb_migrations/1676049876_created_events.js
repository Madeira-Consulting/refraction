migrate((db) => {
  const collection = new Collection({
    "id": "i6pc3ml26rjobpa",
    "created": "2023-02-10 17:24:36.087Z",
    "updated": "2023-02-10 17:24:36.087Z",
    "name": "events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6pvuw4yb",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("i6pc3ml26rjobpa");

  return dao.deleteCollection(collection);
})
