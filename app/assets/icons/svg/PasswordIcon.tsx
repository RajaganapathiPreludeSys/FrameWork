import React from 'react'
import {SvgXml} from 'react-native-svg'

export const PasswordIcon = (): JSX.Element => {

    const icon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3176 7.08579V5.47554C12.3176 3.59079 10.7891 2.06229 8.90431 2.06229C7.01956 2.05404 5.48506 3.57504 5.47681 5.46054V5.47554V7.08579" stroke="#7B6F72" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7624 15.9371H6.03162C4.46112 15.9371 3.18762 14.6643 3.18762 13.0931V9.87635C3.18762 8.3051 4.46112 7.03235 6.03162 7.03235H11.7624C13.3329 7.03235 14.6064 8.3051 14.6064 9.87635V13.0931C14.6064 14.6643 13.3329 15.9371 11.7624 15.9371Z" stroke="#7B6F72" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.89709 10.652V12.3177" stroke="#7B6F72" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`

    return <SvgXml xml={icon}/>
}
