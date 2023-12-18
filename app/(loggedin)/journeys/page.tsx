import SearchSectionJourneys from "@/app/utilities/components/main/SearchSectionJourneys"
import "../styles.scss"

export default function Journeys() {
    return (
        <div className="mainSection">
            <h1>Journeys</h1>
            <p>Guided journeys are tours that span over multiple pages, guiding users through a particular “how-to”.</p>
            <SearchSectionJourneys mode="journeys" />
        </div>
    )
}
