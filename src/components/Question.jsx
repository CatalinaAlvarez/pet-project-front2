import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { ModalDelete } from "../utils/ModalDelete";
import { useState } from "react";
import {deleteQuestion, loadQuestionById} from "../payloads/questionPayloads";
import {questionListLoading} from "../newActions/questionListActions";
import {loadUserQuestions} from "../payloads/userQuestionsPayloads";
import {questionLoading} from "../newActions/questionActions";


export const Question = ({question}) => {

    const state = useSelector(state => state.user.user)
    const myQuestion = useSelector(state => state.question)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const msgModal = {
        msg: "¿Desea eliminar esta pregunta?",
        titulo: "Eliminar pregunta",
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = (id) => () =>{
        dispatch(deleteQuestion(id))
        setOpen(false);
    }

    const handleDelete = () =>{
        setOpen(true)
    }

    const modules = {
        toolbar: false
    };

    
    
    return(
        <div className="question">
            {state && state.id === question.userId ? <div>
                    <ReactQuill value={question.questionBody}  
                    modules={modules}   
                    readOnly='true'/>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>Fecha de creación: {question.dateOf}</div>
                    <button className="btn btn-primary px-5 mr-3" onClick={handleDelete}>Eliminar</button>
                    <ModalDelete
                        msgModal={msgModal}
                        open={open}
                        handleClose={handleClose}
                        handleConfirm={handleConfirm(question.id)}
                    />
                </div>:
                <div>
                    <ReactQuill value={question.questionBody}  
                    modules={modules}   
                    readOnly='true'/>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>Fecha de creación: {question.dateOf}</div>
                </div>}
        </div>
    )
}