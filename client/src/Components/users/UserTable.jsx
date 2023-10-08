import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import UserService from "../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUserAdd, AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//onCreation complete of this Component. The first method react useEffect

const UserTable = () => {

    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPersonId, setSelectedPersonId] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const persons = await UserService.getAll();
        setPersons(persons?.data);
    }

    const selectClickHandler = (event, person) => {
        navigate({
            pathname: `/userForm`,
            state: { user: person }
        });
    }

    const handleConfirmDelete = () => {
        UserService.remove(selectedPersonId)
            .then((res) => {
                toast.success(res?.data?.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
                loadUsers();
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to delete person"); // Displaying an error toast message using react-toastify
            }).finally(() => {
                setShowModal(false);
                setSelectedPersonId(0);
            });
    }

    const deleteClickHandler = (event, id) => {
        setSelectedPersonId(id);
        setShowModal(true);
    };

    return (
        <>
            <div className="container">
                <h3>Persons page.</h3>
                {/* <button className="btn btn-secondary btn-sm" style={{float: "left"}} onClick={addNewRecord}>Insert</button> */}
                <Link to="/userForm" className="btn btn-primary btn" style={{ float: "left" }}><AiOutlineUserAdd /></Link>
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Select</th>
                            <th>Del.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><button className="btn btn-success btn-sm" onClick={(event) => selectClickHandler(event, item)}><AiFillEdit /></button></td>
                                        <td><button className="btn btn-danger btn-sm" onClick={(event) => deleteClickHandler(event, item?.id)}><AiFillDelete /></button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <p>{person?.name}</p>
            </div>
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
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default UserTable;