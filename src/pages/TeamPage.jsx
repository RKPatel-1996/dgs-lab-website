// src/pages/TeamPage.jsx
import React, { useState } from "react";
import { allMembers } from "../data/members"; // Import your data
import TeamMemberCard from "../components/TeamMemberCard"; // Import your card component
import Navbar from "../components/Navbar"; // Don't forget navigation!
import Footer from "../components/Footer";

function TeamPage() {
  // State to manage the filter (e.g., 'all', 'member', 'alumni')
  const [filter, setFilter] = useState("member");

  // Filter the members based on the current state
  const filteredMembers = allMembers.filter((member) =>
    filter === "all" ? true : member.status === filter
  );

  return (
    <>
      <Navbar />
      <main className="team-page-content">
        <h1>Our Team</h1>
        <div className="filter-buttons">
          <button onClick={() => setFilter("member")}>Current Members</button>
          <button onClick={() => setFilter("alumni")}>Alumni</button>
          <button onClick={() => setFilter("collaborator")}>
            Collaborators
          </button>
        </div>
        <div className="team-grid">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TeamPage;
