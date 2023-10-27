import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"


export const App = () => {
  return (
    <>  
    <NavBar/>
    <div className="d-flex justify-content-center ">
    <ItemListContainer msj={"Bienvenidos a esta pagina en remodelacion"}/>

    </div>
    
    </>
  )
}