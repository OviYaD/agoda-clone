import React, { useEffect } from 'react'
import './PaymentModel.css'

function PaymentModel({setOpenPaymentModel}) {
  useEffect(()=>{
    document.body.style.overflowY = "hidden"

    return () => {
      document.body.style.overflowY = "auto"
    }
  })
  return (
    <div className='PaymentModel'>
      <section>
        <div className='paymentModelWrapper'>
          <h4>Add new credit card</h4>
          <button onClick={()=>setOpenPaymentModel(false)}>Close</button>
        </div>
      </section>
    </div>
  )
}

export default PaymentModel