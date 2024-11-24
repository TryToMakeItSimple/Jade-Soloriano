import styles from './ProjectsStyles.module.css';
import travel from '../../assets/travel.png';
import expenseTracker from '../../assets/expenseTracker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
             <ProjectCard 
            src={travel}
            link='https://github.com/TryToMakeItSimple/travelwebsite-frontend'
            h3='Go Travel'
            p='Travel Website-Frontend'
            />
            <ProjectCard 
            src={expenseTracker}
            link='https://github.com/TryToMakeItSimple/ExpenseTracker'
            h3='Track Me'
            p='Expense Tracker'
            />
             <ProjectCard 
            src={music}
            link='https://github.com/TryToMakeItSimple/clickandlisten'
            h3='clickandlisten'
            p='Mp3 Player'
            />
        </div>
    </section>
  );
}

export default Projects
