import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/admin.css";
import Navbar from "../component/Navbar/navbar";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Admin() {
  const [menu, setmenu] = useState([]);

  function readMenu(){
    axios
      .get(API_URL + "menu")
      .then((response) => setmenu(response.data.menu))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    readMenu()
  }, []);
  
  const deleteMenu = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure you delete this?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(API_URL + "menu/delete/" + item.id)
        .then((response) => {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )          
          readMenu()
        })
        .catch((error) => {
          console.log(error);
          alert("Data gagal dihapus");
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  return (
    <div className="admin">
      <Navbar />
      <div className="container-admin">
        <Link to={"/add"}>
          <Button variant="primary mt-4 mb-4">Tambah Data</Button>
        </Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nama Makanan</th>
              <th>Kategori</th>
              <th>Stock Makanan</th>
              <th>Harga Makanan</th>
              <th>Gambar Makanan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.menuName}</td>
                <td>{item.categoryID === 1 ? 'Makanan' : "Minuman"}</td>
                <td>{item.menuStock}</td>
                <td>{item.menuPrice}</td>
                <td><img src={item.menuBanner}/></td>
                <td>
                <Link to={"/updatedata/" + item.id}>
                  <Button variant="primary">Edit</Button>
                </Link>
                  <Button variant="danger" className="m-lg-2"
                  onClick={() => {deleteMenu(item)}}
                  >Delete</Button>{" "}
                </td>
              </tr>
              ))}
            {/* <tr>
              <td>1</td>
              <td>Cumi Goreng</td>
              <td>100.000</td>
              <td>
                <Button variant="primary">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Admin;
