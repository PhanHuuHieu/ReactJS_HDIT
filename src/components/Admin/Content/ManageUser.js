import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { Tab } from "bootstrap";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";

import { getAllUser, getUserWithPaginate } from "../../../services/apiServices"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPageinate from "./TableUserPageinate";
const ManageUser = (props) => {
    const LIMIT_USER = 5
    const [pageCount, setPageCount] = useState(0)
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [listUsers, setListUsers] = useState([])

    const [dataUpdate, setDataUpdate] = useState({})

    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [dataView, setDataView] = useState({})

    const [dataDelete, setDataDelete] = useState({})


    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1)
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUser()
        if (res.EC === "0") {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {

        let res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === "0") {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }

    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)

    }
    const handleClickButtonDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)

    }

    const handleClickButtonView = (user) => {
        setShowModalViewUser(true)
        setDataView(user)

    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    const resetViewData = () => {
        setDataView({})
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary " onClick={() => setShowModalCreateUser(true)}><FcPlus />Add new user</button>
                </div>
                <div className="table-users-container">
                    {/* <TableUser listUsers={listUsers}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                        handleClickButtonDelete={handleClickButtonDelete}
                    /> */}
                    <TableUserPageinate listUsers={listUsers}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                        handleClickButtonDelete={handleClickButtonDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />

                <ModalUpdateUser show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />

            </div>
        </div>
    )
}
export default ManageUser