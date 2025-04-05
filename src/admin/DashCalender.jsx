import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DashCalendar = () => {
  const {currentUser} = useSelector((state) => state.user);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    createdBy: currentUser._id,
    title: '',
    date: new Date(),
    time: '12:00',
    description: '',
    color: 'bg-blue-500',
    meetingLink: '',
    isRecurring: false,
    recurrencePattern: null
  });
  const [loading, setLoading] = useState(true);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data.data.events.map(event => ({
          ...event,
          date: new Date(event.date)
        })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = getEventsForDate(date);
      
      return (
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          {dayEvents.map(event => (
            <div 
              key={event._id} 
              className={`h-1 w-1 rounded-full ${event.color} mx-px`}
            />
          ))}
        </div>
      );
    }
  };
  

  const getEventsForDate = (selectedDate) => {
    return events.filter(event => {
      // Check if it's a direct match (non-recurring or this specific occurrence)
      const isSameDate = event.date.getDate() === selectedDate.getDate() && 
                        event.date.getMonth() === selectedDate.getMonth() && 
                        event.date.getFullYear() === selectedDate.getFullYear();
      
      if (isSameDate) return true;
      
      // Check for recurring events
      if (event.isRecurring) {
        const eventDate = new Date(event.date);
        
        switch (event.recurrencePattern) {
          case 'daily':
            // For daily, show on all dates after the original date
            return selectedDate >= new Date(eventDate.setHours(0, 0, 0, 0));
            
          case 'weekly':
            // For weekly, show on same day of week after original date
            return (
              selectedDate >= new Date(eventDate.setHours(0, 0, 0, 0)) &&
              selectedDate.getDay() === eventDate.getDay()
            );
            
          case 'monthly':
            // For monthly, show on same date of month after original date
            return (
              selectedDate >= new Date(eventDate.setHours(0, 0, 0, 0)) &&
              selectedDate.getDate() === eventDate.getDate()
            );
            
          case 'yearly':
            // For yearly, show on same month and date after original date
            return (
              selectedDate >= new Date(eventDate.setHours(0, 0, 0, 0)) &&
              selectedDate.getDate() === eventDate.getDate() &&
              selectedDate.getMonth() === eventDate.getMonth()
            );
            
          default:
            return false;
        }
      }
      
      return false;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setNewEvent(prev => ({ ...prev, date }));
  };

  const handleTimeChange = (e) => {
    
    const [hours, minutes] = time.split(':');
    const newDate = new Date(newEvent.date);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    setNewEvent(prev => ({ ...prev, date: newDate, time }));
  };

  const addEvent = async () => {
    try {
      const [hours, minutes] = newEvent.time.split(':');
      const eventDate = new Date(newEvent.date);
      eventDate.setHours(hours);
      eventDate.setMinutes(minutes);
      
      const eventData = {
        title: newEvent.title,
        date: eventDate.toISOString(),
        description: newEvent.description,
        color: newEvent.color,
        meetingLink: newEvent.meetingLink,
        isRecurring: newEvent.isRecurring,
        recurrencePattern: newEvent.isRecurring ? newEvent.recurrencePattern : null,
        createdBy: currentUser._id
      };
      
      const response = await axios.post('/api/events', eventData);
      
      setEvents([...events, {
        ...response.data.data.event,
        date: new Date(response.data.data.event.date)
      }]);
      
      setShowEventModal(false);
      setNewEvent({
        title: '',
        date: new Date(),
        time: '12:00',
        description: '',
        color: 'bg-blue-500',
        meetingLink: '',
        isRecurring: false,
        recurrencePattern: null,
        createdBy: currentUser._id
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  const removeEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar variant="default" />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar variant="default" />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
            <button
              onClick={() => setShowEventModal(true)}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              <FiPlus className="mr-2" />
              Add Event
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Calendar
                  onChange={onChange}
                  value={date}
                  tileContent={tileContent}
                  className="border-0"
                  nextLabel={<FiChevronRight className="text-gray-600" />}
                  prevLabel={<FiChevronLeft className="text-gray-600" />}
                  next2Label={null}
                  prev2Label={null}
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </h2>
                
                {getEventsForDate(date).length > 0 ? (
                  <div className="space-y-3">
                    {getEventsForDate(date).map(event => (
                      <motion.div 
                        key={event._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg border-l-4 ${event.color} border-opacity-90 bg-white shadow-xs`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800">{event.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{formatTime(event.date)}</p>
                            {event.description && (
                              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                            )}
                            {event.meetingLink && (
                              <a 
                                href={event.meetingLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-indigo-600 hover:underline mt-1 block"
                              >
                                Join Meeting
                              </a>
                            )}
                          </div>
                          <button 
                            onClick={() => removeEvent(event._id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            ×
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No events scheduled for this day
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Meeting with team"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newEvent.date.toISOString().split('T')[0]}
                    onChange={(e) => handleDateChange(new Date(e.target.value))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleTimeChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Event details..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Link</label>
                <input
                  type="url"
                  name="meetingLink"
                  value={newEvent.meetingLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="https://meet.google.com/..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div className="flex space-x-2">
                  {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500'].map(color => (
                    <button
                      key={color}
                      className={`h-8 w-8 rounded-full ${color} ${newEvent.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                      onClick={() => setNewEvent(prev => ({ ...prev, color }))}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isRecurring"
                  name="isRecurring"
                  checked={newEvent.isRecurring}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, isRecurring: e.target.checked }))}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="isRecurring" className="ml-2 block text-sm text-gray-700">
                  Recurring Event
                </label>
              </div>
              
              {newEvent.isRecurring && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recurrence Pattern</label>
                  <select
                    name="recurrencePattern"
                    value={newEvent.recurrencePattern || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select pattern</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowEventModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addEvent}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Event
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DashCalendar;