"use client"
import { Input } from "antd"
import { Add_img } from "@/app/utilities/assets"
import { useRouter } from "next/navigation";
import Image from "next/image"
import "./styles.scss"

const SearchSectionJourneys: React.FC<{ mode: string }> = (props) => {
    const router = useRouter()
    return (
        <div className="searchContainer">
            <Input type="search" placeholder={"Search for " + props.mode + "..."} />

            <div className="tourContainers">
                <div className="actionZone">
                    <h2>0 {props.mode} found</h2>
                    <button type="button" onClick={() => router.push(`/${props.mode}/new`)}>
                        <span>Create {props.mode.slice(0, -1)}</span>
                        <Image
                            src={Add_img}
                            alt={"Add icon"}
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchSectionJourneys