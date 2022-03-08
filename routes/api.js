const router = require("express").Router();
const MSSQL = require("./libs/MSSQL");
const db = new MSSQL("127.0.0.1", "sa", "12345678", "company");

// GET API HOME PAGE
router.get("/", (req, res) => {
  res.send({ msg: "Welcome to Express API." });
});

// C = Create
router.post("/create-employee", async (req, res) => {
  const { name, date } = req.body;
  try {
    const sql = `INSERT INTO employees VALUES ('${name}', '${date}')`;
    await db.execute(sql);

    res.send({ msg: "Insert successfully." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Insert failed." });
  }
});

// R = Read
router.get("/all-employees", async (req, res) => {
  try {
    const { recordset } = await db.execute("SELECT * FROM employees");

    res.send(recordset);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

// U = Update
router.post("/edit-employee", async (req, res) => {
  const { id, name, date } = req.body;
  try {
    const sql = `UPDATE employees SET name='${name}', date='${date}' WHERE id=${id}`;
    await db.execute(sql);

    res.send({ msg: "Updated." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Update failed." });
  }
});

// D = Delete
router.get("/remove-employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sql = `DELETE FROM employees WHERE id=${id}`;
    await db.execute(sql);

    res.send({ msg: "Deleted." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Delete failed." });
  }
});

module.exports = router;
