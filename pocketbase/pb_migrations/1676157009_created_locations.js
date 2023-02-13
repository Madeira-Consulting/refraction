migrate((db) => {
  const collection = new Collection({
    "id": "wzw30pq3gjy4mnv",
    "created": "2023-02-11 23:10:09.464Z",
    "updated": "2023-02-11 23:10:09.464Z",
    "name": "locations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hsifasnw",
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
  const collection = dao.findCollectionByNameOrId("wzw30pq3gjy4mnv");

  return dao.deleteCollection(collection);
})
