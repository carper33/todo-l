var box;

function init (){
       box = document.getElementById('box');
       box.addEventListener('keypress',evt);
}

function evt (e){
       if (e.charCode == 13){
               boxing()
       }
}

function boxing (){
       console.log(box.value);
}