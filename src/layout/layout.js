import { Footer } from "../components/footer";
import { Nav } from "../components/nav";
import {Outlet} from "react-router-dom";

export const Layout=()=>{
    return(
        <main>
            <Nav/>
            <Outlet/>
            <Footer/>
        </main>
    )
}