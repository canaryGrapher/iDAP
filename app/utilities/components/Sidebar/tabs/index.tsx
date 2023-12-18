'use client'

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { sidebarButtons } from "@/app/utilities/interface/dashboardModes"
import { changeSection } from '@/app/utilities/store/features/sidebar-slice'
import { useAppSelector } from "@/app/utilities/store/store";
import "@/app/utilities/styles/sidebar/index.scss"

const SidebarButtons: React.FC<sidebarButtons> = ({ name, icon }) => {
    const router = useRouter()
    const currentSection = useAppSelector(state => state.sidebarReducer.currentSection)
    const dispatch = useDispatch()
    const changeSectionSelected = useCallback((name: string) => {
        dispatch(changeSection(name))
    }, [dispatch]);
    useEffect(() => {
        changeSectionSelected(window.location.pathname.split("/")[1])
    }, [changeSectionSelected])

    return (
        <div className={name.toLowerCase() === currentSection ? "sidebarOption selected" : "sidebarOption"} onClick={() => {
            changeSectionSelected(name.toLowerCase())
            router.push("/" + name.toLowerCase())
        }}>
            <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
            />
            <div>{name}</div>
        </div>
    )
}

export default SidebarButtons