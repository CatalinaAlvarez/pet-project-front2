import { useDispatch, useSelector } from "react-redux";
import {loadQuestionById} from "../payloads/questionPayloads";
import {loadAllAnswerByParentId} from "../payloads/answerListPayloads";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { Answer } from "../components/Answer";
import {CreateAnswerForm} from "../components/CreateAnswerForm";
import {pageLoadedAction} from "../newActions/pageActions";
import {questionLoading} from "../newActions/questionActions";



export const QuestionPage = () =>{

    const {questionId} = useParams();

    const dispatch = useDispatch();
    const loadingPage = useSelector(state => state.page.loading)
    const {loading, question} = useSelector(state => state.question);
    const answerList = useSelector(state => state.answerList.answerList)
    const user = useSelector(state => state.user.user)
    

    const [answering, setAnswering] = useState(false);

    const toggleAnswer = () =>{
        setAnswering(!answering)
    }

    useEffect(() =>{
        dispatch(loadQuestionById(questionId))
        setAnswering(false)
    }, [answerList])


    return(
        <div>
            {question && <div className="card container text-center py-5 mt-7">
                <Question question={question}/>
                {user && <button className="btn btn-primary px-5 mr-3" onClick={toggleAnswer}>Responder</button>}
                {user && answering ? <CreateAnswerForm /> : <></>}
            </div>}
            {answerList ? <h1>Respuestas</h1>:<></>}
            {answerList && answerList.map((a) => 
            <div className="question-excerpt">
                <Answer key={a.id} answer={a}/>
            </div>)}
        </div>
    )

}
