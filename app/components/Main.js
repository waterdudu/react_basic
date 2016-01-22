// main.js

var React = require('react');
var ReactDOM = require('react-dom');
var FilteredList = require('./FilteredList')


var Main = React.createClass({
    getInitialState() {
        return {
            friends: ['John', 'Tom']
        }
    },
    render() {
        return (
            <div>
                <p>Hello world</p>
                My Friends: {this.state.friends}
                <FilteredList />
                <br />
            </div>
            )
    }
})

ReactDOM.render(
      <Main />,
      document.getElementById('app')
);
