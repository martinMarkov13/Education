import { deleteEvent, getEventById, getGoingByEventId, goingAtEvent, showGoingButtonById } from "../api/eventsRequests.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (event, isCreator, onDelete, going, showGoingButton, onGoing) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >${event.description}</span>
              </div>
            </div>

            <h3>Going: <span id="go">${going}</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isCreator
            ? html` <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="" id="delete-btn">Delete</a>`
            :""}
            
              <!--Bonus - Only for logged-in users ( not authors )-->
             ${goingTemplate(showGoingButton, onGoing)}
            </div>
          </div>
</section>
`;

let goingTemplate = (showGoingButton, onGoing) =>{
    if(showGoingButton){
        return html`<a @click=${onGoing} href="javascript:void(0)" id="go-btn">Going</a>`
    }else{
        return null;
    }
}

export async function detailsView(ctx) {
    const event = await getEventById(ctx.params.id)
    const userData = getUserData()
    const isCreator = userData?.id == event._ownerId;
    const going = await getGoingByEventId(ctx.params.id)
    const isGoing = userData? await showGoingButtonById(event._id, userData.id) : 0;
    const showGoingButton = isCreator == false && isGoing == false && userData!= null;

    ctx.render(detailsTemplate(event, isCreator, onDelete, going, showGoingButton, onGoing));

    async function onGoing(){
        await goingAtEvent(ctx.params.id)
        ctx.page.redirect(`/details/` + ctx.params.id)
    }

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete the event?")
        
        if (choice) {
            await deleteEvent(ctx.params.id)
            ctx.page.redirect(`/events`);
        }
    }
}

