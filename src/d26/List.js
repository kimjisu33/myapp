import React from "react";

const List=({name, children})=>{
    return (
        <div style={{
            backgroundColor:"orange",
            padding:10,
            margin:10,
            border: "1px solid black",
            borderRadius:10
        }}>
            <div style={{
                display:"inline-block",
                verticalAlign:"top"
            }}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" style={{
                    width:80,
                    height:80,
                    borderRadius:50
                }} alt=""/>
            </div>
            
            <div style={{
                display:"inline-block",
                marginLeft:30,
            }}>
                <b>{name}</b> <br/>
                {children}
            </div>
        </div>
    );
};

/*
root.render(
  <React.StrictMode>
    <List name="김지수">내용입니다</List>
    <List name="임꺽정">내용입니다</List>
    <List name="이순신">내용입니다~~~~~~~~~~~~~~~~~~~~~~~````````</List>
    <List name="유관순">내용입니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11</List>
  </React.StrictMode>
);
*/

export default List;