interface SubLinkInterface {
    name: string,
    selector: string,
    legacySelector: string,
}

interface LinkInterface extends SubLinkInterface {
    subLinks: SubLinkInterface[]
}

const links: LinkInterface[] = [
    {
        name: "Overview",
        selector: "#topbar > div.light-orange > div > div:nth-child(1)",
        legacySelector: "#OVERVIEW",
        subLinks: [
            {
                name: "My View",
                selector: "#topbar > div.light-orange > div > div:nth-child(1) > div > div > div.mr-15 > a:has([src*='topMenuImages/RDASH/RDASHM.svg'])",
                legacySelector: ""
            },
            {
                name: "Account Summary",
                selector: "#topbar > div.light-orange > div > div:nth-child(1) > div > div > div.w > a:has([src*='topMenuImages/RDASH/RACCTM.svg'])",
                legacySelector: ""
            },
            {
                name: "Personal Details",
                selector: "#topbar > div.light-orange > div > div:nth-child(1) > div > div > div.mr-15 > a:has([src*='topMenuImages/RDASH/RMYPRF.svg'])",
                legacySelector: ""
            },
            {
                name: "Financial Journey",
                selector: "#topbar > div.light-orange > div > div:nth-child(1) > div > div > div.w > a:has([src*='topMenuImages/RDASH/DGOBRO.svg'])",
                legacySelector: ""
            }
        ]
    },
    {
        name: "Bank Accounts",
        selector: "#topbar > div.light-orange > div > div:nth-child(2)",
        legacySelector: "#BANK_ACCOUNTS",
        subLinks: [
            {
                name: "Accounts",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Pockets",
                selector: "",
                legacySelector: ""
            },
            {
                name: "PayLater",
                selector: "",
                legacySelector: ""
            },
            {
                name: "PPF Accounts",
                selector: "",
                legacySelector: ""
            },
            {
                name: "SSY Accounts",
                selector: "",
                legacySelector: ""
            },
            {
                name: "e-Statements",
                selector: "",
                legacySelector: ""
            },
            {
                name: "iFinance",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Deposits",
                selector: "",
                legacySelector: ""
            },
            {
                name: "iWish Goals",
                selector: "",
                legacySelector: ""
            }
        ]
    },
    {
        name: "Payments & Transfer",
        selector: "#topbar > div.light-orange > div > div:nth-child(3)",
        legacySelector: "#PAYMENTS__TRANSFER",
        subLinks: [
            {
                name: "Pay Bills",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Recharge",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Buy/Recharge Fastag",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Fund Transfer",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Inward Remittance",
                selector: "",
                legacySelector: ""
            },
            {
                name: "My Transactions",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Manage Payee",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Favorites",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Tax Center",
                selector: "",
                legacySelector: ""
            }
        ]
    },
    {
        name: "Cards & Loans",
        selector: "#topbar > div.light-orange > div > div:nth-child(4)",
        legacySelector: "#CARDS__LOANS",
        subLinks: [
            {
                name: "Credit Cards",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Debit/ATM Card",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Forex & Prepaid Cards",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Prepaid Cards",
                selector: "",
                legacySelector: ""
            },
            {
                name: "ICICI Bank Rewards",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Manage Subscription",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Loans",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Apply Online",
                selector: "",
                legacySelector: ""
            }
        ]
    },
    {
        name: "Investments & Insurance",
        selector: "#topbar > div.light-orange > div > div:nth-child(5)",
        legacySelector: "#INVESTMENTS__INSURANCE",
        subLinks: [
            {
                name: "Sovereign Gold Bonds",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Invest Online",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Buy Mutual Funds",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Demat",
                selector: "",
                legacySelector: ""
            },
            {
                name: "ICICIdirect(3-in-1)",
                selector: "",
                legacySelector: ""
            },
            {
                name: "National Pension System",
                selector: "",
                legacySelector: ""
            },
            {
                name: "PPF Accounts",
                selector: "",
                legacySelector: ""
            },
            {
                name: "SSY Accounts",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Guaranteed Pension Plan",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Retirement Journey",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Term Life Insurance",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Cancel Cover",
                selector: "",
                legacySelector: ""
            },
            {
                name: "General Insurance",
                selector: "",
                legacySelector: ""
            },
            {
                name: "PMJJBY Scheme",
                selector: "",
                legacySelector: ""
            }
        ]
    },
    {
        name: "Customer Service",
        selector: "#topbar > div.light-orange > div > div:nth-child(6)",
        legacySelector: "#CUSTOMER_SERVICE",
        subLinks: [
            {
                name: "Service Requests",
                selector: "",
                legacySelector: ""
            },
            {
                name: "My Mailbox",
                selector: "",
                legacySelector: ""
            },
            {
                name: "e-Locker",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Tax Centre",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Offers Near You",
                selector: "",
                legacySelector: ""
            },
            {
                name: "Campus Power",
                selector: "",
                legacySelector: ""
            }

        ]
    }
]

export default links