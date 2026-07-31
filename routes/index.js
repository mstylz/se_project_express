const router = require("express").Router();

const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItem");

const auth = require("../middlewares/auth");
const {
  validateSignup,
  validateSignin,
} = require("../middlewares/validation");

const clothingItemRouter = require("./clothingItem");
const userRouter = require("./users");

const NotFoundError = require("../errors/not-found-error");

router.post("/signup", validateSignup, createUser);
router.post("/signin", validateSignin, login);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
