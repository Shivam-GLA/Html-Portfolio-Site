console.log("Script running...");

document.querySelector(".cross").style.display = "none";
document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        setTimeout(()=>{
        document.querySelector(".ham").style.display = "inline";
        },700);
        document.querySelector(".cross").style.display = "none";
    }
    else {
        document.querySelector(".ham").style.display = "none";
        document.querySelector(".cross").style.display = "inline";
    }
})
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        setTimeout(()=>{
        document.querySelector(".ham").style.display = "inline";
        },700);
        document.querySelector(".cross").style.display = "none";
    }
    else {
        document.querySelector(".ham").style.display = "none";
        document.querySelector(".cross").style.display = "inline";
    }
})
