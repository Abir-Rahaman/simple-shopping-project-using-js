function phoneCase (input,price,dollar,phoneAdd){
    let phoneInput = document.getElementById(input);
    let phoneInputValue = parseInt(phoneInput.value);
    
    
    if(phoneAdd==true){
        phoneInputValue = phoneInputValue+1 ;
    }
    else if(phoneInputValue>0){
        phoneInputValue = phoneInputValue-1;
    }

    phoneInput.value=phoneInputValue;

    let phonePrice = document.getElementById(price);
    phonePrice.innerText = parseInt(phoneInputValue*dollar) ;


    let casePrice = document.getElementById(price);
    casePrice.innerText =parseInt(phoneInputValue*dollar) ;
 

    GetTotal();
   
}

function getTotal(product){
    let totalInput = document.getElementById(product);
    let totalValue = totalInput.value;
    return totalValue;

}

function GetTotal(){
   
    let iphone = getTotal('phone-input-area')*1219;
    let iphoneCase = getTotal('case-input-area')*59;
    let  subTotal = document.getElementById('sub-total');
    let finalValue = iphone+iphoneCase;
    subTotal.innerText = finalValue;

    let tax = document.getElementById('total-tax');
    let taxValue =  finalValue/10; 
    tax.innerText = taxValue;

    let Total = document.getElementById('total-price');
    let TotalPrice = finalValue+taxValue;
    Total.innerText = TotalPrice;


}

document.getElementById('phone-plus-btn').addEventListener('click',function(){   
    phoneCase('phone-input-area','phone-price',1219,true); 
   

}) 

document.getElementById('phone-minus-btn').addEventListener('click',function(){      
    phoneCase('phone-input-area','phone-price',1219,false);
  

})

document.getElementById('case-plus-btn').addEventListener('click',function(){
    phoneCase('case-input-area','case-price',59,true);  
    

})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    phoneCase('case-input-area','case-price',59,false);

})


document.getElementById('check-out').addEventListener('click',function(){
    window.location.href ='shop.html';
})
