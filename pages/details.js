
import React from 'react';
import data from './data'; 
const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Notifications: {item.notifications}</p>
          {item.tasks.length > 0 ? (
            <ul>
              {item.tasks.map((task) => (
                <li key={task.id}>
                  <h3 style={{ color: task.title.color }}>{task.title.text}</h3>
                  <p>{task.description}</p>
                  <p>Date: {task.date}</p>
                  <p>Milestone: {task.milestone}</p>
                  <p>Priority: {task.priority}</p>
                  <div>
                    {task.people.map((person) => (
                      <div key={person.name}>
                        <img src={person.photo} alt={person.name} />
                        <span>{person.name}</span>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Details;