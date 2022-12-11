import { Router } from "express";
import {
  insertNewCustomer,
  returnCustomerById,
  returnCustomers,
  updateCustomer,
} from "../controllers/customers.controllers.js";
import { newCustomerValidation } from "../middlewares/customers.middlewares.js";

const customersRouter = Router();

customersRouter.get("/customers", returnCustomers);
customersRouter.get("/customers/:id", returnCustomerById);
customersRouter.post("/customers", newCustomerValidation, insertNewCustomer);
customersRouter.put("/customers/:id", updateCustomer);

export default customersRouter;