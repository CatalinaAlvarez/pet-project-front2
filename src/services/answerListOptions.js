
export const answerListOptions = (id="") => {
    return(
        {
            getAllByParentId:{
                method: 'GET',
                url: `http://localhost:8000/respuestas/parentId/${id}`,
                headers: {'Content-Type': 'application/json'}
                },
            deleteById:{
                method: 'DELETE',
                url: `http://localhost:8000/respuesta/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}