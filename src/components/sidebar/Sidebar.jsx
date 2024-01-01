import "./Sidebar.scss"
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="bg">
                <Links></Links>
            </div>
            <ToggleButton></ToggleButton>
        </div>
    );
};

export default Sidebar;