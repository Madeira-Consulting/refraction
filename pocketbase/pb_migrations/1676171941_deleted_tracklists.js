migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r8js60ybhjdn4zm");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "r8js60ybhjdn4zm",
    "created": "2023-02-12 02:07:59.324Z",
    "updated": "2023-02-12 03:14:25.192Z",
    "name": "tracklists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "brvidozh",
        "name": "set",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "oo8jxhoo8efsvqh",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
