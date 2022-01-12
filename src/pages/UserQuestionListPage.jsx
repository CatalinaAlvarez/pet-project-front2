import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { loadAllQuestionsByUserId} from "../payloads/questionListPayloads";
import {Question} from "../components/Question";
import {Link, useNavigate} from "react-router-dom";
import {loadQuestionById} from "../payloads/questionPayloads";


export const UserQuestionListPage = () =>{

    const dispatch = useDispatch();
    const userQuestions = useSelector(state => state.userQuestions.userQuestions);
    const userId = useSelector(state => state.user.user.id)
    const questionLoading = useSelector(state => state.question.loading)

    const navigate = useNavigate();

    const handleOpenQuestion = (id) => () => {
        dispatch(loadQuestionById(id))
        navigate(`/preguntas/${id}`)
    }

    useEffect(() =>{
        if(questionLoading){
            dispatch(loadAllQuestionsByUserId(userId))
        }
    },[questionLoading])


    return(
        <div>
            {userQuestions && userQuestions.map((q) => {
                return (<div className="card container text-center py-5 mt-7">
                    <Question key={q.id} question={q}/>
                    <button className="btn btn-primary px-5 mr-3" onClick={handleOpenQuestion(q.id)} >
                        View Question
                    </button>
                </div>)
            })}
        </div>
    )
}