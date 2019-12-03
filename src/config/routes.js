import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import Home from "../pages/Home/Home";
import Clients from "../pages/Clients/Clients";

const routes = [
    {
        path: "/",
        name: "home",
        description: "Home",
        component: Home,
        sidebarEnabled: true,
        icon: faHome,
        exact: true
    },
    {
        path: "/clients",
        name: "clients",
        description: "Clients",
        component: Clients,
        sidebarEnabled: true,
        icon: faUsers
    }
];

export default routes;
