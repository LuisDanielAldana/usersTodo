const DBSOURCE = "./todos.sqlite";

const betterSqlite3 = require("better-sqlite3");
const db = betterSqlite3(DBSOURCE);

function all() {
  const stm = db.prepare("SELECT * FROM users");
  const rows = stm.all();

  const mappedRows = rows.map((elem) => {
     return {
       ...elem,
       done: Boolean(elem.done)
     };
  });

  return mappedRows;
}

function item(id) {
  const stm = db.prepare("SELECT * FROM users WHERE id = ?");
  const rows = stm.get(id);
  return rows;
}

function update(id) {

  const stm = db.prepare("UPDATE todos SET done = NOT done WHERE id = ?");
  const rows = stm.run( id);
  return rows;
}

function remove(id) {
  const stm = db.prepare("DELETE FROM users WHERE id = ?");
  const rows = stm.run(id);
  return rows;
}

function asyncInsert(name,username,password){
  const stm = db.prepare("INSERT INTO users(name,username,password) VALUES( ? , ?, ? )");
  const rows = stm.run(name,username,password);
  return rows;
}

module.exports = {
  all,
  asyncInsert,
  item,
  update,
  remove,
};
