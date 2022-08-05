import React from "react";
import {Link} from 'react-router-dom';

function Head(props) {
    return (
        <div style={{
            height: 90,
            width:'100%',
            boxShadow:'0px -3px 8px gray',
            backgroundColor:'white',
            position:'fixed',
            display:"flex"
        }}>
            <img src='https://cdn-icons-png.flaticon.com/512/807/807836.png' alt="logo" style={{
                height: '80%',
                marginLeft: 50,
                marginTop:10
            }} />
            <SearchBox />
            <Link to='/createpost'>
                <button onClick='' style={{
                    height: 50,
                    marginLeft: 1000,
                    marginTop:20,
                    border:'none',
                    backgroundColor:'',
                    fontSize:20,
                    paddingLeft:20,
                    paddingRight:20,
                    borderRadius:10
                }}><b>작성</b></button>
            </Link>
        </div>
    );
}

function SearchBox(){
    
    return (
        <div style={{
            boxShadow:'0px 0px 3px gray',
            backgroundColor:"ghostwhite",
            opacity:'70%',
            borderRadius:50,
            height:50,
            width: 500,
            marginTop:20,
            marginLeft:200,
            display:"flex"
        }}>
            <input style={{
                border:'none',
                background:'none',
                height:'100%',
                width:'75%',
                marginLeft:50,
                outline:'none',
                fontSize:15,
                color:'grey'
            }}/>
            <button style={{
                background:'none',
                border:'none'
            }}><img src="https://cdn.icon-icons.com/icons2/2406/PNG/512/search_magnifier_icon_145939.png" alt="" style={{
                width:30,
                opacity:'50%',
                marginLeft:10
            }}/></button>
        </div>
    );
}

export default Head;