import { Project } from "../../components//Project/Project"

export const ProjectList = (props) => {
  const cProjects = props.projects.map((p, index) => {
    return <Project key={index} src={p.img}/>
  });
  return (
    <div className="progect-list">{cProjects}</div>
  )
}