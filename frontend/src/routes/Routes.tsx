import { useRoutes } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import WebScrap from "../Pages/WebScrap";
import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";

const Routes = () => {
    // Use the useRoutes hook to define routes
    const scrapwebRoutes = useRoutes([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/auth",
            element: <AuthPage />

        },
        {
            path: "/scrap",
            element: <WebScrap />
        },
        {
            path : "/dashboard",
            element: <Dashboard/>
        }
    ]);

    return scrapwebRoutes;
}
export default Routes;