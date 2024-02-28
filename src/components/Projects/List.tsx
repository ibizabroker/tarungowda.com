import { Projects } from "contentlayer/generated";
import Card from "./Card";

export default function List({ allProjects }: { allProjects: Projects[] }) {
  return (
    <div className="projects-list">
      {allProjects.map((project: Projects)  => {
        return (
          <div key={project._id}>
            <Card project={project} />
          </div>
        );
      })}
    </div>
  );
}