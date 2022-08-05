import React, {useState} from "react";

function Toolbar(){
    const [isClick, change]=useState(0);
    

    let Click = (e)=>{
        if(!isClick) change(true);
        else change(false);
    }

    return (
        <div>
            {isClick ? '즐거운 시간 되세요~!  ' : ''}
            <button onClick={Click}>{isClick ? '로그아웃' : '로그인'}</button>
            <hr/>
        </div>
    );
}

export default Toolbar;