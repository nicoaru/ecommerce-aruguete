import { NavBar } from "./navBar/navBar";

function Layout({children}) {

    return(
    <>
        <NavBar/>
        {children}

    </>


    )
}


export { Layout }