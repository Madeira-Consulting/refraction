migrate((db) => {
  const collection = new Collection({
    "id": "07gno40pwo5psbs",
    "created": "2023-02-13 16:18:51.761Z",
    "updated": "2023-02-13 16:18:51.761Z",
    "name": "nation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kppniocm",
        "name": "continent",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "europe",
            "northamerica",
            "southamerica"
          ]
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
  const collection = dao.findCollectionByNameOrId("07gno40pwo5psbs");

  return dao.deleteCollection(collection);
})
