import React, {Component} from 'react';
import axios from 'axios';

export class App extends Component {
    componentDidMount = () => {
		  axios.get('/api').then((res) => {
			  console.log(res);
  		});
  }

    render = () => {
      return (
        <div className='container text-center'>
            <h1>Welcome</h1>
        </div>
      );
  }
}