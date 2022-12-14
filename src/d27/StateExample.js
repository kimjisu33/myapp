import React from "react";

class StateExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            formData:'no data'
        };
        
        this.handleData=this.handleData.bind(this);
        setTimeout(this.handleData, 4000);
    }

    handleData(){
        const data='new data';
        const {formData}=this.state;
        this.setState({
            loading:false,
            formData:data+formData
        });
        console.log('loading값',this.state.loading);
    }
    render(){
        return (
            <div>
                <h1>아래에 로딩 결과를 나타내는 화면입니다.</h1>
                <span>로딩중 : {String(this.state.loading)}</span><br></br>
                <span>결과 : {String(this.state.formData)}</span>
            </div>
        );
    }
}

export default StateExample;