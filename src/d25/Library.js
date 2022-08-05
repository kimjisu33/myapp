import React from "react";
import Book from "./book";

function Library(props){
    return (
        <div>
            <Book name="노인과 바다" numOfPage="200" />
            <Book name="채식주의자" numOfPage="258" />
            <Book name="수학" numOfPage="555" />
        </div>
    );
}

export default Library;