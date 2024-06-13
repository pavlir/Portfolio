
import {Toolbar} from '../../components/Toolbar/Toolbar'
import {ProjectList} from '../../components/ProjectList/ProjectList'
import { useState } from 'react'

export const Portfolio = (props) => {
	const {projects, filters} = props;
	const [selectedFilter, setSelectedFilter] = useState("All");
	
	const handleFilterSelect = (filter) => {
		setSelectedFilter(filter);
	};

	const getFilteredProjects = () => {
		if (selectedFilter == "All") {
			return projects;
		}
		
    return projects.filter(project => project.category === selectedFilter);
  };

  const filteredProjects = getFilteredProjects();

	return (
		<div className="portfolio">
			<div className="toolbar-container">
				<Toolbar filters={filters} selected={selectedFilter} onSelectFilter={handleFilterSelect} />
			</div>
			<div className="project-list-container">
				<ProjectList projects={filteredProjects}/>
			</div>
	</div>
	)
}