import { useDispatch, useSelector } from "react-redux";
import {loadAllQuestions} from "../payloads/questionListPayloads";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Question } from "../components/Question";
import {loadQuestionById} from "../middlewares/questionPayloads";
import {loadAllAnswerByParentId} from "../payloads/answerListPayloads";
import {LoginPage} from "./LoginPage";

export const QuestionListPage = () => {

    const dispatch = useDispatch();
    const questionList = useSelector(state => state.questionList.questionList);
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate();

    const handleOpenQuestion = (id) => () => {
        dispatch(loadQuestionById(id))
        dispatch(loadAllAnswerByParentId(id))
        navigate(`/preguntas/${id}`)
    }


    return (
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
