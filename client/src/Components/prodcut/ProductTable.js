import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import Stack from '@mui/material/Stack';
import Modal from "react-bootstrap/Modal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableFooter, TablePagination } from "@mui/material";


const ProductTable = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(0);

  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await ProductService.getProducts();
      console.log(response);
      setProducts(response?.data?.products === null ? [] : response?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteProduct = (id) => {
    setShowModal(true);
    setProductId(id);
  }

  // const editProduct = (product) => {
  //   history.push({
  //     pathname: `/productForm`,
  //     state: { product: product }
  //   });
  // }

  const handleConfirmDelete = async () => {

    await ProductService.remove(productId);
    setShowModal(false);
    fetchProducts();

  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage);

  return (
    <>
      <h3>Products</h3>
      <TableContainer>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Des.</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Cat. Name</TableCell>
              <TableCell>Supp. Name</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.product_id}>
                  <TableCell>{product.product_name}</TableCell>
                  <TableCell>{product.product_desc}</TableCell>
                  <TableCell>{product.product_price}</TableCell>
                  <TableCell>{product.product_qty}</TableCell>
                  <TableCell>{product.category_name}</TableCell>
                  <TableCell>{product.supplier_name}</TableCell>
                  {/* <TableCell><Button variant="contained" color="" onClick={() => { editProduct(product) }}>Edit</Button></TableCell> */}
                  <TableCell><Button variant="contained" color="secondary" onClick={() => { handleDeleteProduct(product.product_id) }}>Del.</Button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className="w-100">
        <TableFooter className="footer text-center w-100">
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              colSpan={6}
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              labelRowsPerPage="Rows per page:"
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} of ${count}`
              }
            />
          </TableRow>
        </TableFooter>
      </TableContainer>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>Confirm </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={() => { handleConfirmDelete() }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  );
};

export default ProductTable;
