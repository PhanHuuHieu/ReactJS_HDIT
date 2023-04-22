import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPageinate = (props) => {
    const { listUsers, pageCount } = props

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1)
        console.log(`User requested page number ${event.selected}, which is offset`);
    };
    // const [pageCount, setPageCount] = useState(0);

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary"
                                            onClick={() => props.handleClickButtonView(item)}
                                        >View</button>
                                        <button className="btn btn-warning mx-3" onClick={() => props.handleClickButtonUpdate(item)}>
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickButtonDelete(item)}

                                        > Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 && <tr colSpan={'4'}><td>Not found</td></tr>}
                </tbody>
            </table>
            {/* d-flex justify-content-center */}
            <div className="user-pagination ">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>

        </>
    )
}
export default TableUserPageinate;