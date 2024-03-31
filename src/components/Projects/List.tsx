import { Projects } from "contentlayer/generated";
import Card from "./Card";

export default function List({ sortedProjects }: { sortedProjects: any }) {
  return (
    <div className="projects-list">
      {sortedProjects.map((project: Projects)  => {
        return (
          <div key={project._id} className="project-item">
            <Card project={project} />
          </div>
        );
      })}
    </div>
  );
}