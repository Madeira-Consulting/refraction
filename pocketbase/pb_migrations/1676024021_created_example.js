migrate((db) => {
  const collection = new Collection({
    "id": "vydu2jzrq5e0p2e",
    "created": "2023-02-10 10:13:41.170Z",
    "updated": "2023-02-10 10:13:41.170Z",
    "name": "example",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3wp3k8aw",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 200,
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
  const collection = dao.findCollectionByNameOrId("vydu2jzrq5e0p2e");

  return dao.deleteCollection(collection);
})
