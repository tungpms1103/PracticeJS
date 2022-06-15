const bannerElement = document.querySelector('.box .header .banner img');
console.log(bannerElement)
var images =["./Asset/image/banner.jpg","./Asset/image/banner-1.jpg",
"./Asset/image/banner-2.jpg","./Asset/image/banner-3.jpg"]
var index = 1;
var changeImage = function(){
    bannerElement.src = images[index]
    index++;
    if(index == images.length){
        index = 0;
    }
}

setInterval(changeImage,9000);