import React from 'react'
import { Address } from '../../typings/profile-address'
import { useCssHandles } from 'vtex.css-handles'
import './boxAddress.css'


interface Props {
    addressInfo: Address
}

const CSS_HANDLES = [
    'containerBox',
    'containerBox__boxAddress'
]


const BoxAdress = ({ street, city, postalCode, complement }: Props['addressInfo']) => {

    const handles = useCssHandles(CSS_HANDLES);

    return (
        <div className={handles.containerBox}>
            <div className={handles.containerBox__boxAddress}>
                <span>{street}, Apto: {complement}</span>
                <span>{postalCode}, {city}</span>
                <span>Colombia</span>
            </div>
        </div>
    )
}

export default BoxAdress

