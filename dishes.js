const RESTAURANT = {
  name: 'Melt9 Gulgasht Multan',       // shown in the browser tab title
  phone: '03160843627',                // "Call waiter" button
  whatsapp: '923160843627'             // WhatsApp contact number
};

const DISHES = {
  
  'mcart': {                                                      
    name: 'McArt Pizza',
    price: '1800', description: 'Freshly baked McArt signature pizza', ingredients: 'Cheese, Crust, Pizza Sauce, Savory Pepperoni', allergens: 'Gluten, Dairy',    
    glb:    'dishes/mcart_small-v1.glb',                          
    glbIos: 'dishes/mcart_ios-v1.glb',                           
    mind:   'dishes/mcart-targets.mind',                        
    poster: 'dishes/mcart-poster.jpg',
    label:  'dishes/label-mcart.png',
    scale:  '3 3 3'   // bigger pizza inside the hologram (was default 2)
  },

  'Mr-Pizza': {                                                       
    name: 'MR-Pizza-Mayu',
    price: '1650', description: 'Creamy mayo garlic style signature crust', ingredients: 'Mayo Sauce, Grilled Chicken, Onions, Mozzarella', allergens: 'Gluten, Dairy',   
    glb:    'dishes/mr_pizza_small-v1.glb',                      
    glbIos: 'dishes/mr_pizza_ios-v1.glb',                       
    mind:   'dishes/mr-pizza-target.mind',                     
    poster: 'dishes/mr-pizza-poster.jpg',
    label:  'dishes/label-mr-pizza.png',
    scale:  '3 3 3'   // bigger pizza inside the hologram (was default 2)
  },

  'VegPizza': {                                                       
    name: 'MR-VegPizza',
    price: '1599', description: 'Fresh vegetables on a hand-stretched base', ingredients: 'Mushroom, capsicum, olives, onion, mozzarella', allergens: 'Gluten, Dairy',   
    glb:    'dishes/VegPizza_small-v1.glb',                      
    glbIos: 'dishes/VegPizza_ios-v1.glb',                       
    mind:   'dishes/VegPizza.mind',                     
    poster: 'dishes/VegPizzaimage.jpg',
    label:  'dishes/label-vegpizza.png',
    scale:  '1.5 1.5 1.5'   // VegPizza model is ~2x bigger than the other two, so 1.5 here = 3 for the others - same pizza size, bigger inside the hologram
  }

};
