import React, {useState} from "react";
import ComfirmButton from "./ComfirmButton";


const EventPractice = ()=>{
    const [inputs, setInputs] = useState({ name:'', tel:''});
    const {name, tel}=inputs;
    
    const InputData = () =>{
        if(name===''){
            alert('이름을 입력하세요');
            return;
        }
        if(tel===''){
            alert('전화번호를 입력하세요');
            return;
        }
        alert(name+" : "+tel);
        setInputs({
            name:'',
            tel:''
        });
    };
    const ChangeData = (e) =>{
        const newInputs={
            ...inputs,
            [e.target.name]:e.target.value
        };
        setInputs(newInputs);
    };

    const onKeyPress=(e)=>{
        if(e.key==='Enter'){
            InputData();
        }
    };

    const html=(<div><ComfirmButton />   <ComfirmButton />   </div>)
    return (
        <div>
            <h1>이름과 연락처를 적어주세요!</h1>
            <input placeholder="이름" type="text" onChange={ChangeData} value={name} name="name" />
            <input placeholder="전화번호" type="tel" onChange={ChangeData} value={tel} name="tel" onKeyPress={onKeyPress}/>
            <button onClick={InputData}>
                확인
            </button>
            {html}
            <ComfirmButton />   
        </div>
    );
};

export default EventPractice;