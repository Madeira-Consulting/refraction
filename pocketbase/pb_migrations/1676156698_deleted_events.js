migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i6pc3ml26rjobpa");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "i6pc3ml26rjobpa",
    "created": "2023-02-10 17:24:36.087Z",
    "updated": "2023-02-10 17:27:12.401Z",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
