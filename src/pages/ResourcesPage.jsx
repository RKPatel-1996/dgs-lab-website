import React from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import {
  youtubeVideos,
  protocols,
  githubRepos,
  communityLinks,
  highlightedContent,
} from "../data/resources";
import "./ResourcesPage.css";

function ResourcesPage() {
  return (
    <div>
      <Navbar />
      <main className="resources-content">
        <h1>Resources</h1>
        <p>
          A collection of useful documents, links, and media from our lab and
          the broader scientific community.
        </p>

        {/* --- Highlighted Content Section --- */}
        <section className="resource-section">
          <h2>Highlights</h2>
          <div className="card-grid">
            {highlightedContent.map((item) =>
              item.type === "video" ? (
                <div key={item.id} className="video-highlight">
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.embedId}`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ) : (
                <ResourceCard key={item.id} resource={item} />
              )
            )}
          </div>
        </section>

        {/* --- Member Videos Section --- */}
        <section className="resource-section">
          <h2>From Our Channels</h2>
          <div className="video-grid">
            {youtubeVideos.map((video) => (
              <div key={video.id}>
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Protocols Section --- */}
        <section className="resource-section">
          <h2>Documents & Protocols</h2>
          <div className="card-grid">
            {protocols.map((protocol) => (
              <ResourceCard key={protocol.id} resource={protocol} />
            ))}
          </div>
        </section>

        {/* --- GitHub Section --- */}
        <section className="resource-section">
          <h2>GitHub Repositories</h2>
          <div className="card-grid">
            {githubRepos.map((repo) => (
              <ResourceCard key={repo.id} resource={repo} />
            ))}
          </div>
        </section>

        {/* --- Community Links Section --- */}
        <section className="resource-section">
          <h2>Community Resources</h2>
          <div className="card-grid">
            {communityLinks.map((link) => (
              <ResourceCard key={link.id} resource={link} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResourcesPage;
