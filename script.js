function changePic(x,y){
    document.getElementById("pic").src = x;
    switch(y){
        case 1:
            document.getElementById("pro-img").classList.add('product-image-1');
            document.getElementById("pro-img").classList.remove('product-image-2');
            document.getElementById("pro-img").classList.remove('product-image-3');
            document.getElementById("pro-img").classList.remove('product-image-4');
            document.getElementById("pic1").classList.add('active');
            document.getElementById("pic2").classList.remove('active');
            document.getElementById("pic3").classList.remove('active');
            document.getElementById("pic4").classList.remove('active');
            break;
        case 2:
            document.getElementById("pro-img").classList.add('product-image-2');
            document.getElementById("pro-img").classList.remove('product-image-1');
            document.getElementById("pro-img").classList.remove('product-image-3');
            document.getElementById("pro-img").classList.remove('product-image-4');
            document.getElementById("pic2").classList.add('active');
            document.getElementById("pic1").classList.remove('active');
            document.getElementById("pic3").classList.remove('active');
            document.getElementById("pic4").classList.remove('active');
            break;
        case 3:
            document.getElementById("pro-img").classList.add('product-image-3');
            document.getElementById("pro-img").classList.remove('product-image-1');
            document.getElementById("pro-img").classList.remove('product-image-2');
            document.getElementById("pro-img").classList.remove('product-image-4');
            document.getElementById("pic3").classList.add('active');
            document.getElementById("pic1").classList.remove('active');
            document.getElementById("pic2").classList.remove('active');
            document.getElementById("pic4").classList.remove('active');
            break;
        case 4:
            document.getElementById("pro-img").classList.add('product-image-4');
            document.getElementById("pro-img").classList.remove('product-image-1');
            document.getElementById("pro-img").classList.remove('product-image-2');
            document.getElementById("pro-img").classList.remove('product-image-3');
            document.getElementById("pic4").classList.add('active');
            document.getElementById("pic1").classList.remove('active');
            document.getElementById("pic2").classList.remove('active');
            document.getElementById("pic3").classList.remove('active');
            break;
    }
    
    
}

function changePrice(){
    document.getElementById("price").innerHTML = document.getElementById("pr").value
}

function whatsapp(){
    let price = document.getElementById("pr").value;
    let variantName = ""
    if(price=="₹2599"){
        variantName = "WithBox"
    }
    else{
        variantName = "OpenBox"
    }
    var link = `https://api.whatsapp.com/send?phone=917738600388&text=%F0%9F%93%B8*Snapvue%20official%20website*%0ALooking%20for%20instax%20mini%208%2F9%0AVariant%20%3A%20%5B${variantName}%5D`
    window.open(link);
}

function share(){
    sharelink = window.location.href;
    window.open(`whatsapp://send?text=${sharelink}`)
}