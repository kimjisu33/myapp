import React from "react";

function Card(props){
    const {title, backgroundColor, children}=props;

    return (
        <div style={{
            margin:8,
            padding:8,
            borderRadius:8,
            boxShadow:'0px 0px 4px grey',
            backgroundColor:backgroundColor||"white",
            width:450,
            height:250,
        }}>
            <div style={{
                paddingLeft:30,
                paddingRight:30
            }}>
                {title&&<h1>{title}</h1>}
                <hr/>
                {children}
            </div>
        </div>
    );
}

export default Card;