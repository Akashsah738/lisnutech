const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
    
    
    
    
    document.getElementsByClassName(".btn-1").addEventListener("click",myFunc)
    function myFunc(){
        window.location.href="link1.html";
    }

    document.getElementsByClassName(".btn-3").addEventListener("click",myFunclr)
    function myFunclr(){
        window.location.href="link5.html";
    }



    document.getElementsByClassName(".btn-2").addEventListener("click",myFuncl)
    function myFuncl(){
        window.location.href="link4.html";
    }

    document.getElementsByClassName(".btng-1").addEventListener("click",myFunc)
    function myFunc(){
        window.location.href="link1.html";
    }
    // document.getElementsByClassName(".btng-1").addEventListener("click",myFunc)
    // function myFunc(){
    //     window.location.href="link1.html";
    // }


    document.getElementsByClassName(".btn-6").addEventListener("click",myFunct)
    function myFunct(){
        window.location.href="link2.html";
    }

    document.getElementsByClassName(".btn-7").addEventListener("click",myFunctn)
    function myFunctn(){
        window.location.href="link3.html";
    }

    document.getElementsByClassName(".btn-4").addEventListener("click",myFon)
    function myFon(){
        window.location.href="link4.html";
    }



    function onClickMenu(){
        document.getElementById("menu").classList.toggle("icon");
        document.getElementById("nav").classList.toggle("change");
        // alert('click here');
    }

    // next page


