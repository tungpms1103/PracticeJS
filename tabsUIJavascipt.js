

var tab_items = document.querySelectorAll('.tab_item');
var items_content = document.querySelectorAll('.item');

const lineActive =  document.querySelector('.tab_item.active');
const line = document.querySelector('.tab .line');

console.log([lineActive]);

var calcLine = function(lineActive){
    line.style.left = lineActive.offsetLeft + 'px';
    line.style.width = lineActive.offsetWidth + 'px';
}

calcLine(lineActive);


tab_items.forEach(function(item,index){
    var item_content = items_content[index];

  

    item.onclick = function(){
        document.querySelector('.tab .active').classList.remove('active');
        document.querySelector('.item.active').classList.remove('active');
        

        item.classList.add('active');
        item_content.classList.add('active');

        calcLine(item);
    }
})