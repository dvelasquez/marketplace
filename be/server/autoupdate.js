// Update (or create) database schema (https://loopback.io/doc/en/lb3/Creating-a-database-schema-from-models.html)
// This is effectively a no-op for the memory connector
module.exports = function(app, cb) {
  updateDatabaseSchema(app).then(() => {
    process.nextTick(cb);
  });
};

async function updateDatabaseSchema(app) {
  let datastore = app.datasources.db;

  for (let model of app.models()) {
    if (await doesModelNeedUpdate(datastore, model.modelName) === true) {
      await updateSchemaForModel(datastore, model.modelName);
    }
  }
}

function doesModelNeedUpdate(datastore, model) {
  return new Promise((resolve, reject) => {
    datastore.isActual(model, (err, actual) => {
      if (err) reject(err);
      resolve(!actual);
    });
  });
}

function updateSchemaForModel(datastore, model) {
  return new Promise((resolve, reject) => {
    datastore.autoupdate(model, (err, result) => {
      if (err) {
        reject(err);
      }
      console.log(`Autoupdate performed for model ${model}`);
      resolve();
    });
  });
}
