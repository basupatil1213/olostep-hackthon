
import webscrap_router from "./webscrap.js";
import { checkAuth } from "../helper/check_auth.js";
import auth_router from "./auth_route.js";
export default (app) => {
    app.use("/webscrap", checkAuth, webscrap_router);
    app.use("/auth", auth_router);
  };