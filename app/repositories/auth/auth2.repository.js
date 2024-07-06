const { User } = require("../../../models");

async function acquireByUsername(username) {
  return await User.findOne({
    where: {
      username: username,
    },
  });
}

module.exports = {
  acquireByUsername,
};
