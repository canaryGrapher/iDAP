interface Options {
    value: string,
    label: string
}

const PositionOptions: Options[] = [
    {
        value: "left",
        label: "Left"
    },

    {
        value: "right",
        label: "Right"
    },
    {
        value: "top",
        label: "Top"
    },

    {
        value: "bottom",
        label: "Bottom"
    }
]

const ButtonOptions: Options[] = [
    {
        value: "next",
        label: "Next"
    },
    {
        value: "back",
        label: "Back"
    },
    {
        value: "cancel",
        label: "Cancel"
    },
    {
        value: "complete",
        label: "Complete"
    }
]

const TopLinksOptions: Options[] = [
    {
        value: "Overview",
        label: "Overview"
    },
    {
        value: "Bank Accounts",
        label: "Bank Accounts"
    },
    {
        value: "Payments & Transfer",
        label: "Payments & Transfer"
    },
    {
        value: "Cards & Loans",
        label: "Cards & Loans"
    },
    {
        value: "Investments & Insurance",
        label: "Investments & Insurance"
    },
    {
        value: "Customer Service",
        label: "Customer Service"
    }
]

const defaultStepOptions: Options[] = [
    {
        value: "arrows",
        label: "Arrows"
    },
    {
        value: "cancelIcon",
        label: "Cancel Icon"
    },
    {
        value: "smoothScroll",
        label: "Smooth Scroll"
    },
    {
        value: "modalOverlay",
        label: "Modal Overlay"
    }
]

export { PositionOptions, ButtonOptions, TopLinksOptions, defaultStepOptions }