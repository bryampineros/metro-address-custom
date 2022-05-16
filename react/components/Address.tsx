import React, { useEffect, useState } from 'react'
//@ts-ignore
import GET_ADDRESS_PROFILE from '../graphql/getAddressProfile.graphql';
import { useCssHandles } from 'vtex.css-handles'
import { PageHeader } from 'vtex.styleguide'

import { useQuery } from 'react-apollo';
import { Address } from '../typings/profile-address';
import BoxAdress from './BoxAddress/BoxAdress';
import ButtonModal from './ModalDelivery/ButtonModal';

import './address.css'

const CSS_HANDLES = [
    'myAccountContainer',
    'containerAddress',
    'containerAddress__title',
    'myAccountContainer__containerBox'
]

const Address = () => {

    const handles = useCssHandles(CSS_HANDLES);

    const [addressInfo, setAddressInfo] = useState([] as Address[])

    const { loading: LoadingAddress, data: dataAddress } = useQuery(
        GET_ADDRESS_PROFILE
    )

    useEffect(() => {
        if (!LoadingAddress) {
            const addressData = {
                address: dataAddress?.profile?.addresses
            }
            setAddressInfo(addressData.address)
        }
    }, [LoadingAddress])

    return (

        <div className={handles.myAccountContainer}>
            <PageHeader
                linkLabel="Regreso"
                onLinkClick={() => {
                    //@ts-ignore
                    window.history.back();
                }}
            />

            <div className={`flex ${handles.containerAddress}`}>
                <strong className={handles.containerAddress__title}>Direcciones:</strong>
                <ButtonModal />
            </div>

            <div className={`flex ${handles.myAccountContainer__containerBox}`}>
                {
                    addressInfo?.map(address => (
                        <BoxAdress street={address.street} city={address.city} country={address.country} postalCode={address.postalCode} complement={address.complement} />
                    ))
                }
            </div>

        </div>

    )
}

export default Address