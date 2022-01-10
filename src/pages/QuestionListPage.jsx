import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { Question } from "../components/Question";
import {loadQuestionById} from "../middlewares/questionPayloads";

export const QuestionListPage = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        if(loading){
            dispatch(loadAllQuestions())
        }
    }, [loading])

    return (
        <div>
            {questionList && questionList.map((q) => {
                return (<div className="card container text-center py-5 mt-7">
                    <Question key={q.id} question={q}/>
                    <Link to={`/preguntas/${q.id}`} className="btn btn-secondary px-5 mr-3" >
                        View Question
                    </Link>
                    </div>)
            })}
        </div>
    )
}
