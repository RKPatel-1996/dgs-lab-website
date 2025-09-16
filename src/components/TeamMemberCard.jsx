// src/components/TeamMemberCard.jsx
import React from "react";

// The 'member' prop will be an object from your data file
function TeamMemberCard({ member }) {
  return (
    <div className="team-card">
      <img src={member.photo} alt={`Profile of ${member.name}`} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      {/* Add a button to open a modal or link to a full profile page */}
    </div>
  );
}

export default TeamMemberCard;
