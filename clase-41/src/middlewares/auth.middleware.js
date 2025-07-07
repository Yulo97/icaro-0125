// const isLogin = (req, res, next) => {
//   if (!req.signedCookies.user) {
//     return res.redirect("/login");
//   }

//   next();
// };

const isLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  next();
};

const isAdmin = (req, res, next) => {
  if (!req.signedCookies.user) {
    return res.redirect("/login");
  }

  const user = JSON.parse(req.signedCookies.user);

  if (user.role !== "admin") {
    return res
      .status(403)
      .json({ status: "failure", message: "No eres admin" });
  }

  next();
};

module.exports = { isLogin, isAdmin };
