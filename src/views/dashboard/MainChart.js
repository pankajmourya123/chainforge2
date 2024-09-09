import React, { useState } from 'react';
import { Table, Dropdown, Button, Pagination } from 'react-bootstrap';
import { CAvatar, CTableRow, CTableDataCell } from '@coreui/react';

const tableExample = [
  {
    avatar: { src: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'success' },
    user: { name: 'John Doe', email: 'john.doe@example.com', new: false, registered: '10/01/2021' },
    referredId: 3363,
    status: 'Unpaid',
    value: 9106.99,
    earnings: 705.15,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'success' },
    user: { name: 'Jane Smith', email: 'jane.smith@example.com', new: false, registered: '11/15/2020' },
    referredId: 5361,
    status: 'Paid',
    value: 6447.15,
    earnings: 777.46,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/men/3.jpg', status: 'success' },
    user: { name: 'Michael Johnson', email: 'michael.johnson@example.com', new: false, registered: '03/05/2021' },
    referredId: 7745,
    status: 'Pending',
    value: 8003.00,
    earnings: 605.00,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/women/4.jpg', status: 'success' },
    user: { name: 'Emily Davis', email: 'emily.davis@example.com', new: true, registered: '05/19/2021' },
    referredId: 2499,
    status: 'Unpaid',
    value: 12050.75,
    earnings: 890.50,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'success' },
    user: { name: 'Daniel Brown', email: 'daniel.brown@example.com', new: false, registered: '09/25/2020' },
    referredId: 9843,
    status: 'Paid',
    value: 7021.50,
    earnings: 521.75,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/women/6.jpg', status: 'success' },
    user: { name: 'Sophia Wilson', email: 'sophia.wilson@example.com', new: false, registered: '07/12/2020' },
    referredId: 2254,
    status: 'Pending',
    value: 6552.45,
    earnings: 515.25,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/men/7.jpg', status: 'success' },
    user: { name: 'James Miller', email: 'james.miller@example.com', new: true, registered: '08/17/2021' },
    referredId: 1598,
    status: 'Unpaid',
    value: 13200.50,
    earnings: 945.80,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/women/8.jpg', status: 'success' },
    user: { name: 'Olivia Moore', email: 'olivia.moore@example.com', new: false, registered: '12/30/2020' },
    referredId: 4745,
    status: 'Paid',
    value: 9745.90,
    earnings: 789.50,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/men/9.jpg', status: 'success' },
    user: { name: 'Lucas Taylor', email: 'lucas.taylor@example.com', new: true, registered: '06/20/2021' },
    referredId: 7586,
    status: 'Pending',
    value: 14230.80,
    earnings: 1123.00,
  },
  {
    avatar: { src: 'https://randomuser.me/api/portraits/women/10.jpg', status: 'success' },
    user: { name: 'Ava Anderson', email: 'ava.anderson@example.com', new: false, registered: '02/14/2021' },
    referredId: 6347,
    status: 'Paid',
    value: 15670.45,
    earnings: 1235.35,
  },
];

function MainChart() {
  const [pageSize, setPageSize] = useState(10); // Set initial page size to 10

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    // Handle the logic to update the table with new page size here
  };

  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
    // Implement export logic here
  };

  const paginationItems = [];
  for (let number = 1; number <= 8; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === 1}>
        {number}
      </Pagination.Item>
    );
  }

  const border = {
    border: "2px solid grey", // Example: black border, 2px thick
    borderRadius: "5px",
    padding: "10px", // Optional: adds rounded corners
  };

  return (
    
    <div className="container mt-4" style={border}>
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="mb-2 mb-md-0">Referred users</div>
      <div className="d-flex flex-column flex-md-row gap-2">
        {/* Page Size Dropdown */}
        <Dropdown className="mb-2 mb-md-0">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {pageSize}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePageSizeChange(10)}>10</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePageSizeChange(25)}>25</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePageSizeChange(50)}>50</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePageSizeChange(100)}>100</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Export Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Export
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleExport('Print')}>Print</Dropdown.Item>
            <Dropdown.Item onClick={() => handleExport('CSV')}>CSV</Dropdown.Item>
            <Dropdown.Item onClick={() => handleExport('Excel')}>Excel</Dropdown.Item>
            <Dropdown.Item onClick={() => handleExport('Copy')}>Copy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>

    {/* Table */}
    <div className="table-responsive mt-3">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Users</th>
            <th>Referred ID</th>
            <th>Status</th>
            <th>Value</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {tableExample.slice(0, pageSize).map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>
                <div className="d-flex align-items-center">
                  <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} className="me-2" />
                  <div>
                    <div>{item.user.name}</div>
                    <div className="small text-body-secondary">{item.user.email}</div>
                  </div>
                </div>
              </CTableDataCell>
              <CTableDataCell>{item.referredId}</CTableDataCell>
              <CTableDataCell>
                <span className={item.status === 'Paid' ? 'badge bg-success' : item.status === 'Unpaid' ? 'badge bg-warning' : 'badge bg-danger'}>
                  {item.status}
                </span>
              </CTableDataCell>
              <CTableDataCell>${item.value.toLocaleString()}</CTableDataCell>
              <CTableDataCell>${item.earnings.toLocaleString()}</CTableDataCell>
            </CTableRow>
          ))}
        </tbody>
      </Table>
    </div>

    {/* Pagination at the Bottom */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
      <Pagination>{paginationItems}</Pagination>
      <Button variant="danger" className="mt-2 mt-md-0">Buy Now</Button>
    </div>
  </div>
);

}

export default MainChart;
