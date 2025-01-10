import { Router } from "express";
import { LoginController } from "../controllers/loginController.js";    // Import the LoginController class from the loginController.js file 

const loginRouter = Router()    // Create a new router object
const loginController = new LoginController()    // Create a new instance of the LoginController class

loginRouter.post('/',loginController.login)    // Create a POST route that calls the login method of the loginController object
