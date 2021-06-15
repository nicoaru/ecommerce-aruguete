import { Layout } from "../../components/layout";
import './home.css'
import { ItemListContainer } from '../../components/itemListContainer'

function Home() {

    return(
        <Layout>
            <ItemListContainer greetings={<div><h1 style={{fontSize: 35, textAlign: 'center'}}>Bienvenido a La Vegana</h1><h2 style={{fontSize: 23, textAlign: 'center'}}>Aqui estara nuestro catalogo</h2></div>} />
        </Layout>
    )
}


export { Home }