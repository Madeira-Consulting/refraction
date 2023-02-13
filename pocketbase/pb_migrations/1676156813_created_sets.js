migrate((db) => {
  const collection = new Collection({
    "id": "oo8jxhoo8efsvqh",
    "created": "2023-02-11 23:06:53.051Z",
    "updated": "2023-02-11 23:06:53.051Z",
    "name": "sets",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("oo8jxhoo8efsvqh");

  return dao.deleteCollection(collection);
})
