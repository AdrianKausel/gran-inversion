import React, {useState} from "react";

const PersonCard = (props) => {
        const [age, setAge] = useState(props.age)
        const updateStateAge = ()=> {
            let newAge = age
            newAge++
            setAge(newAge)
        }
        return(
            <div className="Card">
                <h1> {props.lastName} ,  {props.firstName} </h1>
                <p> age: {age} </p>
                <p> Hair Color: {props.hairColor} </p>
                <button onClick={updateStateAge} > Happy Birthday, {props.firstName}!</button>
            </div>
        )

    
}


export default PersonCard