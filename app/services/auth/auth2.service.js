const repository = require("../../repositories/auth/auth2.repository");
const jwt = require("jsonwebtoken");
async function login(username, passord) {
  const dataAuth = await repository.acquireByUsername(username);
  if (!dataAuth) {
    throw new Error("False Username or Password");
  }
  if (dataAuth.password !== passord) {
    throw new Error("False Username or Password");
  }

  const token = jwt.sign(
    { id: dataAuth.id, username: dataAuth.username },
    "bismillah",
    { expiresIn: "1h" }
  );
  return token;
}

module.exports = { login };
