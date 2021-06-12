import { NavBar } from "./navBar";

function Layout({children}) {

    return(
    <>
        <NavBar/>
        {children}

    </>


    )
}


export { Layout }