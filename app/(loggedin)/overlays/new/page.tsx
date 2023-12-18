import FormComponent from "@/app/utilities/components/forms";
import "./page.scss"

export default function NewOverlay() {
    return (
        <div id="newOverlay">
            <h1>New Overlay</h1>
            <section id="newOverlay_globalConfiguration">
                <FormComponent mode="overlays" />
            </section>
        </div>
    )
}
