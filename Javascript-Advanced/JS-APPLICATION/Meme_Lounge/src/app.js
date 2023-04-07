import { page, render} from "./lib.js";

const main = document.querySelector(`main`);

page(decorateCtx);
page('/', ()=> console.log("home"))
page('/memes', ()=> console.log("memes"))
page('/memes/:id', ()=> console.log("details"))
page('/edit:id', ()=> console.log("edit"))
page('/login', ()=> console.log("login"))
page('/register', ()=> console.log("register"))
page('/create', ()=> console.log("create"))
page('/profile', ()=> console.log("profile"))


page.start()

function decorateCtx(ctx, next){
    ctx.render = renderMain;
    next();
}

function renderMain(templateResult){
    render(templateResult, main);
}