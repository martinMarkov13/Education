import { deleteBook, getBookById, getLikesByBookId, likeBook, showLikeButtonReq } from "../api/booksRequests.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>  
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        ${isOwner
        ? html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a class="button" @click=${onDelete}href="#">Delete</a>`
        : ""}
        
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <!-- ( for Guests and Users )  -->
            ${likesTemplates(showLikeButton, onLike)}

        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${likes}</span>
        </div>
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>`;

let likesTemplates = (showLikeButton, onLike) =>{
    if(showLikeButton){
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
    }else{
        return null;
    }
}

export async function detailsView(ctx) {
    const book = await getBookById(ctx.params.id)
    const userData = getUserData()
    const isOwner = userData?.id == book._ownerId;
    const likes = await getLikesByBookId(ctx.params.id)
    const isLiked= userData? await showLikeButtonReq(book._id, userData.id) : 0;
    const showLikeButton = isOwner == false && isLiked == false && userData!=null;

    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeButton, onLike));

    async function onLike(){
        await likeBook(ctx.params.id)
        ctx.page.redirect(`/details/` + ctx.params.id)
    }

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this book?")
        
        if (choice) {
            await deleteBook(ctx.params.id)
            ctx.page.redirect(`/dashboard`);
        }
    }
}

