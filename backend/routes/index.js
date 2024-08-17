
import webscrap_router from "./webscrap.js";

export default (app) => {
    app.use("/webscrap",webscrap_router);
  };