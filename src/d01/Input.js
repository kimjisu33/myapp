import React from "react";
import { useState } from "react";

function Input(){
    const [selectValue, setSelectValue] = useState('여자');
    const [name, setName]=useState();

    function clickSubmit(e){
        alert(name+" : "+selectValue);
        //e.preventDefault();
    }

    function selectChange(e){
        setSelectValue(e.target.value);
    }

    function nameChange(e){
        setName(e.target.value);
    }

    return (
    <div>
        <form onSubmit={clickSubmit}>
            이름 : <input type="text"value={name} onChange={nameChange}/><br/>
            성별 : <select value={selectValue} onChange={selectChange}>
                <option value='여자'>여자</option>
                <option value='남자'>남자</option>
            </select>
            <input type="submit"/>
        </form>
        
    </div>
    );
}

export default Input;