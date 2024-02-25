const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  try {
    await userService.register({ username, password, repeatPassword });
    res.redirect("/users/login");
  } catch (err) {
    res.status(400).send(err.message)

  }
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await userService.login(username, password);

  res.cookie("authToken", token, { httpOnly: true });

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
});

module.exports = router;
