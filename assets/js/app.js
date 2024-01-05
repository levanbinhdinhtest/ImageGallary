let btnClose = document.querySelector('.cancel');
let btnNext = document.querySelector('.right');
let btnPrev = document.querySelector('.left');
let gallery = document.querySelector('.gallery');
let galleryImg = document.querySelector('.gallery-inner img')
let img = document.querySelectorAll('.images img');

function galleryShow(){
    if(currenIndex==0){
        btnPrev.classList.add('control')  ;
    }
    else{
        btnPrev.classList.remove('control')  ;
    }

    if(currenIndex==img.length-1){
        btnNext.classList.add('control')  ;
    }
    else{
        btnNext.classList.remove('control')  ;
    }
            //set lai src cho img thong qua vi tri khi lap
    galleryImg.src = img[currenIndex].src;
            //add class hide vao gallery
    gallery.classList.add('hide');
};
//lay vi tri tung anh
let currenIndex = 0;
//dung vong lap for each de di qua tung anh
img.forEach((item,index)=>{
    //bat su kien click tung item
    item.addEventListener('click',function(){
        //gan vi tri duoc click cho currentindex
        currenIndex = index;
        galleryShow();
    });
});

btnClose.addEventListener('click',function(){
    gallery.classList.remove('hide');
});

//bat su kien ban phim
document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        gallery.classList.remove('hide');
    }
});

//bat su kien btnPrev
btnPrev.addEventListener('click',function(){
    if(currenIndex>0){
        currenIndex--;
        galleryShow();
    }

});

btnNext.addEventListener('click',function(){
    if(currenIndex < img.length - 1)
    {
        currenIndex++;
        galleryShow();
    }

})
