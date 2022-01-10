import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {updateUser} from "../middlewares/dataTransferPayload";
import {useForm} from "react-hook-form";


export const ProfilePage = () =>{

    const user = useSelector(state=> state.dataTransfer.userData)
    const user1 = useSelector(state=> state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [updating, setUpdating] = useState(false);
    const {register, handleSubmit} = useForm();

    const updateHandler = (data) =>{
        data.id = user1.id;
        data.email = user1.email;
        data.photo = user1.photo;
        dispatch(updateUser(data))
        navigate("/preguntas")
    }

    return(
        <div>
            <h1 className="button">Perfil</h1>
            <div className="container">
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
                        <button className="button" type="submit">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}