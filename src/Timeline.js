import React from 'react';
import './Timeline.css';

const events = [
  { year: '2019', title: 'Working With My Family', description: 'My parents owned a pizzeria for many years and I became more involved in helping run it. It\'s where I primarily worked for the next few years.' },
  { year: '2020', title: 'Started University', description: 'I moved to Riverside after high school and got started on my CS degree at UCR.' },
  { year: '2022', title: 'Started Fencing', description: 'I took something that I fantasized about doing for years and decided to just do it. I joined the fencing club at my school and haven\'t looked back since. I\'ve had a great time.' },
  { year: '2023', title: 'Europe at Last', description: 'Spent a few days of my summer break in Munich and Berlin. It was my first time being in Europe and I hope there\'s more to come' },
  { year: '2024', title: 'Graduation', description: 'I graduated with my degree in September to start my career in earnest.' },
];

function Timeline() {
  return (
    <div className="timeline">
      <h2>My Journey</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="timeline-event">
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
