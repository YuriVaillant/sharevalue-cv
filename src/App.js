import React, { Component } from 'react';
import companyLogo from './sv-logo.svg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
		 <div id="sidebar" >
			<img src={companyLogo} className="Company-logo" alt="Sharevalue logo"
			<ul className="App-menu">
				<li><i class=""><span>Dashboard</span></li>
				<li><i class=""><span>Mijn CV</span></li>
				<li><i class=""><span>Team CV's</span></li>				
			</ul>
		</div>
		<div id="main">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<i class="fa fa-magnifier" ></i>
				<input type="text" placeholder="Zoek CV's"/>				
			</header>			
			<p className="App-intro">
			  <div className="Search-results" >
				<ul>{}</ul>
			  </div>
			  <Switch>
				  <Route exact path='/' component={Dashboard}/>
				  <Route path='/detail/:resumeId' component={ResumeDetail}/>
				  <Route path='/overview/' component={ResumeOverview}/>
				</Switch>
			</p>
		</div>
		<div id="modal" >
		</div>
      </div>
    );
  }
}

export default App;
