const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("basic").readOwn("profile");
  ac.grant("trainer")
    .readOwn("profile")
    .updateOwn("profile")
    .createOwn("profile")
    .deleteOwn("profile");

  return ac;
})();
