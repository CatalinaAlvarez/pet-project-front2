import logo from "../assets/logo.png"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {questionListLoading} from "../newActions/questionListActions";
import {answerListLoading} from "../newActions/answerListActions";
import {pageLoadedAction, pageLoadingAction} from "../newActions/pageActions";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../payloads/questionListPayloads";
import {userLogoutAction} from "../newActions/userActions";
import {app} from "../webService/firebase";


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

    const user = useSelector(state => state.user.user)

    const navigate = useNavigate();


    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-info">
        <section className="nav-item nav-link mr-3">
            <img className="logo" src={logo} alt="logo"/>
            <Link to={"/"} > Home </Link>
            <Link to={"/preguntas"} > Preguntas </Link>
            <Link to={"/mispreguntas"} > Mis Preguntas </Link>
            <Link to={"/preguntas/crear"} > Crear Preguntas </Link>
            <Link to={"/perfil"} > Perfil </Link>
            </section>
        </nav>
    )
}