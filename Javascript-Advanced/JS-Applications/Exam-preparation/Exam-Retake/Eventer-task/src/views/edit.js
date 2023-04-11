import { editEvent, getEventById } from "../api/eventsRequests.js";
import { html } from "../lib.js";

const editTemplate = (event, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input type="text" name="name" id="name" placeholder="Event" .value=${event.name} />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image"
          .value=${event.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
          .value=${event.category}
        />

        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${event.description}
        ></textarea>

        <label for="date-and-time">Event Time:</label>
        <input type="text" name="date" id="date" placeholder="When?" .value=${event.date} />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`;

  export async function editView(ctx){
    const event = await getEventById(ctx.params.id)
    ctx.render(editTemplate(event, onSubmit))

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
    
        const name = formData.get("name").trim();
        const imageUrl = formData.get(`imageUrl`).trim();
        const category = formData.get("category").trim();
        const description = formData.get("description").trim();
        const date = formData.get("date").trim();
    
        if (name == "" || imageUrl == "" ||  category == "" ||  description == "" || date == "") {
          return alert("All fields are required!");
        }

        await editEvent(ctx.params.id, {name, imageUrl, category, description, date});
        ctx.page.redirect("/details/" + ctx.params.id);
    }
  }
