import { UserWidget } from "../UserWidget/UserWidget"


export const NavBar = () => {
    return (
    <nav className="d-flex justify-content-around p-4">
        <div className="">
            <button className="btn btn-primary mx-1">Paquetes</button>
            <button className="btn btn-primary mx-1" >Aventuras</button>
            <button className="btn btn-primary mx-1">Contacto</button>
        </div>
    <div className="d-flex ">
        <UserWidget />
        <p className=" mt-3 ">0</p>
    </div>

    </nav>


    )
}
