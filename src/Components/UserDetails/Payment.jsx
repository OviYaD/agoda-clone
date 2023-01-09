import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import PaymentModel from '../PaymentModel/PaymentModel'

function Payment({paymentInfo }) {

    const [openPaymentModel, setOpenPaymentModel] = useState(false)

    return (
        paymentInfo ? (
            <>
                <div className='paymentWrapper' onClick={()=>setOpenPaymentModel(true)}>
                    <BsPlusLg className='plusIcon' />
                    <p>Add new payment method</p>
                </div>
                {openPaymentModel && <PaymentModel setOpenPaymentModel={setOpenPaymentModel} />}
            </>
        ) : null
    )
}

export default Payment