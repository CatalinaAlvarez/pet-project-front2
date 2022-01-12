import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { questionListLoading } from "../newActions/questionListActions";
import { userLoggedAction } from "../newActions/userActions";
import { updateUser } from "../payloads/userPayloads";


export const ProfilePage = () =>{

    const [updating, setUpdating] = useState(true);
    const {register, handleSubmit} = useForm();
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateHandler = (data) => {
        data.id = user.id;
        data.email = user.email;
        data.photo = user.photo;
        dispatch(updateUser(data));
        dispatch(questionListLoading())
        dispatch(userLoggedAction(data))
        navigate("/")
    }

    return(
        <div>
            <div className="container justify-content-center border-primary mt-7">
                <form className="mt-5 py-5 px-5" onSubmit={handleSubmit(updateHandler)}>
                    <h2>
                        Actualizar información
                    </h2>
                    <p className="p-mensaje">Completa los campos</p>
                    <div >
                        <input
                            required
                            className="input-box"
                            placeholder="Nombre de usuario"
                            name="userName"
                            type="text"
                            defaultValue={user.userName}
                            {...register("userName")}
                        ></input>
                    </div>
                    <div>
                        <input
                            required
                            className="input-box"
                            placeholder="Nombres"
                            name="firstNames"
                            type="text"
                            defaultValue={user.firstNames}
                            {...register("firstNames")}
                        ></input>
                    </div>
                    <div>
                        <input
                            required
                            className="input-box"
                            placeholder="Apellidos"
                            name="lastNames"
                            type="text"
                            defaultValue={user.lastNames}
                            {...register("lastNames")}
                        ></input>
                    </div>
                    <div>
                        <input
                            disabled
                            className="input-box"
                            placeholder="Apellidos"
                            name="email"
                            type="text"
                            defaultValue={user.email}
                        ></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary px-5 mr-3" type="submit">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}