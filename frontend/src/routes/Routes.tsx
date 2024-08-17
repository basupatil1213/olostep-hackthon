import { useRoutes } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import WebScrap from "../Pages/WebScrap";

const Routes = () => {
    // Use the useRoutes hook to define routes
    const scrapwebRoutes = useRoutes([
        {
            path: "/auth",
            element: <AuthPage />

        },
        {
            path: "/scrap",
            element: <WebScrap />
        }
    ]);

    return scrapwebRoutes;
}
export default Routes;