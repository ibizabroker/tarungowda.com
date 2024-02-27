import { Projects } from "contentlayer/generated";
import Card from "./Card";

export default function List({ allProjects }: { allProjects: Projects[] }) {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
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