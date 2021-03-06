const Router = require("express").Router();
const ExerciseController = require("../controllers/ExerciseController");

Router.post("/:user_id", ExerciseController.CreateExercise);
Router.delete("/:exercise_id", ExerciseController.RemoveExercise);
Router.get("/:exercise_id", ExerciseController.GetExercise);

module.exports = Router;
