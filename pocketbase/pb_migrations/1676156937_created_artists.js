migrate((db) => {
  const collection = new Collection({
    "id": "wt02nz9hdjxzhxx",
    "created": "2023-02-11 23:08:57.359Z",
    "updated": "2023-02-11 23:08:57.359Z",
    "name": "artists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wke9pfxj",
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
  const collection = dao.findCollectionByNameOrId("wt02nz9hdjxzhxx");

  return dao.deleteCollection(collection);
})
