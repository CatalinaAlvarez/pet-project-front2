export const dataTransferOptions = (body={},id="")  => {
    return(
        {
            createUser: {
                method: 'POST',
                url: `http://localhost:8000/usuarios/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {id: body.id, userName: body.userName, photo: body.photo, email: body.email}
            },
            deleteQuestion:{
                method:'DELETE',
                url: `http://localhost:8000/preguntas/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            createAnswer:{
                method:'POST',
                url:`http://localhost:8000/respuestas/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {userId: body.userId, parentId: body.parentId, answerBody: body.answerBody}
            },
            updateUser:{
                method: 'PUT',
                url: `http://localhost:8000/usuario/actualizar`,
                headers: {'Content-Type': 'application/json'},
                data: {id: body.id, userName: body.userName, firstNames: body.firstNames, lastNames: body.lastNames, photo: body.photo, email: body.email}
            },
            readUser:{
                method: 'GET',
                url: `http://localhost:8000/usuario/id=${id}`,
                headers: {'Content-Type': 'application/json'},
                data: {id: body.id, userName: body.userName, firstNames: body.firstNames, lastNames: body.lastNames, photo: body.photo, email: body.email}
            }
        }
    )
}