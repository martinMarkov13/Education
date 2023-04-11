import { logout } from "./api/user.js";
import { page, render} from "./lib.js";
import { getUserData } from "./util.js";


const main = document.querySelector("main")

page(decorateContext);
page('/', homeView)
// page('/memes', catalogView)


page.start()


document.getElementById(`logoutBtn`).addEventListener("click", onLogout)

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}

function renderMain(templateResult){
    render(templateResult, main);
}

function updateNav(){
    const userData = getUserData(); 

    if(userData){
        document.querySelector(".user").style.display = "block";
        document.querySelector(".guest").style.display = "none";
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`
    }else{
        document.querySelector(".guest").style.display = "block";
        document.querySelector(".user").style.display = "none";
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect("/")
}