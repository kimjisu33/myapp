import React, { useState } from "react";
import useInputs from "./useInputs";


function Info(){
    const [state, onChange]=useInputs({name:'',nickname:''});
    const {name, nickname} =state;

    return (
        <div>
            <input onChange={onChange} value={name} name='name'/>
            <input onChange={onChange} value={nickname} name='nickname'/>
            <br/>
            <b>이름 : </b> {name} <br/>
            <b>닉네임 : </b> {nickname}
        </div>
    );
}

/*
function Info(){
    let [name, setName]=useState();
    let [nickname, setNickame]=useState();

    function inputName(e){
        setName(e.target.value);
    }
    function inputNickname(e){
        setNickame(e.target.value);
    }

    return (
        <div>
            <input onChange={inputName} value={name}/>
            <input onChange={inputNickname} value={nickname}/>
            <br/>
            <b>이름 : </b> {name} <br/>
            <b>닉네임 : </b> {nickname}
        </div>
    );

}
*/
export default Info;