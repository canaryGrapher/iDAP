'use client'
import { Journeys_img, Overlays_img, Manage_img, Export_img } from "@/app/utilities/assets"
import SidebarButtons from "./tabs"
import "@/app/utilities/styles/sidebar/index.scss"

const SidebarProps = [
    {
        name: "Journeys",
        icon: {
            alt: "Journey icon",
            src: Journeys_img
        }
    },
    {
        name: "Overlays",
        icon: {
            alt: "Overlays icon",
            src: Overlays_img
        }
    },
    {
        name: "Export",
        icon: {
            alt: "Export icon",
            src: Export_img
        }
    }
]


const Sidebar: React.FC = () => {
    return (
        <div id="loggedInSidebar" className="sidebar">
            <div className="sidebarOptionsContainer">
                {SidebarProps.map((component, index) => {
                    return <SidebarButtons key={index} name={component.name} icon={component.icon} />
                })}
            </div>
        </div >
    )
};

export default Sidebar