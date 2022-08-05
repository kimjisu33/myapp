import React from "react";

function Clock(props){
    let date=new Date;
    return(
        <div>
            <h1>안녕, 지금!</h1>
            <h2>현재 시간은 { date.toLocaleTimeString() } 입니다.</h2>
        </div>
    );
}


export default Clock;


/*
setInterval(()=>{
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
},1000);

index.js
*/