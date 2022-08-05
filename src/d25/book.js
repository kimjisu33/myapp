import React from "react";

/*
function Book(props){
    return (
        <div style={{
            textAlign:"center"
        }}>
            <h1 style={{
                backgroundColor:"black",
                color:"aqua",
                fontSize:"30px"
            }}>이 책의 이름은 {props.name} 입니다</h1>
            <h2>이책은 총 {props.numOfPage}페이지로 이뤄져 있습니다</h2>
        </div>
    );
}*/

function Book(props){
    return React.createElement("div",null,
        [
            React.createElement("h1",null,`이 책의 이름은 ${props.name}입니다.`),
            React.createElement("h2",null,`이 책의 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`)
        ]
    );
}

export default Book;