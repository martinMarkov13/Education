import { logout } from "./api/user.js";
import { page, render} from "./lib.js";
import { getUserData } from "./util.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";
import { searchPage } from "./views/search.js";

const main = document.querySelector("main")

page(decorateContext);
page("/", dashboardView)
page("/dashboard", dashboardView)
page(`/login`, loginView)
page('/register', registerView)
page('/create', createView)
page('/profile', profileView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/search', searchPage)

updateNav()
page.start()

document.getElementById("logoutBtn").addEventListener("click", onLogout)


function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav
    next();
}

function renderMain(templateResult){
    render(templateResult, main);
}

function updateNav(){
    const userData = getUserData()

    if(userData){
        document.getElementById("user").style.display = "block"
        document.getElementById("guest").style.display = "none"
        document.querySelector("#user span").textContent = `Welcome, ${userData.email}`
    }else{
        document.getElementById("guest").style.display = "block"
        document.getElementById("user").style.display = "none"
    }
}

function onLogout(){
    logout();
    updateNav()
    page.redirect("/dashboard");
}