const { roles } = require("../roles");

const permission = function (action, resource) {
  return async (req, res, next) => {
    console.log("userRole", req.userRole);
    try {
      const permission = roles.can(req.userRole)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = permission;
