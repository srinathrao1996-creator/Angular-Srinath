import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    products: any[] = [
    { productname: 'Pen', price: 50, rating: 3, freedelivery: 'true' }, 
    { productname: 'Phone', price: 15000, rating: 4, freedelivery: 'false' }, 
    { productname: 'Shirt', price: 2000, rating: 5, freedelivery: 'false' }, 
    { productname: 'Cap', price: 50000, rating: 4, freedelivery: 'true' }, 
    { productname: 'Mobile Case', price: 6800, rating: 5, freedelivery: 'true' }, 
    { productname: 'Remote', price: 1500, rating: 3, freedelivery: 'false' }, 
    { productname: 'Car', price: 15000, rating: 2, freedelivery: 'true' }, 
    { productname: 'Bike', price: 25000, rating: 2, freedelivery: 'false' }, 
    { productname: 'Plane', price:89000, rating: 3, freedelivery: 'false' }, 
   
  ];

// ( We using splice and index method to display S No row in webpage )

delete(index:number){
this.products.splice(index,1);
}

// ( We using filter and includes method to display true and false in onlyfreedelivery )

onlyfreedelivery:string='';

onlyfreedeliveryfilter(){
  // console.log(this.onlyfreedelivery);
  this.products=this.products.filter((product:any)=>product.freedelivery.includes(this.onlyfreedelivery));
}



// ( We using filter process using sort method )

sortascending(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
}

sortdescending(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}
ratingascending(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
ratingdescending(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
}

// ( Add 50% discount price - We using map method  )

discountchanges(){
  this.products=this.products.map((product:any)=>{
    product.price=(product.price/2);
    return product;
  })
}


// ( Add 25 Rs Price with delivery changes - We using map method  )

deliverychanges(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price+25;
    return product;
  })
}

totalpricecost:number=0;
totalprice(){
  var totalpricecost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(totalpricecost);
}

// ( for add record in webpage by using unshift method )

productName:String='';
productPrice:number=0;
productRating:number=0;
isFreeDelivery:boolean=true;

addtocart(){
   console.log(this.productName,this.productPrice,this.productRating,this.isFreeDelivery)
  var productdetails={
    productname:this.productName,
    price:this.productPrice,
    rating:this.productRating,
    freedelivery:this.isFreeDelivery
  }
  this.products.unshift(productdetails);
}
}

