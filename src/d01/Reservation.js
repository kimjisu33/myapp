import React from "react";

class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isGoing:true,
            numberOfGusests:2
        }
        this.handelInputChange=this.handelInputChange.bind(this);
    }

    handelInputChange(e){
        const target=e.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name =target.name;
        this.setState({
            [name]:value
        });

    }

    render(){
        return(
            <form>
                is going : 
                <input name="isGoing" type="checkbox" onChange={this.handelInputChange} checked={this.state.isGoing}/>
                <br></br>
                number of guests : 
                <input name="numberOfGusests" type="number" onChange={this.handelInputChange} checked={this.state.numberOfGusests}/>

            </form>
        );
    }
}

export default Reservation;