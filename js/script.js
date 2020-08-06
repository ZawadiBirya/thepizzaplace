//Land on the Homepage
//Select Pizza size
//Select Crust
//Select Toppings
//Deliver or collect
//If it's collect get total
//If it's deliver, get total + delivery cost
alert("Welcome to the Pizza Place, please place your order!")


//use JS libraries to store the data in my variables.
let size =
   {
  small: 100 ksh,
  medium : 150 ksh,
  large: 200 ksh,
}

let toppings = {
    chicken: 100,
    beef: 150,
    mushrooms: 200,
}

let crust =  {
    crispy: 100,
    stuffed: 150,
    glutenfree: 200,
  }

let delivery = {

}

function pizzaOrder(){
  if ((size.small) && (toppings.chicken) && (crust.crispy)){
  getElementById("total").innerHTML = "Your order is" + size.small + toppings.chicken + crust.crispy";
};

else if ((size.small) && (toppings.beef) && (crust.stuffed)){
getElementById("total").innerHTML = "Your order is" + size.small + toppings.beef + crust.crispy";
};

else if ((size.small) && (toppings.mushrooms) && (crust.glutenfree)){
getElementById("total").innerHTML = "Your order is" + size.small + toppings.mushroom + crust.crispy";
};

if ((size.medium) && (toppings.chicken) && (crust.crispy)){
getElementById("total").innerHTML = "Your order is" + size.medium + toppings.chicken + crust.crispy";
};

else if ((size.medium) && (toppings.beef) && (crust.stuffed)){
getElementById("total").innerHTML = "Your order is" + size.medium + toppings.beef + crust.crispy";
};

else if ((size.medium) && (toppings.mushrooms) && (crust.glutenfree)){
getElementById("total").innerHTML = "Your order is" + size.medium + toppings.mushroom + crust.crispy";
};

if ((size.large) && (toppings.chicken) && (crust.crispy)){
getElementById("total").innerHTML = "Your order is" + size.large + toppings.chicken + crust.crispy";
};

else if ((size.large) && (toppings.beef) && (crust.stuffed)){
getElementById("total").innerHTML = "Your order is" + size.large + toppings.beef + crust.crispy";
};

else if ((size.large) && (toppings.mushrooms) && (crust.glutenfree)){
getElementById("total").innerHTML = "Your order is" + size.large + toppings.mushroom + crust.crispy";
};
function pizzaOrder();
