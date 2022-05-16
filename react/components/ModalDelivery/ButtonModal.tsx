import React, { useEffect, useState } from 'react'

const ButtonModal = () => {

    const [buttonSelector, setButtonSelector] = useState(null as Element | null);

    useEffect(() => {
        const timer = setTimeout(() => {
            //@ts-ignore
            const modalButtonWithAddress = document.querySelector('.tiendasjumboqaio-metro-delivery-modal-3-x-containerTrigger')
            //@ts-ignore
            const modalButton = document.querySelector('.tiendasjumboqaio-delivery-modal-3-x-containerTrigger')
            //@ts-ignore

            if (modalButton) {
                setButtonSelector(modalButton)
            } else {
                setButtonSelector(modalButtonWithAddress)
            }

        }, 500);
        return () => clearTimeout(timer);
    }, [])


    const handleClick = () => {
        //@ts-ignore
        buttonSelector?.click()
    }

    return (
        <button onClick={handleClick}>AÑADIR DIRECCIÓN</button>
    )
}

export default ButtonModal