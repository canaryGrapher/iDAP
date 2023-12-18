import FormComponent from "@/app/utilities/components/forms";
import "./page.scss"

export default function NewJourney() {
    return (
        <div id="newJourney">
            <h1>New Journey</h1>
            <section id="newJourney_globalConfiguration">
                <FormComponent mode="journeys" />
            </section>
        </div>
    )
}
