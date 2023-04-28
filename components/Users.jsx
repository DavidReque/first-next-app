import React from "react";

export default function Users({users}) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <h5>{user.first_name} {user.last_name}</h5>
            <h6>{user.email} </h6>
            <img src={user.avatar} alt={user.email} />
          </div>
        ))}
      </ul>
    </div>
  );
}
