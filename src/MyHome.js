import React from 'react';
import {Link} from "react-router-dom";
import mindiii_logo from './mindiii-logo.png';

class MyHome extends React.Component {
	
  render() {
    return (
    	<div className="home_content">
			<img src={mindiii_logo} alt="mindiii-logo"/>
			<h1>Welcome to react learning</h1>
			<Link className="button" to="/myTable">Table Pagination Example</Link>
    	</div>
    	);
	}
}

export default MyHome;
