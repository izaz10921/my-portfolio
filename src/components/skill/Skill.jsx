import "./Skill.scss"

const Skill = () => {
    return (
        <div className="skill">
            <div className="progress">
                <h1>Skill,Education & Experience</h1>
                <h3>My technical level</h3>
            </div>
            <div className="container">

                <div className="skill">
                    <h1>Frontend</h1>
                    <div className="frontend">
                        <div className="front">
                            <img src="https://i.ibb.co/ZN5F0Hv/html.png" alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/Ss697wt/css.png" alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/s9mm0Yq/js.png" alt="" />
                            <p>JS</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/LQML325/tailwind.png" alt="" />
                            <p>Tailwind</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/BPNFp45/scss.png" alt="" />
                            <p>SCSS</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/crVtt0j/react.png" alt="" />
                            <p>React</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/XxgJ285/redux-svgrepo-com.png" alt="" />
                            <p>Redux</p>
                        </div>
                        <div className="front">
                            <img src="https://i.ibb.co/tmWvG09/next-js-svgrepo-com.png" alt="" />
                            <p>Next JS</p>
                        </div>

                    </div>
                    <h1>Backend</h1>
                    <div className="backend">
                        <div className="back">
                            <img src="https://i.ibb.co/WyRBJRB/firebase-svgrepo-com.png" alt="" />
                            <p>Firebase</p>
                        </div>
                        <div className="back">
                            <img src="https://i.ibb.co/xh6bCYP/mongo-svgrepo-com.png" alt="" />
                            <p>Mongo DB</p>
                        </div>
                        <div className="back">
                            <img src="https://i.ibb.co/4Mfdkhp/node-js-svgrepo-com.png" alt="" />
                            <p>Node JS</p>
                        </div>
                        <div className="back">
                            <img src="https://i.ibb.co/hDhjBxt/sql-database-sql-azure-svgrepo-com.png" alt="" />
                            <p>SQL</p>
                        </div>

                    </div>
                    <h1>Framework</h1>
                    <div className="framework">
                        <div className="frame">
                            <img src="https://i.ibb.co/cQq642R/dotnet-svgrepo-com.png" alt="" />
                            <p>.NET</p>
                        </div>

                    </div>


                </div>
                <div className="education">
                    <p>internship</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;