import { Export_img } from "@/app/utilities/assets"
import Image from "next/image"
import "../styles.scss"
export default function Export() {
    return (
        <div className="mainSection">
            <h1>Export</h1>
            <p>Export the journeys and overlays that were created. These files can be passed on to the tech team for deployment. </p>

            <div className="exportSection">
                <div className="downloadSection">
                    <h3>Base Files</h3>
                    <div className="divider">
                        <div className="downloadButton">
                            <div>
                                <p>shepherd.min.js</p>
                                <span>No recent updates</span>
                            </div>
                            <a target="_blank" href="https://raw.githubusercontent.com/canaryGrapher/ScoutSherpa/main/dist/js/shepherd.min.js">
                                <Image
                                    src={Export_img}
                                    alt={"Export icon"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                        <div className="downloadButton">
                            <div>
                                <p>shepherd.css</p>
                                <span>No recent updates</span>
                            </div>
                            <a target="_blank" href="https://raw.githubusercontent.com/canaryGrapher/ScoutSherpa/main/dist/css/shepherd.css">
                                <Image
                                    src={Export_img}
                                    alt={"Export icon"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>
                    <h3>Journey Files</h3>
                    <div className="divider">
                        <div className="downloadButton">
                            <div>
                                <p>overlays.js</p>
                                <span>No recent updates</span>
                            </div>
                            <a target="_blank" href="https://raw.githubusercontent.com/canaryGrapher/ScoutSherpa/main/tours/RIBOverlayPages.js">
                                <Image
                                    src={Export_img}
                                    alt={"Export icon"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                        <div className="downloadButton">
                            <div>
                                <p>journeys.js</p>
                                <span>No recent updates</span>
                            </div>
                            <a target="_blank" href="https://raw.githubusercontent.com/canaryGrapher/ScoutSherpa/main/tours/RIBGuidedJourneys.js">
                                <Image
                                    src={Export_img}
                                    alt={"Export icon"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
