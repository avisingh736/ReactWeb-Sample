import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


class MyTable extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = {userData:[],page:[],userCollection:[]}; 
    this.callMe = this.callMe.bind(this); 
  }

  componentDidMount() {
    const mState = this.state;
    axios.get(`http://localhost:3001/user_collection`)
      .then(res => {
        const userCollection = res.data;
        this.setState({
          ...mState,
          userCollection
        }) 
        //console.log(res.data)
        this.callMe(1); 
      })
  }


  paginate (array, page_size, page_number) {
    --page_number; 
    return array.slice(page_number * page_size, (page_number + 1) * page_size); 
  }

  callMe(pageNumber){ 
    let pageNo = Math.ceil(this.state.userCollection.length/2);
    this.state.page = [];

    for (var i = 1; i<=pageNo; i++) {
        this.state.page.push(i);
    }

    this.state.userData = this.paginate(this.state.userCollection, 2, pageNumber);
    this.setState({userData:this.state.userData}); 
  }

  viewDetails(element) {
    localStorage.setItem("user_details",JSON.stringify(element));
    // Below code is not working 
    // this.props.history.push("/userDetails/"+element.id);
  }

  render() {
    return (
      <div className="container" id="user-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="user-data">
            {
              this.state.userData.map((element,key)=>{
                return (<tr key={key}>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.contact}</td>
                <td><Link to={"/userDetails/"+element.id} onClick={()=>this.viewDetails(element)}>View Details</Link></td>
                  </tr>);
               })
            }
          </tbody>
        </table>
        <div className="row">
                <div className="col-sm-6"> 
                    <ul className="pagination pull-right">
                        {this.state.page.map((data,key )=>( 
                        <li key={key} onClick={()=>this.callMe(data)}><a href="#">{data}</a></li> 
                        ))}
                    </ul> 
                </div> 
        </div> 
      </div>
    );
  }
}

export default MyTable;