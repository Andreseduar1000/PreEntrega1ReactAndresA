import { ContainerBox } from "./components/ContainerBox/ContainerBox"
import { NavBar } from "./components/NavBar/NavBar"


export const App = () => {
  return (
    <>  
    <NavBar/>
    <div className="d-flex justify-content-center ">
    <ContainerBox msj={"Bienvenidos a esta pagina en remodelacion"}/>

    </div>
    
    </>
  )
}