import React from 'react';

const List = ({buddies}) => {
  return (
    <>
      {buddies.map((buddy) => {
        const {id, name, age, image} = buddy;
        return(
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years today</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
