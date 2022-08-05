import React from "react";
//import "./TodaysPlan.css";

class TodaysPlan extends React.Component{
    render(){
        return (
            <div className="message-container">
                <h2>오늘은 놀자!! 놀 계획을 세우자!!</h2>
                <h4>(자세하게적자. 놀이를 한 페이지에 꽉 채워 보자.)</h4>
                1. 게임하기<br></br>
                2. 잠자기<br></br>
                3. 밥먹기<br></br>
                4. 휴대폰 보기<br></br>
                5. 영화 보기<br></br>
            </div>
        );
    }
}

export default TodaysPlan;