import React, { useEffect, useState } from 'react';
import { fetchProjects, sendMessage } from '../api';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
fetchProjects();
sendMessage();

  useEffect(() => {
    API.get('/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch projects');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading projects...</p>;
  if (error) return <p style={{ padding: 20 }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>My Projects</h1>
      {projects.length === 0 && <p>No projects found.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map(proj => (
          <li key={proj._id} style={{ marginBottom: 30, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            {proj.image && <img src={proj.image} alt={proj.title} style={{ maxWidth: '300px', display: 'block', marginBottom: 10 }} />}
            <p>
              {proj.githubLink && <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>GitHub</a>}
              {proj.liveDemoLink && <a href={proj.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </p>
            <p><strong>Tech Stack:</strong> {proj.techStack?.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
