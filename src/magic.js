import React, {useState} from "react";
import defaultAnswer from "./answers.json";
import "./magic.css";

//logic: click a ball, show answers, click again, change answers
const EightBall = ({answers = defaultAnswer}) => {
    const[answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black"
    })
    const choice = (arr) => {
        let randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }
      
      
    const handleClick = (evt) => {
        setAnswer(choice(answers))
    }
    return(
        <div onClick = {handleClick} className = "EightBall">
            <b> {answer.msg} </b>
        </div>
    )
}

export default EightBall;

//we probably need some css to style a ball?
