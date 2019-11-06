import React, {Component} from 'react'
import Cardlist from "../components/Cardlist";
import Sb from '../components/Search'
import Scroll from '../components/Scroll'
import './app.css'


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	
	onSearchChange =(event)=> {
			this.setState({searchfield: event.target.value});
		};
		componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {return response.json()})
		.then(users => this.setState({robots: users})
		)
	}

	

	render()
		{
			const { robots, searchfield } = this.state;
			const filteredbots =robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			})
			if (!robots.length){
				return <h1>Leading</h1>
			}else {

			return (
			<div  className="tc">
				<h1>Robofriends</h1>
				<Sb searchChange={this.onSearchChange}/>
				<Scroll>
					<Cardlist robots={filteredbots}/>
				</Scroll>		
			</div>
		)
		}
	}
} 
export default App;