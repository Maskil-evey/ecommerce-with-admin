import { ShoppingItem } from './shopping-list-objects';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {  
  hardCodedItems:ShoppingItem[]=[{
    homeView: true,
    category: 'Vegetables',
    photo: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    name: 'Spinach',
    price: 1.85,
    quantity: 0, 
    expiryDate: '2023-05-15'

  },
{
    homeView: true,
    category: 'Dairy',
    photo: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Almond Milk',
    price: 3.95,
    hasDiscount:'true',
    disount:10 ,
    quantity: 0,
    expiryDate: '2023-07-15'
},
{
    homeView: true,
    category: 'Meat',
    photo: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    name: 'Beef',
    price: 5.55,
    quantity: 0,
    expiryDate: '2023-08-15'
},{
    homeView:true,
    category: 'Spices',
    photo: 'https://images.unsplash.com/photo-1490026220125-b42f3d66abd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Curry Powder',
    price: 0.75,
    quantity: 0,
    expiryDate: '2023-06-15'
},
{
  category: 'Vegetables',
  photo: 'https://images.unsplash.com/photo-1623534656125-dfe29b92c3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
  name: 'Broccli',
  price: 1.40,
  quantity: 0,
  expiryDate: '2023-04-15'
},
{
  category:'Vegetables',
  name: 'Carrots',
  photo: 'https://images.unsplash.com/photo-1633380110125-f6e685676160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  price: 1.10,
  quantity: 0,
  expiryDate: '2023-10-15'
},{
  category:'Vegetables',
  name: 'Tomatoes',
  photo: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  price: 1.20,
  quantity: 0,
  expiryDate: '2023-09-15'
},{
  category:'Vegetables',
  name: 'Cabbage',
  photo: 'https://images.unsplash.com/photo-1603049404411-13c2ca81a316?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80',
  price: 2.45,
  hasDiscount:'true',
  disount: 15,
  quantity: 0,
  expiryDate: '2023-03-15'
},{
  category:'Vegetables',
  name: 'Lettuce',
  photo: 'https://images.unsplash.com/photo-1582726458086-30eef5a7ef89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  price: 2.55,
  quantity: 0,
  expiryDate: '2023-06-05'
},{
  category:'Vegetables',
  name: 'Cucumber',
  photo: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  price: 1.95,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Fruits',
  name: 'Apples',
  photo: 'https://images.unsplash.com/photo-1610397962076-02407a169a5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  price: 1.55,
  quantity: 0,
  expiryDate: '2023-07-07'
},{
  category:'Fruits',
  name: 'Oranges',
  photo: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  price: 1.15,
  quantity: 0,
  expiryDate: '2023-05-27'
},{
  category:'Fruits',
  name: 'Bananas',
  photo: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  price: 1.25,
  hasDiscount:'true',
  disount:4,
  quantity: 0,
  expiryDate: '2023-08-12'
},{
  category:'Fruits',
  name: 'Grapes',
  photo: 'https://images.unsplash.com/photo-1552526881-5517a57b6d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  price: 1.15,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Fruits',
  name: 'Pineapple',
  photo: 'https://images.unsplash.com/photo-1550828484-55f0abc43e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
  price: 1.25,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Fruits',
  name: 'Strawberries',
  photo: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  price: 1.85,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Fruits',
  name: 'Blueberries',
  photo: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
  price: 2.25,
  quantity: 0,
  expiryDate: '2023-09-15'
},{
  category:'Fruits',
  name: 'Raspberries',
  photo: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  price: 2.95,
  hasDiscount:'true',
  disount: 10,
  quantity: 0,
  expiryDate: '2023-11-15'

},{
  category:'Fruits',
  name: 'Blackberries',
  photo: 'https://images.unsplash.com/photo-1631270208584-15d5123700d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  price: 1.55,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Dairy',
  name: 'Soya Milk',
  photo: 'https://media.istockphoto.com/photos/soy-beans-on-a-wooden-table-with-a-glass-of-milk-on-the-side-picture-id465956984?k=20&m=465956984&s=612x612&w=0&h=WPRO-77EP8KwJhIBOK2fYa0MO0RZaRkkbA-OEV_KiyM=',
  price: 2.65,
  quantity: 0,
  expiryDate: '2023-07-25'
},{
  category:'Dairy',
  name: 'Hazelnut Milk',
  photo: 'https://media.istockphoto.com/photos/hazelnut-vegan-milk-picture-id513382882?k=20&m=513382882&s=612x612&w=0&h=59eMb8mjfeoUUqtEji4gwf5A7efpbsw3-zZf7-o_Ke0=',
  price: 2.95,
  quantity: 0,
  expiryDate: '2023-07-25'
},{
  category:'Dairy',
  name: 'Peanut Milk',
  photo: 'https://media.istockphoto.com/photos/fresh-peanut-milk-in-glass-and-pitcher-on-dark-wooden-table-rustic-picture-id1164868144?k=20&m=1164868144&s=612x612&w=0&h=Lb5FV0JL6z2dOEQJG26AhAVXQLDq4yeLGnyrX_UbeQY=',
  price: 2.35,
  hasDiscount:'true',
  disount: 5,
  quantity: 0,
  expiryDate: '2023-07-25'
},{
  category:'Dairy',
  name: 'Walnut Milk',
  photo: 'https://media.istockphoto.com/photos/milk-from-walnuts-and-nuts-on-a-white-wooden-background-products-picture-id1295017078?k=20&m=1295017078&s=612x612&w=0&h=LZNy0zuv4ZtZZsw2AT79CtjryNiXrYo8kodRydMB5uQ=',
  price: 2.75,
  quantity: 0,
  expiryDate: '2023-07-30'
},{
  category:'Dairy',
  name: 'Coconut Milk',
  photo: 'https://media.istockphoto.com/photos/coconut-milk-with-fresh-coconut-for-alternative-therapy-picture-id502055051?k=20&m=502055051&s=612x612&w=0&h=eRBeAyAPlWsVh72SSZkFuXlnP_ug_YySChsMjyQkBEE=',
  price: 2.45,
  quantity: 0,
  expiryDate: '2023-07-30'
},{
  category:'Dairy',
  name: 'Oat Milk',
  photo: 'https://media.istockphoto.com/photos/burlap-bag-with-oats-and-oat-milk-zero-waste-concept-picture-id1222357528?k=20&m=1222357528&s=612x612&w=0&h=8HmPeTERZ7XrH8F7N54jgeONlilxpdb9Ce8ZwByy-Lk=',
  price: 1.75,
  quantity: 0,
  expiryDate: '2023-06-30'
},{
  category:'Dairy',
  name: 'Cashew-nut Milk',
  photo: 'https://media.istockphoto.com/photos/heap-of-raw-cashews-and-a-glass-of-cashew-milk-on-wooden-surface-picture-id1028111686?k=20&m=1028111686&s=612x612&w=0&h=MdXlvYwmRtCDcBghT9FOn6hITxh69t4-4f9qtp4UtRA=',
  price: 3.00,
  hasDiscount:'true',
  disount: 2,
  quantity: 0,
  expiryDate: '2023-08-30'
},{
  category:'Spices',
  name: 'Cinnamon',
  photo: 'https://media.istockphoto.com/photos/cinnamon-sticks-and-powder-picture-id153827056?k=20&m=153827056&s=612x612&w=0&h=G77PJv3AkOBqBAWNZrgOzDT7wesizGn8ykADQf3BPv4=',
  price: 0.45,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Spices',
  name: 'Cumin',
  photo: 'https://media.istockphoto.com/photos/ground-cumin-in-white-ceramic-bowl-isolated-on-white-whole-cumin-picture-id935489296?k=20&m=935489296&s=612x612&w=0&h=EnwDke8DlrLGmgqvzwx9FWuCOgM7QgGjIN_P_zLwE7I=',
  price: 0.35,
  quantity: 0,
  expiryDate: '2023-06-15'
},{
  category:'Spices',
  name: 'Coriander',
  photo: 'https://media.istockphoto.com/photos/coriander-powder-aromatic-ingredients-on-rustic-wooden-table-picture-id508457072?k=20&m=508457072&s=612x612&w=0&h=QVEh0dSZbEqgwZUR7fPGV5oZCiZcxgLpUpbri0PJzuI=',
  price: 0.65,
  quantity: 0,
  expiryDate: '2023-05-25'
},{
  category:'Spices',
  name: 'Tumeric',
  photo: 'https://media.istockphoto.com/photos/turmeric-powder-and-roots-picture-id965503302?k=20&m=965503302&s=612x612&w=0&h=BJJYONoZ5Osta4N7kyAR3yC1AWohd4dz87y3_XVIDPQ=',
  price: 0.25,
  quantity: 0,
  expiryDate: '2023-07-25'
},{
  category:'Spices',
  name: 'Ginger',
  photo: 'https://media.istockphoto.com/photos/ginger-picture-id151529399?k=20&m=151529399&s=612x612&w=0&h=gfhYpZQ_czsg9F24SWmMX3yTyJZf-QUlDufNGGbPsCQ=',
  price: 0.35,
  quantity: 0,
  expiryDate: '2023-12-25'
},{
  category:'Spices',
  name: 'Garlic',
  photo: 'https://media.istockphoto.com/photos/garlic-cloves-and-bulb-for-food-cooking-in-the-kitchen-picture-id927387776?k=20&m=927387776&s=612x612&w=0&h=G0JgKTJ2WXunTVMry8zvZigyOJhTyyP4JVqwQR1aLkM=',
  price: 0.20,
  quantity: 0,
  expiryDate: '2023-12-25'
},{
  category:'Spices',
  name: 'Nutmeg',
  photo: 'https://media.istockphoto.com/photos/ground-nutmeg-picture-id453102603?k=20&m=453102603&s=612x612&w=0&h=Y_T2Wqmaa1cperks_Pf4KNwBHf8XVGbFFBQZkB_l-EE=',
  price: 0.25,
  quantity: 0,
  expiryDate: '2023-12-25'
},
{
  category:'Spices',
  name: 'Fennel Seeds',
  photo: 'https://media.istockphoto.com/photos/green-anise-closeup-picture-id908232134?k=20&m=908232134&s=612x612&w=0&h=4MTCdXEEEA0wjzGu0UdjFEU61NU6kL0iHgpBJEY7cb8=',
  price: 0.25,
  quantity: 0,
  expiryDate: '2023-12-15'
},{
  category:'Meat',
  name: 'Chicken',
  photo: 'https://media.istockphoto.com/photos/chicken-thighs-picture-id531469196?k=20&m=531469196&s=612x612&w=0&h=u44FZ4JO6yQqKg3nEy3OMiJzKLaC232EDRduIUdXFis=',
  price: 3.50,
  hasDiscount:'true',
  disount: 6,
  quantity: 0,
  expiryDate: '2023-12-15'
},{
  category:'Meat',
  name: 'Pork',
  photo: 'https://media.istockphoto.com/photos/roasted-shoulder-of-pork-picture-id1093950250?k=20&m=1093950250&s=612x612&w=0&h=b5oHEorS0Obevg0DxM2rmapvPnW_iCSZTaIAGt-K8GM=',
  price: 3.75,
  quantity: 0
},{
  category:'Meat',
  name: 'Turkey',
  photo: 'https://media.istockphoto.com/photos/thanksgiving-turkey-picture-id165719514?k=20&m=165719514&s=612x612&w=0&h=fPaQ6MfnGDwWNCd1AnLHAkcZwO6MSYt1gFzito8h2bA=',
  price: 3.95,
  quantity: 0,
  expiryDate: '2023-10-15'
},{
  category:'Meat',
  name: 'Lamb Chops',
  photo: 'https://media.istockphoto.com/photos/lamb-chops-picture-id116050744?k=20&m=116050744&s=612x612&w=0&h=O_h7iPZKMlwZjw5pH9fe7bjM4lL2MRLyVGy6MbsNJKU=',
  price: 4.90,
  quantity: 0,
  expiryDate: '2023-10-15'
},{
  category:'Meat',
  name: 'Venison',
  photo: 'https://media.istockphoto.com/photos/venison-picture-id182382102?k=20&m=182382102&s=612x612&w=0&h=UjJabU8ESS6eoOJIgpJqMmM89FKjEfPwmDkmv_8lxDI=',
  price: 4.30,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Duck',
  photo: 'https://media.istockphoto.com/photos/duck-breast-lavender-honey-and-rosemary-served-on-chopping-board-picture-id1137154837?k=20&m=1137154837&s=612x612&w=0&h=rQvJePUt1pF3MdBonoyq00EQt--940JUguVfPmUv8hs=',
  price: 3.70,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Bison',
  photo: 'https://media.istockphoto.com/photos/raw-t-bone-steak-on-wooden-board-prepared-to-grill-picture-id1270750725?k=20&m=1270750725&s=612x612&w=0&h=h4TqWJSt98qd6t0ZjmI__xPfMS9QhChcM1mahj1r5Kw=',
  price: 5.25,
  quantity: 0,
  hasDiscount: 'true',
  disount: 5,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Goose',
  photo: 'https://media.istockphoto.com/photos/raw-whole-duck-pink-pepper-and-rosemary-black-background-top-view-picture-id1282553598?k=20&m=1282553598&s=612x612&w=0&h=VzjYIkWbkoaTdTFl2g2qbLZ9Z__fAQS5k5Cz14glN70=',
  price: 4.60,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Wild Boar',
  photo: 'https://media.istockphoto.com/photos/raw-meat-for-the-festive-days-picture-id1080185620?k=20&m=1080185620&s=612x612&w=0&h=5h5qVNnUgxPUPxZuzORW_UcF_9aY-6N2BLbn4u1CGsU=',
  price: 4.85,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Wild Rabbit',
  photo: 'https://media.istockphoto.com/photos/raw-rabbit-and-ingredients-for-cooking-picture-id545439716?k=20&m=545439716&s=612x612&w=0&h=YS2GUzF0Fvbjr8PNJLnglMSwZHGc5Y5SK5i_7s11nK4=',
  price: 4.25,
  quantity: 0,
  expiryDate: '2023-08-15'
},{
  category:'Meat',
  name: 'Quail',
  photo: 'https://media.istockphoto.com/photos/three-fresh-raw-organic-quails-on-wooden-board-on-a-gray-background-picture-id1226654174?k=20&m=1226654174&s=612x612&w=0&h=TYdumoatgnZENLuWzg3b6sxRociF-e7NbcInEUyl4Uo=',
  price: 3.45,
  quantity: 0,
  expiryDate: '2023-05-15'
}];

  shoppingItems: ShoppingItem[] =  JSON.parse(localStorage.getItem('products')?? JSON.stringify(this.hardCodedItems));
// VegetablesItems: ShoppingItem[] = [{
//   photo: 'https://www.ikea.com/us/en/images/products/ingolf-chair__0712002_PE729202_S5.JPG?f=s',
//   name: 'Spinach',
//   price: 1.99,

// }];
allCategories: ShoppingItem[] = this.shoppingItems.filter(item => item.homeView === true);
vegetabaleItems: ShoppingItem[] = this.shoppingItems.filter(item => item.category === 'Vegetables');
fruitItems: ShoppingItem[] = this.shoppingItems.filter(item => item.category === 'Fruits');
dairyItems: ShoppingItem[] = this.shoppingItems.filter(item => item.category === 'Dairy');
meatItems: ShoppingItem[] = this.shoppingItems.filter(item => item.category === 'Meat');
spiceItems: ShoppingItem[] = this.shoppingItems.filter(item => item.category === 'Spices');

saveData(){
localStorage.setItem('products', JSON.stringify(this.shoppingItems));
}

  constructor() { }
  
}
