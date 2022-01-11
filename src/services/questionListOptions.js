
export const questionListOptions = (userId="") => {
    return(
        {
            getAll:{
                method: 'GET',
                url: `http://localhost:8000/preguntas`,
                headers: {'Content-Type': 'application/json'}
                },

            getAllbyUserId:{
                method: 'GET',
                url: `http://localhost:8000/preguntas/usuario/${userId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}