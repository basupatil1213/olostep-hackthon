
import webscrap_router from "./webscrap.js";
import { checkAuth } from "../helper/check_auth.js";
export default (app) => {
    app.use("/webscrap",checkAuth, webscrap_router);
  };