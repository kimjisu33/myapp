import React, { useState } from "react";

function CreatePost(props) {
    const [data,setData]=useState(props.data);
    const {title, date, imgUrl,grade,where, review}=data;

    function submit() {
        if(!(title&&date&&imgUrl&&grade&&review)){
            alert('모든 내용을 입력하세요!');
            return;
        }

        let newMovie={
            "id": props.data.length,
            "title": title,
            "date": date,
            "imgUrl": imgUrl,
            "grade": grade,
            "where":where,
            "review": review
        }
        props.data.push(newMovie);
        console.log(props.data);
        window.history.back();
        //alert('데이터 입력 성공!\n'+newMovie.title+newMovie.date+newMovie.imgUrl+newMovie.grade+newMovie.review);
    }

    function onChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }

    return (
        <div style={{
            textAlign: 'center',
            width: '800',
        }}>
            <h2>관람평 작성</h2>
            <hr />
            <input type='text' placeholder="영화 제목" onChange={onChange} name='title' value={data.title} style={{
                width:700,
                height:40,
                fontSize:20,
                marginBottom:10,
                marginTop:10,
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/><br />
            <input type='date' placeholder="날짜"  onChange={onChange} name='date' value={data.date} style={{
                width:490,
                height:31,
                fontSize:17,
                marginBottom:10,
                marginRight:10,
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/>
            <input type='number' placeholder="평점(10점 만점)"  onChange={onChange} name='grade' value={data.grade} max='10' min='0' style={{
                width:195,
                height:30,
                fontSize:17,
                marginBottom:10,
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/><br />
            <input type='text' placeholder="관람 장소"  onChange={onChange} name='where' value={data.where} style={{
                width:700,
                height:30,
                fontSize:17,
                marginBottom:10,
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/><br />
            <input type='url' placeholder="이미지 주소"  onChange={onChange} name='imgUrl' value={data.imgUrl} style={{
                width:700,
                height:30,
                fontSize:17,
                marginBottom:10,
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/><br />
            
            <textarea placeholder="관람평"  onChange={onChange} name='review' value={data.review} style={{
                width:700,
                height:500,
                fontSize:17,
                resize:'none',
                backgroundColor:"ghostwhite",
                borderRadius:5,
            }}/><br />
            <button onClick={submit} style={{
                    height: 50,
                    marginTop:10,
                    border:'none',
                    fontSize:20,
                    paddingLeft:20,
                    paddingRight:20,
                    borderRadius:10,
                    boxShadow:'0px 0px 3px gray',
                    backgroundColor:'olivedrab'
                }}><b>제출</b></button>
        </div>
    );
}

export default CreatePost;

/*<input type='text' placeholder="장소"  onChange={onChange} name='where' value={data.where}/><br /> */