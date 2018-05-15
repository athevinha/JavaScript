document.addEventListener('DOMContentLoaded',function () {
    var set_book_fd5="dont-care";
    var set_book_fd6="dont-care";
    var set_yellow_icon="dont-care";
    var book_black=document.getElementById("img_book_black");
    var book_white=document.getElementById("img_book_white");
    var book_whites=document.getElementsByClassName("fd6_imgs");
    var yellow_icon=document.getElementsByClassName("sd");
        
    
    window.addEventListener("scroll",function() {
        console.log(window.pageYOffset);
        
        if(window.pageYOffset>=0){
            if(set_book_fd5="dont-care"){
                set_book_fd5="care";
                book_black.classList.add("black_run");
                book_white.classList.add("white_run");
            }
        }
        if(window.pageYOffset>1300){
            if(set_book_fd6="dont-care"){
                set_book_fd6="care";
                book_whites[0].classList.add("fd6_white_run");
            }
            if(window.pageYOffset>1900){
                if(set_book_fd6="fuck"){
                    set_book_fd6="fucks";
                    book_whites[1].classList.add("fd6_white_run");
                }
            }
            if(window.pageYOffset>2900){
                if(set_book_fd6="fucks"){
                    set_book_fd6="fucksd";
                    book_whites[2].classList.add("fd6_white_run");
                }
            }
            if(window.pageYOffset>4551){
                if(set_yellow_icon="dont-care"){
                    set_yellow_icon="care";                 
                        yellow_icon[0].classList.add("yellow_up0");
                        yellow_icon[1].classList.add("yellow_up1");
                        yellow_icon[2].classList.add("yellow_up2");
                        yellow_icon[3].classList.add("yellow_up3");
                }
            }

        }
        
    })
    var chose_fd6=document.getElementsByClassName("fd6_ifa");
    var fd6_slide=document.getElementsByClassName("col-sm-fd6");
    for(var k = 0 ; k<chose_fd6.length;k++){
        chose_fd6[k].addEventListener('click',function(){
            var btn_active=this;
            var i =0;
            for(i =0 ; btn_active=btn_active.previousElementSibling;i++){}
            console.log(i);
            for(var d =0 ;d<chose_fd6.length;d++){
                chose_fd6[d].classList.remove("btn-run");
                fd6_slide[d].classList.remove("col-sm-fd6-run");
            }    
            
            this.classList.add("btn-run");
            fd6_slide[i].classList.add("col-sm-fd6-run");
                       
        });
    }
    var fack =document.getElementsByClassName('fack');
    fack[0].onclick=function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop = 0;
    }
    
})
/// <reference path="../typings/globals/jquery/index.d.ts" />

