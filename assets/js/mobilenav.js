let divcopy = document.querySelector("#nav-clone");
let target = document.querySelector("#nav-clone-paste");
target.appendChild(divcopy.cloneNode(true));
document.querySelector("#nav-clone-paste #nav-clone").id = "nav-mobile";
document.querySelector("#nav-clone-paste #nav-mobile").className = "nav-mobile-class";
document.querySelector("#nav-clone-paste #nav-mobile .dropdown").className = "dropdown-mobile";
document.querySelector("#nav-clone-paste #nav-mobile .dropdown-mobile .dropdown-toggle").className = "dropdown-toggle-mobile";
document.querySelector(".dropdown-toggle-mobile").removeAttribute('data-toggle');
document.querySelector("#nav-clone-paste #nav-mobile .dropdown-mobile .dropdown-menu").className = "dropdown-menu-mobile";

let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector("#nav-clone-paste");
  let getSidebarUl = document.querySelector("#nav-clone-paste ul");
  let getSidebarLinks = document.querySelectorAll("#nav-clone-paste a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;

  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}

let subToggleNavStatus = false;

let clickSubMenu = function() {

  let getSubSideBarUl = document.querySelector("#nav-clone-paste ul li ul");

  if (subToggleNavStatus === false) {
    getSubSideBarUl.style.display = "flex";
    getSubSideBarUl.style.flexFlow = "column wrap";
    getSubSideBarUl.style.justifyContent = "left";
    getSubSideBarUl.style.alignItems= "flex-start";

    subToggleNavStatus = true;

  }

  else if (toggleNavStatus === true) {
    getSubSideBarUl.style.display = "none";
    getSubSideBarUl.style.width = "300px";
    getSubSideBarUl.style.padding = "10px 50px";

    subToggleNavStatus = false;
  }


}
let getSubSidebarList = document.querySelector(".dropdown-mobile");
getSubSidebarList.setAttribute("onclick","clickSubMenu();");
let activeexists= document.querySelector("#nav-clone-paste #nav-mobile .active")
if (activeexists) {
  activeexists.className = "active-mobile";
}
