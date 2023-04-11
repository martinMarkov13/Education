import { createEvent } from "../api/eventsRequests.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Event</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Event" />
      <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image URL"
      />
      <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
      />

      <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
      ></textarea>

      <input type="text" name="date" id="date" placeholder="When?" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name").trim();
    const imageUrl = formData.get(`imageUrl`).trim();
    const category = formData.get("category").trim();
    const description = formData.get("description").trim();
    const date = formData.get("date").trim();

    if (name == "" || imageUrl == "" ||  category == "" ||  description == "" || date == "") {
      return alert("All fields are required!");
    }

    await createEvent({name, imageUrl, category, description, date});
    ctx.page.redirect("/events");
  }
}
