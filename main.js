let toggleNavStatus = false;

let toggleNav = function(){
  let getSidebar = document.querySelector(".head");
  let getSidebarUl = document.querySelector(".head ul");
  /*let getSidebarLinks = document.querySelectorAll(".head a");*/

  if (toggleNavStatus === false){
    getSidebarUl.style.visibility = "visible";

    let arrayLength = getSidebarUl.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarUl[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }


  else if (toggleNavStatus === true){




    let arrayLength = getSidebarUl.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarUl[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}
