import React from 'react'
import {SvgXml} from 'react-native-svg'

export const FacebookIcon = (): JSX.Element => {
    const icon = `<svg width="50" height="50" viewBox="0 0 50 50" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.4" y="0.4" width="49.2" height="49.2" rx="13.6" stroke="#DDDADA" stroke-width="0.8"/>
    <path d="M30 16.6666H27.5C26.395 16.6666 25.3352 17.1056 24.5538 17.887C23.7724 18.6684 23.3334 19.7282 23.3334 20.8333V23.3333H20.8334V26.6666H23.3334V33.3333H26.6667V26.6666H29.1667L30 23.3333H26.6667V20.8333C26.6667 20.6123 26.7545 20.4003 26.9108 20.244C27.0671 20.0878 27.279 20 27.5 20H30V16.6666Z" fill="#1877F2"/>
    </svg>    
`

    return <SvgXml xml={icon}/>
}
