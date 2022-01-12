import {userLoggedAction, userLogoutAction} from "../newActions/userActions";
import {createUser, readUser} from "../payloads/userPayloads";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom"
import { app, google } from "../webService/firebase";
import {useState} from "react";
import { ModalLogin } from "../utils/ModalLogin";
import {loadUserQuestions} from "../payloads/userQuestionsPayloads";
import {loadAllQuestions} from "../payloads/questionListPayloads";


export const LoginPage = () => {

    const state = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        userName: null,
        password: null,
        error: null
    })
    
    const logOutHandler = () => {
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/");
    }

    const logInHandler = () =>{
        app.auth().signInWithPopup(google)
        dispatch(loadAllQuestions())
        navigate("/mispreguntas");
    }

    const msgModal = {
        msg: "No se ha encontrado la cuenta, ¿desea revisar sus datos o registrarse?",
        titulo: "Cuenta no encontrada",
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleConfirm = () => {
        app.auth().createUserWithEmailAndPassword(loginData.email, loginData.password)
            .then(response => {
                dispatch(createUser({id: response.user.uid,
                    userName: response.user.displayName,
                    photo: response.user.photoURL,
                    email:response.user.email}))
            })
        setOpen(false);
    }

    const logWithEmailHandler = (e) =>{
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
            .catch( error => {
            setOpen(true)
            setLoginData({...loginData, error: error.message
            })
        })
    }


    return (
        <div className="card container text-center py-5 mt-7 pb-10">
            <h1>Home</h1>
            {state ?
                <button className="btn btn-primary px-5 mr-3" onClick={logOutHandler}>
                    Log-out
                </button> :
                <div>
                    <div className="container">
                        <form className="mt-5 py-5 px-5" onSubmit={logWithEmailHandler} >
                            <h1>
                                Ingresar a preguntas
                            </h1>
                            <p className="p-mensaje">Completa los campos para ingresar</p>
                            <div >
                                <input
                                    required
                                    className="input-box"
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    onChange={(e => setLoginData({ ...loginData, email: e.target.value }))}
                                ></input>
                            </div>
                            <div>
                                <input
                                    required
                                    className="input-box"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onChange={(e => setLoginData({ ...loginData, password: e.target.value }))}
                                ></input>
                            </div>
                            <div className="form-group">

                                <p className="text-danger">{loginData.error}</p>

                                <button className="btn btn-primary px-5 mr-3" type="submit">
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        <ModalLogin
                            msgModal={msgModal}
                            open={open}
                            handleClose={handleClose}
                            handleConfirm={handleConfirm}
                        ></ModalLogin>
                    </div>

                    <button className="btn btn-primary px-5 mr-3" onClick={logInHandler}>
                        Iniciar con google
                    </button>
                </div>
            }
        </div>
    );
}