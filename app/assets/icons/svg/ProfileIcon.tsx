import React from 'react'
import {SvgXml} from 'react-native-svg'

export const ProfileIcon = (): JSX.Element => {

    const icon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Iconly/Light-Outline/Profile">
    <g id="Profile">
    <g id="Group 3">
    <mask id="mask0_379_3994" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="10" width="12" height="7">
    <path id="Clip 2" fill-rule="evenodd" clip-rule="evenodd" d="M3 10.8721H14.8799V16.4026H3V10.8721Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_379_3994)">
    <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M8.94063 11.9971C5.74488 11.9971 4.12488 12.5461 4.12488 13.6298C4.12488 14.7233 5.74488 15.2776 8.94063 15.2776C12.1356 15.2776 13.7549 14.7286 13.7549 13.6448C13.7549 12.5513 12.1356 11.9971 8.94063 11.9971ZM8.94063 16.4026C7.47138 16.4026 2.99988 16.4026 2.99988 13.6298C2.99988 11.1578 6.39063 10.8721 8.94063 10.8721C10.4099 10.8721 14.8799 10.8721 14.8799 13.6448C14.8799 16.1168 11.4899 16.4026 8.94063 16.4026Z" fill="#7B6F72"/>
    </g>
    </g>
    <g id="Group 6">
    <mask id="mask1_379_3994" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="1" width="9" height="9">
    <path id="Clip 5" fill-rule="evenodd" clip-rule="evenodd" d="M4.9574 1.5H12.9224V9.46395H4.9574V1.5Z" fill="white"/>
    </mask>
    <g mask="url(#mask1_379_3994)">
    <path id="Fill 4" fill-rule="evenodd" clip-rule="evenodd" d="M8.94068 2.57076C7.33493 2.57076 6.02843 3.87651 6.02843 5.48226C6.02318 7.08276 7.31993 8.38776 8.91893 8.39376L8.94068 8.92926V8.39376C10.5457 8.39376 11.8514 7.08726 11.8514 5.48226C11.8514 3.87651 10.5457 2.57076 8.94068 2.57076ZM8.94067 9.46401H8.91667C6.72517 9.45726 4.94992 7.67001 4.95742 5.48001C4.95742 3.28626 6.74392 1.49976 8.94067 1.49976C11.1367 1.49976 12.9224 3.28626 12.9224 5.48226C12.9224 7.67826 11.1367 9.46401 8.94067 9.46401Z" fill="#7B6F72"/>
    </g>
    </g>
    </g>
    </g>
    </svg>    
`

    return <SvgXml xml={icon}/>
}
