// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0 ;
  let average = 0 ;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  average = sum / data.length;
  console.log("The average price is " + "$" + (average).toFixed(2) + ".");
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let items = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      items.push(data[i]);
    }
  }
  for (var i = 0; i < items.length; i++) {
    console.log(items[i].title);
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
      if (data[i].materials.includes("wood")) {
      console.log(data[i].title + " is made with wood.");
    }
  }
}



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  // let products = []
  for (let t = 0; t < data.length; t++) {
    let products = data[t];

    if (products.materials.length >= 8) {
      console.log(products.title + " has " + products.materials.length + "materials are as follows:");
      products.materials.forEach(function(materials) {
        console.log("- " + materials)
      });
    }
  }
}



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let numItems = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did" ) {
      numItems.push(data[i].who_made)
    }
  }
  console.log( numItems.length + " items were made by their sellers.");
}
