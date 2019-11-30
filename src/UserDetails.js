import React from 'react';
import {useParams} from "react-router-dom";

/*class UserDetails extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {id: props.match.params.id}; 
    }

  userCollection = [
    {"id":1,"name":"Avinash Kumar","email":"avinash@gmail.com","contact":"0123465678"},
    {"id":2,"name":"Sonu Kumar","email":"sonu@gmail.com","contact":"7894561230"},
    {"id":3,"name":"Twinkle Kumar","email":"twinkle@gmail.com","contact":"2513254896"},
    {"id":4,"name":"Shubham Verma","email":"shubham@gmail.com","contact":"1002354698"},
    {"id":5,"name":"Ashish HRK","email":"ashish@gmail.com","contact":"1235698543"},
    {"id":6,"name":"Yashank Rathore","email":"yashank@gmail.com","contact":"7895642512"},
    {"id":7,"name":"Deepak Sharma","email":"deepak@gmail.com","contact":"2546158963"},
    {"id":8,"name":"Vishal Kaushal","email":"vishal@gmail.com","contact":"5894568252"},
    {"id":9,"name":"Santosh Rana","email":"santosh@gmail.com","contact":"4585696325"},
    {"id":10,"name":"Avinash Kumar","email":"avinash@gmail.com","contact":"0123465678"},
    {"id":11,"name":"Sonu Kumar","email":"sonu@gmail.com","contact":"7894561230"},
    {"id":12,"name":"Twinkle Kumar","email":"twinkle@gmail.com","contact":"2513254896"},
    {"id":13,"name":"Shubham Verma","email":"shubham@gmail.com","contact":"1002354698"},
    {"id":14,"name":"Ashish HRK","email":"ashish@gmail.com","contact":"1235698543"},
    {"id":15,"name":"Yashank Rathore","email":"yashank@gmail.com","contact":"7895642512"},
    {"id":16,"name":"Deepak Sharma","email":"deepak@gmail.com","contact":"2546158963"},
    {"id":17,"name":"Vishal Kaushal","email":"vishal@gmail.com","contact":"5894568252"},
    {"id":18,"name":"Santosh Rana","email":"santosh@gmail.com","contact":"4585696325"},
  ];
  
    //var userData = this.userCollection.filter(element => element.id === id)

  render() {

  return (
    <div>
        <h3>ID : {this.state.id}</h3>
    </div>
  );
  }
}*/

function UserDetails() {


  let userCollection = [
    {"id":1,"name":"Avinash Kumar","email":"avinash@gmail.com","contact":"0123465678"},
    {"id":2,"name":"Sonu Kumar","email":"sonu@gmail.com","contact":"7894561230"},
    {"id":3,"name":"Twinkle Kumar","email":"twinkle@gmail.com","contact":"2513254896"},
    {"id":4,"name":"Shubham Verma","email":"shubham@gmail.com","contact":"1002354698"},
    {"id":5,"name":"Ashish HRK","email":"ashish@gmail.com","contact":"1235698543"},
    {"id":6,"name":"Yashank Rathore","email":"yashank@gmail.com","contact":"7895642512"},
    {"id":7,"name":"Deepak Sharma","email":"deepak@gmail.com","contact":"2546158963"},
    {"id":8,"name":"Vishal Kaushal","email":"vishal@gmail.com","contact":"5894568252"},
    {"id":9,"name":"Santosh Rana","email":"santosh@gmail.com","contact":"4585696325"},
    {"id":10,"name":"Avinash Kumar","email":"avinash@gmail.com","contact":"0123465678"},
    {"id":11,"name":"Sonu Kumar","email":"sonu@gmail.com","contact":"7894561230"},
    {"id":12,"name":"Twinkle Kumar","email":"twinkle@gmail.com","contact":"2513254896"},
    {"id":13,"name":"Shubham Verma","email":"shubham@gmail.com","contact":"1002354698"},
    {"id":14,"name":"Ashish HRK","email":"ashish@gmail.com","contact":"1235698543"},
    {"id":15,"name":"Yashank Rathore","email":"yashank@gmail.com","contact":"7895642512"},
    {"id":16,"name":"Deepak Sharma","email":"deepak@gmail.com","contact":"2546158963"},
    {"id":17,"name":"Vishal Kaushal","email":"vishal@gmail.com","contact":"5894568252"},
    {"id":18,"name":"Santosh Rana","email":"santosh@gmail.com","contact":"4585696325"},
  ];
  
  let {id} = useParams();
  var userData = userCollection.filter(function (user) { return user.id == id })

  return (
    <div>
        <h3>ID : {userData[0].name}</h3>
    </div>
  )
}

export default UserDetails;