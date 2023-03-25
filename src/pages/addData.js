import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import '../style/addData.css'
import { useNavigate } from 'react-router-dom';

function AddData() {

  const [menuName, setMenuName] = useState('')
  const [menuPrice, setMenuPrice] = useState('')
  const [menuStock, setMenuStock] = useState('')
  const [menuBanner, setmenuBanner] = useState('')
  const [categoryID, setCategoryId] = useState(1)

  const navigate = useNavigate();


    const nambahData = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('menuName', menuName);
        data.append('menuPrice', menuPrice);
        data.append('menuStock', menuStock);
        data.append('menuBanner', menuBanner);
        data.append('categoryID', categoryID);
        axios.post(API_URL + 'menu/add', data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => navigate('/admin'))
        .catch(error => console.log(error));
    }

    function changeCategory(e){
      if(e.target.value === 'Makanan'){
        setCategoryId('1')
      }else if(e.target.value === 'Minuman'){
        setCategoryId('2')
      }
    }

  return (
    <div className='container-addData'>
    <div className='title-add'>
      <h1>Tambah Data Makanan <br/> atau Minuman</h1>
    </div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Pilih kategori</Form.Label>
        <Form.Select onChange={(e) => changeCategory(e)}>
          <option>Makanan</option>
          <option>Minuman</option>
        </Form.Select>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Password" value={categoryID} onChange={(e) => setCategoryId(e.target.value)}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Makanan/Minuman</Form.Label>
        <Form.Control type="text" placeholder="Nama Makanan/Minuman" value={menuName}  onChange={(e) => setMenuName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Harga Makanan/Minuman</Form.Label>
        <Form.Control type="number" placeholder="Harga Makanan/Minuman" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stock Makanan/Minuman</Form.Label>
        <Form.Control type="number" placeholder="Stok Makanan/Minuman" value={menuStock} onChange={(e) => setMenuStock(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Masukan Foto</Form.Label>
        <Form.Control type="file" multiple onChange={(e) => setmenuBanner(e.target.files[0])}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={nambahData} >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddData;