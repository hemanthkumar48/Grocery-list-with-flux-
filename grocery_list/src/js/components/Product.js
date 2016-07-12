var React = require('react');
var AppActions = require('../actions/AppActions');
var AddToCart = require('./AddToCart');

var Product = React.createClass({
  updateSelected: function(evt){
    AppActions.selectProduct(evt.target.value);
  },
  render: function(){
    var product = this.props.product;
    var selected = this.props.selected;
    var options = product.variants.map(function (variant, index) {
      return (
        <option key={index} value={index}>{variant.type}</option>
      )
    });
    return (
      <div className="col-sm-4 product">
        <div className="product-details">
          <h2>{product.name}</h2>
        <h4>Needed list</h4>
    <h3>Price: ${selected.price}</h3>
          <h4>Inventory: {selected.groceryItem}</h4>
          <select onChange={this.updateSelected}>
            {options}
          </select>
          <AddToCart selected={selected} product={product}/>
        </div>
      </div>
    );
  }
});

module.exports = Product ;