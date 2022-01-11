import {Link} from "react-router-dom";
import { questionListLoading } from "../actions/questionListActions";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png"


const publicNavbarOptions = [
    {
        titulo:"Home",
        url:"/",
    },
    {
        titulo:"Preguntas",
        url:"/preguntas"
    }
]

export const PublicNavbar = () =>{

    const dispatch = useDispatch();

    const handleNavigate = () =>{
        dispatch(questionListLoading());
    }


    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-info">
            <img className="logo" src={logo} alt="logo"/>
            <section className="nav-item nav-link mr-3">
                {publicNavbarOptions.map((e,index) =>
                { return (<Link key={index} to={e.url} onClick={handleNavigate}>{e.titulo}</Link>)})}
            </section>
        </nav>
    )
}