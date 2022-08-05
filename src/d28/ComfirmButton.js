import React, {useState} from "react";

const ConfirmButton = ()=>{
    const [check, setCheck] = useState(0);
    const isCheck = ()=> setCheck(true);
    return (
        <div>
            <h1>출석 체크 하세요!</h1>
            <button disabled={check} onClick={isCheck}>
                {check ? '확인됨': '출석체크'}
            </button>
        </div>
    );
};

export default ConfirmButton;