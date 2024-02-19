import "./projects.scss";

const items = [
    {
        id: 1,
        title:"project 1",
        img:"",
        desc:"",
    },
    {
        id: 2,
        title:"project 2",
        img:"",
        desc:"",
    },
    {
        id: 3,
        title:"project 3",
        img:"",
        desc:"",
    },
    {
        id: 4,
        title:"project 4",
        img:"",
        desc:"",
    },
];

const Single = ({item}) =>{
    return (
        <section>
            {item.title}
        </section>
    )
        

    
}

const Projects = () => {
    return (
        <div className="projects">
            {
                items.map(item=>(
                    <Single item={item} key={item.id}/>
                ))
            }
        </div>
    );
};

export default Projects;