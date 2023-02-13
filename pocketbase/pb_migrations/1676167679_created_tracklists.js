migrate((db) => {
  const collection = new Collection({
    "id": "r8js60ybhjdn4zm",
    "created": "2023-02-12 02:07:59.324Z",
    "updated": "2023-02-12 02:07:59.324Z",
    "name": "tracklists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9dyl4geh",
        "name": "complete",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("r8js60ybhjdn4zm");

  return dao.deleteCollection(collection);
})
