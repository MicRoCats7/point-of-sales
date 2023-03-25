import React, { useEffect, useState } from 'react'
import "../../style/listMakanan.css"
import gambarMakanan from "../../assets/cumi.jpeg" 
import axios from 'axios';
import { API_URL } from '../../utils/constants';

function ListMakanan({dataBill, setDataBill}) {
    const [menu, setmenu] = useState([]);

    useEffect(() => {
        axios
          .get(API_URL + "menu")
          .then((response) => setmenu(response.data.menu))
          .catch((error) => console.log(error));
    }, [])

    const tambahBill = (nama, harga) => {
        setDataBill([...dataBill, {
            nama, 
            harga,            
        }])
    }

  return (
    <div className='container'>
        {menu?.map((item) => (
        <div className='card' key={item.id} onClick={() => tambahBill(item.menuName, item.menuPrice)}>
            {/* <img src={gambarMakanan} alt='' /> */}
            <div className='alternative-img'>{item.menuName.slice(0, 2)}</div>
            <div className='title'>
                <h2>{item.menuName}</h2>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ListMakanan