import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextEditor from "../utils/TextArea";
import {createQuestion} from "../payloads/questionPayloads";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../payloads/questionListPayloads";


export const CreateQuestion = () =>{

    const userData = useSelector(state => state.user.user)

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [ body, setBody ] = useState("");

    const onSubmit = (data) => {
        data.userId = userData.id;
        data.questionBody = body;
        dispatch(createQuestion(data));
        dispatch(loadAllQuestionsByUserId(userData.id))
        dispatch(loadAllQuestions())
        navigate("/mispreguntas")
    }

    return(

        <div>
        <div className="container justify-content-center border-primary mt-7">
        <form className="mt-5 py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
                
                <h1>Pregunta</h1>
                <label>Añadir nueva pregunta</label>
                <TextEditor body={body} setBody={setBody}/>
                <label className=" font-medium">Type</label>
                <select {...register("type")} required className="" name="type" defaultValue="Type" >
                  <option disabled type="String" value="" >Type</option>
                  <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
                        <option type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
                        <option type="String" value="WITH_RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option type="String" value="WITH_EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select {...register("category")} required name="category"  defaultValue="Category" className="" >
                  <option disabled type="String"  value="">Category</option>
                  <option value="TECHNOLOGY_AND_COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE_DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL_SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="btn btn-primary px-5 mr-3" type="submit">Enviar</button>
            </form>
            </div>
            </div>
    )


}