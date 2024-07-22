import React from 'react'
import {SvgXml} from 'react-native-svg'

type HidePasswordIconProps = {
    visible: boolean
}
export const HidePasswordIcon = (props: HidePasswordIconProps): JSX.Element => {
    const hide = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Iconly/Light/Hide">
    <g id="Hide">
    <path id="Stroke 1" d="M9.76045 14.3668C9.18545 13.7928 8.83545 13.0128 8.83545 12.1378C8.83545 10.3848 10.2474 8.9718 11.9994 8.9718C12.8664 8.9718 13.6644 9.3228 14.2294 9.8968" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Stroke 3" d="M15.1049 12.699C14.8729 13.989 13.8569 15.007 12.5679 15.241" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Stroke 5" d="M6.65451 17.4724C5.06751 16.2264 3.72351 14.4064 2.74951 12.1374C3.73351 9.85835 5.08651 8.02835 6.68351 6.77235C8.27051 5.51635 10.1015 4.83435 11.9995 4.83435C13.9085 4.83435 15.7385 5.52635 17.3355 6.79135" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Stroke 7" d="M19.4473 8.99084C20.1353 9.90484 20.7403 10.9598 21.2493 12.1368C19.2823 16.6938 15.8063 19.4388 11.9993 19.4388C11.1363 19.4388 10.2853 19.2988 9.46729 19.0258" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Stroke 9" d="M19.8868 4.24963L4.11279 20.0236" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    </svg>
    
`

    const show = `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke="#7B6F72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
`
    return <SvgXml xml={props.visible ? show : hide}/>
}
