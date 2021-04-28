import React from 'react';
import projects from '../Components/allprojects';
import MenuItems from '../Components/MenuItems';
import Categories from '../Components/Categories';
import Title from '../Components/Title';
import {useState} from 'react';
import SkillsSection from '../Components/SkillsSection';
const allCategories = ['All', ...new Set(projects.map(item => item.category))];

function ProjectsPage(){
    
    const [categories,setCategories] = useState(allCategories);
    const [menuItems,setMenuItems] = useState(projects);
    
    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(projects)
            return;
        }
        const filteredData = projects.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="ProjectsPage">
            
            <Title title={'My Skills'} span = {'My Skills'}/>
            <div className="skillContainer">
                <SkillsSection skill={'Python'} progress={'90%'}/>
                <SkillsSection skill={'C++'} progress={'70%'}/>
                <SkillsSection skill={'Java'} progress={'80%'}/>
                <SkillsSection skill={'ReactJS'} progress={'50%'}/>
                <SkillsSection skill={'Django'} progress={'30%'}/>
                <SkillsSection skill={'Tensorflow'} progress={'60%'}/>
            </div>
            <div className="title">
                <Title title={'Projects'} span = {'Projects'}/>
            </div>
            <div className="projects-data">
                <Categories filter = {filter} categories={categories} />
                <MenuItems menuItem = {menuItems}/>
            </div>
        </div>
    )
}
export default ProjectsPage;