import Image from "next/image"
import { Profile_img, Dropdown_img } from "@/app/utilities/assets"
import "@/app/utilities/components/Topnav/styles.scss"

const Topnav: React.FC = () => {
    return (
        <div id="loggedInNav">
            <div className="user_logo">
                <Image id="loggedInImage"
                    height={30}
                    width={30}
                    alt="User logged in image"
                    src={Profile_img}
                />
            </div>
            <div className="userInformation">
                <p>John Doe</p>
                <Image id="dropDownImage"
                    height={10}
                    width={10}
                    alt="Dropdown arrow image"
                    src={Dropdown_img}
                />
            </div>
        </div>
    )
}

export default Topnav