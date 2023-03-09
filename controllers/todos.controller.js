const db = require("../daos/todos.database.js");

// new async/await syntax:
async function all(req, res) {
  try {
    const rows = await db.all();
    res.json(rows);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
}

async function item(req, res) {
  try {
    const row = await db.item(req.params.id);
    res.json(row);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
}

async function insert(req, res) {
try{
  const newTodo = await db.asyncInsert(req.body.todo,req.body.id_user)
  res.json({newTodo})
} catch(e){
  res.status(500).json({error: e})
}
}

async function update(req, res) {
  try {
    await db.update(req.params.id);
    res.status(200).json({});
  } catch (ex) {
    res.status(500).json({ error: ex });
  }

  return;
}

async function remove(req, res) {
  try {
    await db.remove(req.params.id);
    res.status(200).json({});
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
  return;
}

async function removeQString(req, res) {
  try {
    await db.remove(req.query.id);
    res.status(200).json({});
  } catch (ex) {
    res.status(500).json({ error: ex });
  }

  return;
}

module.exports = {
  all,
  item,
  insert,
  update,
  remove,
  removeQString,
};
