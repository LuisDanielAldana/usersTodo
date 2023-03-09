const DBSOURCE = "./todos.sqlite";

const betterSqlite3 = require("better-sqlite3");
const db = betterSqlite3(DBSOURCE);

function all() {
  const stm = db.prepare("SELECT * FROM todos");
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
  const stm = db.prepare("SELECT * FROM todos WHERE id = ?");
  const rows = stm.get(id);
  return rows;
}

function update(id) {

  const stm = db.prepare("UPDATE todos SET done = NOT done WHERE id = ?");
  const rows = stm.run( id);
  return rows;
}

function remove(id) {
  const stm = db.prepare("DELETE FROM todos WHERE id = ?");
  const rows = stm.run(id);
  return rows;
}

function asyncInsert(todo,id_user){
  const stm = db.prepare("INSERT INTO todos(todo,done) VALUES( ? , 0, ?)");
  const rows = stm.run(todo,id_user);
  return rows;
}

module.exports = {
  all,
  asyncInsert,
  item,
  update,
  remove,
};
