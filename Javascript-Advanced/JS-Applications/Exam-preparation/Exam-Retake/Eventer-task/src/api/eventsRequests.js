import { get, post, del, put } from "./api.js";

export async function getAllEvents() {
  return get(`/data/events?sortBy=_createdOn%20desc`);
}

export async function createEvent(event) {
  return post(`/data/events`, event);
}

export async function getEventById(eventId) {
  return get("/data/events/" + eventId);
}

export async function deleteEvent(eventId) {
  return del(`/data/events/` + eventId);
}

export async function getGoingByEventId(eventId) {
  return get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

export async function showGoingButtonById(eventId, userId) {
  return get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function goingAtEvent(eventId){
    return post(`/data/going`, {eventId})
  }

  export async function editEvent(eventId, event){
    return put(`/data/events/` + eventId, event)
  }
