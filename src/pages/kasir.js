import React, { useEffect, useState } from 'react'
import ListMakan from '../component/listMakanan/listMakanan';
import BillMakanan from '../component/billMakanan/billMakanan';
import '../style/kasir.css'

function Kasir() {
  const [dataBill, setDataBill] = useState([]);
  const [filterBill, setFilterBill] = useState([]);
  const [counts, setCount] = useState({})
  
  // let counts = dataBill.reduce((c, { nama: key }) => (c[key] = (c[key] || 0) + 1, c), {});
  useEffect(() => {
    setFilterBill( dataBill.filter(
      (obj, index) => dataBill.findIndex((item) => item.nama === obj.nama) === index
    ))
    setCount(dataBill.reduce((c, { nama: key }) => (c[key] = (c[key] || 0) + 1, c), {}))
  },[dataBill])


  return (
    <div className='kasir'>
        <ListMakan dataBill={dataBill} setDataBill={setDataBill}/>
        <BillMakanan filteredBill={filterBill} count={counts} setCount={setCount} setDataBill={setDataBill} setFilterBill={setFilterBill}/>
    </div>
  )
}

export default Kasir