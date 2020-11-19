import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
class Register_Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        config : {headers: {'Access-Control-Allow-Origin': '*'}},
        response:{},
        FName:"", 
        MName:"", 
        LName:"",
        Birth_Date:"",
        Mobile:"",
        Email:"",
        Governate:"",
        City:"",
        Street:"",
        Flat_Number: 0 ,
        Building_Num: 0 ,
        };
      }
    Submit = event => {
        event.preventDefault();
      };
     
      HandleAdd = () => {
        axios
        .post("https://localhost:44372/api/user", {
         FName: this.state.FName,
         MName: this.state.MName,
         LName: this.state.LName,
         Birth_Date: this.state.Birth_Date,
         Mobile: this.state.Mobile,
         Email: this.state.Email,
         Governate: this.state.Governate,
         City: this.state.City,
         Street: this.state.Street,
         Flat_Number: this.state.Flat_Number,
         Building_Num: this.state.Building_Num,
         
        },this.state.config)

        .then()
        .catch(error => {
            console.log(error)
          this.setState({ response: error.response.data.Message });
        })

      }

      SetFName = event => {
        this.setState({ FName: event.target.value });
      };
      SetMName = event => {
        this.setState({ MName: event.target.value });
      };
      SetLName = event => {
        this.setState({ LName: event.target.value });
      };
      SetBirth_Date = event => {
        this.setState({ Birth_Date: event.target.value });
      };
      SetMobile = event => {
        this.setState({ Mobile: event.target.value });
      };
      SetEmail = event => {
        this.setState({ Email: event.target.value });
      };
      SetGovernate = event => {
        this.setState({ Governate: event.target.value });
      };
      SetCity = event => {
        this.setState({ City: event.target.value });
      };
      SetStreet = event => {
        this.setState({ Street: event.target.value });
      };
      SetFlat_Number = event => {
        this.setState({ Flat_Number: event.target.value });
      };
      SetBuilding_Num = event => {
        this.setState({ Building_Num: event.target.value });
      };

    render() { 
        return ( 
            <div>          
                  <header className="container-fluid text-center bg-primary mb-1">
        <h1>  Registration Form  </h1>
        <p> Please Fill this Form </p>
    </header> 



     <form onSubmit={this.Submit} class="container">
        <div className="row">
            <div className="col">
                <label> First Name </label>
                <input type="text"  className="form-control" onChange={this.SetFName} placeholder="Enter Your First Name" maxLength="20"/>
             </div>
             <div className="col">
            <label> Middle Name </label>
            <input type="text"  className="form-control" onChange={this.SetMName} placeholder="Enter Your Middle Name" maxLength="20"/>
             </div>
             <div class="col">
            <label> Last Name </label>
            <input type="text"  className="form-control" onChange={this.SetLName} placeholder="Enter Your Last Name" maxLength="20"/>
             </div>
        </div>
        <div class="form-group mt-2">
            <label> Birth Date </label>
            <input type="date" onChange={this.SetBirth_Date} className="form-control"/>   
        </div>
        <div className="row">
            <div className="col-md-6">
                <label> Email </label>
                <input type="email" class="form-control ml-2" onChange={this.SetEmail} placeholder="ahmed@gmail.com"/>
            </div>
            <div class="col-md-6">
                <label> Mobile </label>
                <input type="tel" className="form-control ml-2" onChange={this.SetMobile} placeholder=" +021006158123" maxLength="13"/>
            </div>
        </div>
    <hr/>

     <legend> Address </legend>
    <div class="row">
        <div class="col-md-6">
            <label> Governate </label>
            <input type="text" class="form-control ml-2" onChange={this.SetGovernate} placeholder="Cairo Governorate"/>
        </div>
        <div class="col-md-6">
            <label> City </label>
            <input type="tel" className="form-control ml-2" onChange={this.SetCity} placeholder=""/>
        </div>
    </div>

    <div class="form-group mt-2">
        <label> Street </label>
        <input type="text" className="form-control" onChange={this.SetStreet} maxLength="200"/>   
    </div>

    <div class="row">
        <div class="col-md-6">
            <label> Building number </label>
            <input type="text" className="form-control ml-2" onChange={this.SetFlat_Number} placeholder="10"/>
        </div>
        <div class="col-md-6">
            <label> Flat number </label>
            <input type="text" className="form-control ml-2" onChange={this.SetBuilding_Num} placeholder="12"/>
        </div>
    </div>
    <button type="submit" onClick={this.HandleAdd} class="btn btn-primary text-right"> Submit </button>
    <div >{JSON.stringify(this.state.response)}</div>
    </form>
 



<footer>
    <div className="container-fluid text-center bg-primary py-3 px-3 mt-5">
        &copy; A.OsamaEldalil@gmail.com
    </div>
</footer> </div> 

    ); 


    }
}
 
export default Register_Form;