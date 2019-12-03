import { faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "../pages/Home/Home";

const routes = [
    {
        path: "/",
        name: "home",
        description: "Home",
        component: Home,
        sidebarEnabled: true,
        icon: faHome
    }
];

export default routes;
