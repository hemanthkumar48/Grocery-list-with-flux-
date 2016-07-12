var React = require('react');
var AppActions = require('../actions/AppActions');

var RemoveFromCart = React.createClass({
  handleClick: function(){
    AppActions.removeItem(this.props.index);
  },
  render: function(){
    return (
      <button class="closeBtn" onClick={this.handleClick}>X</button>
    );
  }
});

module.exports = RemoveFromCart ;