import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {questionListLoading} from "../actions/questionListActions";



const privateNavbarOptions =[
            {
                titulo:"Home",
                url:"/",
            },
            {
                titulo:"Preguntas",
                url:`/preguntas`
            },
            {
                titulo:"Mis Preguntas",
                url:"/mispreguntas"
            },
            {
                titulo:"Crear Pregunta",
                url:"/preguntas/crear"
            },
            {
                titulo:"Perfil",
                url:"/perfil"
            }
            
        ]

export const PrivateNavbar = () =>{

    const dispatch = useDispatch();

    const handleNavigate = () =>{
        dispatch(questionListLoading());
    }

    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-info">
            <section className="nav-item nav-link mr-3">
                {privateNavbarOptions.map((e,index) =>
                { return (<Link key={index} to={e.url} onClick={handleNavigate}>{e.titulo} </Link>)})}
            </section>
        </nav>
    )
}