import { getAllEvents } from "../api/eventsRequests.js";
import { html } from "../lib.js";

const eventsTemplate = (events) => html` 
<h2>Current Events</h2>
  ${events.length == 0
    ? html`<h4>No Events yet.</h4>`
    : html`<section id="dashboard">${events.map(eventCard)}</section>`}`;

const eventCard = (event) => html`
         </div><div class="event">
         <img src="${event.imageUrl}" alt="example1" />
         <p class="title">
         ${event.name}
         </p>
         <p class="date">${event.date}</p>
         <a class="details-btn" href="/details/${event._id}">Details</a>
       </div>`;

export async function eventsView(ctx) {
  const events = await getAllEvents();
  ctx.render(eventsTemplate(events));
}
