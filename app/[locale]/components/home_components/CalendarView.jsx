'use client';

import { React, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Tooltip } from 'react-tooltip';

import db from '../../../../data/firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Events'), (snapshot) => {
        let temp = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        temp = temp.map((event) => ({
          ...event,
          date: formatDate(new Date(event.date.seconds * 1000)),
          title: event.name,
          backgroundColor: '#234E13',
        }));
        console.log(temp);
        setEvents(temp);
      }),
    []
  );

  const formatDate = (date) => {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  };

  const custom = (eventInfo) => {
    return (
      <div>
        <a className={`anchor${eventInfo.event._def.publicId} px-1 py-2`}>
          {eventInfo.event._def.title}
        </a>
        <Tooltip anchorSelect={`.anchor${eventInfo.event._def.publicId}`}>
          <div className='bg-white text-center p-2'>
            {console.log('event: ', eventInfo)}
            <h3 className='text-black font-bold text-lg text-[#234E13]'>
              {eventInfo.event._def.extendedProps.name}
            </h3>
            <p className='text-black text-lg font-bold'>
              {eventInfo.event._instance.range.start
                .toString()
                .split(' ')
                .splice(0, 5)
                .join(' ')}
            </p>
            <p className='text-black font-semibold'>
              {eventInfo.event._def.extendedProps.description}
            </p>
          </div>
        </Tooltip>
      </div>
    );
  };

  return (
    <div className=''>
      {events.length != 0 ? (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          eventContent={custom}
        />
      ) : (
        <p className='text-center'>No Events at the Moment!</p>
      )}
    </div>
  );
};

export default CalendarView;
