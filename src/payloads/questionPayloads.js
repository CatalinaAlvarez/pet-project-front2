import {questionLoading, questionLoadSuccess, questionLoadError} from "../newActions/questionActions";
import {questionOptions} from "../newOptions/questionOptions";

import axios from "axios";

export const loadQuestionById = (id) => (dispatch) => {

    dispatch(questionLoading())

    const option = questionOptions(id, {}).getById;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });
}

export const createQuestion = (data) => (dispatch) =>{

    dispatch(questionLoading())

    const option = questionOptions("", data).create;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });

}

export const deleteQuestion = (questionId) => (dispatch) =>{

    dispatch(questionLoading())

    const option = questionOptions(questionId, {}).delete;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(null))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });

}