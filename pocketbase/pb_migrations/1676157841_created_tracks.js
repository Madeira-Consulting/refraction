migrate((db) => {
  const collection = new Collection({
    "id": "2zk9ijr9ra8bmb7",
    "created": "2023-02-11 23:24:01.193Z",
    "updated": "2023-02-11 23:24:01.193Z",
    "name": "tracks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hwbyeoaq",
        "name": "tracknumber",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
        }
      },
      {
        "system": false,
        "id": "f9qqtyr4",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yrs4sgfx",
        "name": "artist",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wmamow5g",
        "name": "duration",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "x9srtl5u",
        "name": "tracklist",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "oo8jxhoo8efsvqh",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("2zk9ijr9ra8bmb7");

  return dao.deleteCollection(collection);
})
