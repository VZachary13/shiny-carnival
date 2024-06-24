export default function Project({ project }) {
  const ifDeployed = <a href={project.deployedLink}>Deployed Application</a>;
  return (
    <div className="projectCard">
      <div className="projectCardContainer">
        <img src={project.image} alt={`${project.name} screenshot`} />
        <div className="layer">
          <h2>{project.name}</h2>
          <div className="linkDiv">
            <a href={project.githubRepo}>GitHub Repository</a>
            {project.deployedLink !== "Not Deployed" ? (
              ifDeployed
            ) : (
              <p>{project.deployedLink}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
