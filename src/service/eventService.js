import axios from 'axios';

const API_URL = '/api/events';

// Set auth token if available
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data.events;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getEventsForDate = async (date) => {
  try {
    const response = await axios.get(`${API_URL}/date/${date.toISOString()}`);
    return response.data.data.events;
  } catch (error) {
    console.error('Error fetching events for date:', error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data.data.event;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, eventData);
    return response.data.data.event;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};

export default {
  setAuthToken,
  getEvents,
  getEventsForDate,
  createEvent,
  updateEvent,
  deleteEvent
};