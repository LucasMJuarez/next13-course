'use client'
import Link from 'next/link'
import React from 'react'
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'

interface ActiveLinkProps {
    path: string
    text: string
}
export const ActiveLink = ({ path, text }: ActiveLinkProps) => {

    const pathName = usePathname()

    return (
        <Link
            className={`${style.link} ${(pathName === path)}&& style['active-link']}`} href={path}>{text}</Link>
    )
}
