
export const Answer = ({answer}) => {



    return(
        <div>
            <div>{answer.answerBody}</div>
            <div>{answer.score}</div>
            <div>{answer.votes}</div>
        </div>
    )
}