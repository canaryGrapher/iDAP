// sidebar component using daisyUI
import Icon from "bs-icon"

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile w-min">
            <div id="sideBar_Content" className="drawer-toggle"></div>
            <div className="drawer-side">
                <label htmlFor="sideBar_Content" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#040F16] text-white flex flex-col justify-between">
                    {/* Sidebar content */}
                    <div className="flex mt-5">
                        <div className="mr-2">
                            <img src="https://thispersondoesnotexist.xyz/img/3541.jpg" width={60} height={60} className="rounded-full" />
                        </div>
                        <div className="my-auto">
                            <p className="text-xl">
                                John Doe
                            </p>
                            <p className="text-xs text-gray-300">
                                john.doe@mail.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <li><a><Icon name="gear" />Settings</a></li>
                        <li><a><Icon name="box-arrow-right" />Log out</a></li>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default Sidebar