import React from 'react'
import "./billMakanan.css"

function billMakanan() {
  return (
    <div className="billMakanan">
        <div className='customer'>
            <div className='box'>
            <i class="uil uil-user"></i>
              <p>Customer</p>
            </div>
            <div className='new-cus'>
              <h3>New Customer</h3>
            </div>
            <div className='box list'>
            <i class="uil uil-list-ul"></i>
              <p>Billing List</p>
            </div>
        </div>
        <div className='dinein'>
          <h3>Dine in</h3>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className='list-bill'>
          <div className='left-column'>
            <span>1</span>
            <p>Ikan gulung</p>
            <p>Ikan gulung</p>
            <p>Ikan gulung</p>
            <p>Ikan gulung</p>
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div className='right-column'>
            <span>View Table</span>
            <p>Rp 15.000</p>
            <p>Rp 69.000</p>
            <p>Rp 0</p>
            <p>Rp 20.000</p>
            <p>Rp 104.000</p>
            <p>Rp 104.000</p>  
          </div>
        </div>
        <div className='clear'>
          <div className='btn-clear'>
            <button>Clear Sale</button>
          </div>
        </div>
        <div className='payment'>
        <div className='btn-save item1'>
            <button>Save Bill</button>
          </div>
          <div className='btn-print item2'>
            <button>Print Bill</button>
          </div>
          <div className='btn-charge item4'>
              <i class="uil uil-credit-card"></i>
            <button>Charge Rp 104.000</button>
          </div>
        </div>
    </div> 
  )
}

export default billMakanan