import React, { useCallback, useMemo, useRef, useState } from "react";

function getAverage(numbers){
    console.log('평균값 계산중...');
    if(numbers.length===0) return 0;
    const sum=numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
}

function Average(){
    const [list, setList]=useState([]);
    const [number, setNumber]=useState(0);
    const inputEI=useRef(null);

    const onChange=useCallback((e)=>{
        setNumber(e.target.value);
    },[]);

    const onInsert=useCallback(()=>{
        const nextList=list.concat(parseInt(number));
        setList(nextList);
        setNumber(0);
    },[number,list]);

    const avg=useMemo(()=>getAverage(list,[list]));

    return (
        <div>
            <input onChange={onChange} value={number}/>
            <button onClick={onInsert}>입력</button>
            <br/>
            <ul>
                {list.map(i=><li>{i}</li>)}
            </ul>
            평균값 : {avg}
        </div>
    );
}

export default Average;