import SearchSectionJourneys from "@/app/utilities/components/main/SearchSectionJourneys"
import "../styles.scss"

export default function Overlays() {
    return (
        <div className="mainSection">
            <h1>Overlays</h1>
            <p>Overlays are tours that exists only on one page. The purpose of this feature is to explain the content on a page to the user.</p>
            <SearchSectionJourneys mode="overlays" />
        </div>
    )
}
