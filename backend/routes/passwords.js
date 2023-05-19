const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwords');
// router.post('/', checkAuth, courseController.createCourse);
// router.put('/:id', checkAuth, courseController.editCourse);
// router.delete('/:id', checkAuth, courseController.removeCourse);
// router.get('/', checkAuth, courseController.getCourses);

router.post('/create', passwordController.createResult);
router.get('/', passwordController.getResults);
router.put('/:id', passwordController.updateResult);
router.delete('/:id', passwordController.deleteResult);
module.exports = router;