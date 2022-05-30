const prev = document.getElementById('prev');
const next = document.getElementById('next');
const content = document.getElementsByClassName('content');
const totalContent = content.length;
let slide = 0;
next.addEventListener('click', nextContent);
prev.addEventListener('click', prevContent);


function update(){
    for(var i = 0; i < totalContent; i++){
   content[i].classList.remove('show');
}
   content[slide].classList.add('show');
}

function nextContent(){
    if(slide == totalContent - 1){
        slide = 0;
    }
    else {
        slide++
    }
    console.log(slide);
update();
}

function prevContent(){

    if(slide == 0){
        slide = totalContent - 1;
    }
    else { 
        slide--
    }
    update();
}