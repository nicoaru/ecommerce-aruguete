import React from 'react'
import { Link } from 'react-router-dom';
import { Layout } from "../../components/layout/layout";
import './pageNotFound.css'

function PageNotFound() {

    return(
        <Layout>
            <h1>Lo sentimos, la pagina que buscas no existe o por alguna razon no se encuentra disponible</h1>
            <Link to='/'>Volver al INICIO</Link>
        </Layout>
    )
}


export { PageNotFound }