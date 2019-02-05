const router = require("express").Router();
const contactRoutes = require("./contact");
const usersRoutes = require("./users")

router.use('/contacts', contactRoutes);
router.use('/users', usersRoutes)

module.exports = router;