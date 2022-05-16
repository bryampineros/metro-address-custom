import React from 'react'
//@ts-ignore
import { Route } from 'vtex.my-account-commons/Router'
import Address from './components/Address'

//@ts-ignore
const AddressesPage = () => {

    return (
        <>
            <Route path="/direcciones" exact component={Address} />
        </>
    )
}

export default AddressesPage 