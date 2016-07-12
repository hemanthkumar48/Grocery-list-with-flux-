module.exports = {
  init: function(){
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
        {
          id: '5',
          name: 'Grocery App',
          variants: [
            {
              sku: '178',
              type: 'veggies',
              price: 20,
              groceryItem:1
            },
            {
              sku: '677',
              type: 'milk',
              price: 30,
              groceryItem: 2
            },
            {
              sku: '899',
              type: 'bevarges',
              price: 49,
              groceryItem: 3
            },
            {
              sku: '99',
              type: 'bakery',
              price: 66,
              groceryItem: 4
            },
            {
              sku: '675',
              type: 'meat',
              price: 56,
              groceryItem: 5
            },
            {
              sku: '777',
              type: 'eatables',
              price: 67,
              groceryItem: 6
            },
          ]
        }
      ]));
  }
}