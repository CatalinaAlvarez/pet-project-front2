import {Link} from "react-router-dom";
import { questionListLoading } from "../actions/questionListActions";
import { useDispatch } from "react-redux";


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
        <nav>
            <section>
                {publicNavbarOptions.map((e,index) =>
                { return (<Link key={index} to={e.url} onClick={handleNavigate}>{e.titulo}</Link>)})}
            </section>
        </nav>
    )
}