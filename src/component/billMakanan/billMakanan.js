import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import "../../style/billMakanan.css";
import { numberWithCommas } from "../../utils/utils";

function BillMakanan({ filteredBill, count, setFilterBill, setCount, setDataBill }) {
  let [subtotal, setSubtotal] = useState([])

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:() => componentRef.current,
    documentTitle: 'Bill Belanja',
    onAfterPrint: ()=> alert('Print success')
  })

  useEffect(() => {
    setSubtotal(
      filteredBill.map((item) => {
        return item.harga * count[item.nama]
      })
    )
  }, [count])

  const Alert = () => {
    Swal.fire(
      'Succes Saved Bill',
      '',
      'success'
    ) 
  }

  const AlertCharge = () => {
    Swal.fire(
      'Succes Charge Bill',
      '',
      'success'
    ) 
    setFilterBill([])
    setCount({})
    setDataBill([])
  }

  const AlertBelumIsiMenu = () => {
    Swal.fire(
      'Choose your menus',
      '',
      'warning'
    ) 
  }

  function bayar(){
    return filteredBill.length === 0 ? AlertBelumIsiMenu : AlertCharge
  }

  function clear(){
    setFilterBill([])
    setCount({})
    setDataBill([])
  }

  return (
    <div className="billMakanan" >
      <div className="customer">
        <div className="box">
          <i class="uil uil-user"></i>
          <p>Customer</p>
        </div>
        <div className="new-cus">
          <h3>New Customer</h3>
        </div>
        <div className="box list">
          <i class="uil uil-list-ul"></i>
          <p>Billing List</p>
        </div>
      </div>
      <div className="dinein">
        <h3>Dine in</h3>
        <i class="uil uil-angle-down"></i>
      </div>
      <div className="wrapper-list-bill" ref={componentRef}>
        <div className="list-bill">
          <span>1</span>
          <span>View Table</span>
        </div>
        {filteredBill.map((item) => (
          <div className="list-bill">
            <span>{item.nama}</span>
            <span>
              {count[item.nama] === 1 ? "" : "x " + count[item.nama]}
              &nbsp;&nbsp;&nbsp;{"Rp " + numberWithCommas(item.harga)}
            </span>
          </div>
        ))}
        <div className="list-bill">
          <span>Subtotal</span>
          <span>{"Rp " + numberWithCommas(subtotal?.reduce((a, b) => a + b, 0))}</span>
        </div>
        <div className="list-bill">
          <span>Total</span>
          <span>{"Rp " + numberWithCommas(subtotal?.reduce((a, b) => a + b, 0))}</span>
        </div>
      </div>
      <div className="clear">
        <div className="btn-clear">
          <button onClick={clear}>Clear Sale</button>
        </div>
      </div>
      <div className="payment">
        <div className="btn-save item1">
          <button onClick={Alert}>Save Bill</button>
        </div>
        <div className="btn-print item2">
          <button onClick={handlePrint}>Print Bill</button>
        </div>
        <div className="btn-charge item4">
          <i class="uil uil-credit-card"></i>
          <button
          onClick={bayar()}>{"Charge   Rp" + numberWithCommas(subtotal?.reduce((a, b) => a + b, 0))}</button>
        </div>
      </div>
    </div>
  );
}

export default BillMakanan;
