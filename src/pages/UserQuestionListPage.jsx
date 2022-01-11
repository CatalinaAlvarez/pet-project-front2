import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {Question} from "../components/Question";
import {Link} from "react-router-dom";


export const UserQuestionListPage = () =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        if(loading){
            dispatch(loadAllQuestionsByUserId(user.id))
        }
    }, [loading])

    return(
        <div>
            {questionList && questionList.map((q) => {
                return (<div className="card container text-center py-5 mt-7">
                    <Question key={q.id} question={q}/>
                    <Link to={`/preguntas/${q.id}`} className="btn btn-primary px-5 mr-3" >
                        View Question
                    </Link>
                </div>)
            })}
        </div>
    )
}