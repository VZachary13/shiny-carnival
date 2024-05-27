import Project from "../components/UI/Project";
import image1 from "../assets/projectImages/project1/scrnshot.jpg";
import image2 from "../assets/projectImages/project2/thirdScreenShot.jpg";
import image3 from "../assets/projectImages/project3/screnshot3.jpg";

export default function Portfolio() {
  const project1 = {
    name: "S.I.M.A.: GameQuest",
    githubRepo: "https://github.com/dumpsterRat92/SIMA-project2",
    deployedLink: "https://sima-gamequest-4ac32409406b.herokuapp.com/login",
    image: image1,
  };
  const project2 = {
    name: "Coding Bros Travel App (API Inactive)",
    githubRepo: "https://github.com/DuleskyJ/TravelAPI",
    deployedLink: "https://duleskyj.github.io/TravelAPI/",
    image: image2,
  };
  const project3 = {
    name: "Social Media API",
    githubRepo: "https://github.com/VZachary13/expert-waddle",
    deployedLink: "Not Deployed",
    image: image3,
  };

  const projects = [project1, project2, project3];

  return (
    <div className="containerCard">
      {projects.map((project, index) => (
        <div key={index} className="projectCard">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}
