import { Row, Table } from "antd";
// import { Gauge } from "@ant-";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

import "./App.css";
import { Link, NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetch(
      "https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries"
    )
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // const handleAnchorClick = (event) => {};
  const configuration = {
    dataSource,
    visible: true,
    xField: "lastConnectionTime",
    yField: "stateOfCharge",
    color: "#259fc",
  };

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      sorter: (record1, record2) => record1.id.localeCompare(record2.id),

      //  render: (text) => <a href="dataSource.id">{text}</a>,

      // render: (id) => {
      //   return <a href="/row">{id}</a>;
      // },

      // render: (value) => {
      //   <NavLink to={`/App/${row.id}`}>{value}</NavLink>;
      // },

      //render: (text, record) => <a href={"" + record.id}>{text}</a>,
      // render: (text, record) => (
      //   <a href={<NavLink to={`${row.id}`} />}>{text}</a>
      // ),
      //   render: (value) => {
      //     return (
      //       <a
      //         onClick={(event) => event.stopPropagation()}
      //         href={value}
      //         target="_blank">
      //         {value}
      //       </a>
      //     );
      //   },

      // render: (value) => {
      //   return (
      //     <a
      //       onClick={handleAnchorClick}
      //       href={value.capacity}
      //       target="_blank">
      //       {value}
      //     </a>
      //   );
      // },
      render: (value) => {
        return (
          <a
            onClick={(event) => event.view(<NavLink to={Row.id} />)}
            href="./Row"
            target="_blank">
            {value}
          </a>
        );
      },
    },

    {
      key: "2",
      title: "Location",
      dataIndex: "location",
    },
    {
      key: "2",
      title: "Capacity",
      dataIndex: "capacity",
    },
    {
      key: "2",
      title: "voltage",
      dataIndex: "voltage",
    },
    {
      key: "2",
      title: "connectionStatus",
      dataIndex: "connectionStatus",
      //   render: (connectionStatus) => {
      //     return <p>{connectionStatus ? "Online" : (connectionStatus?("Pending")(connectionStatus?))}</p>;
      //   },
      filters: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
      ],
      onFilter: (value, record) => {
        return record.connectionStatus === value;
      },
    },
    {
      key: "2",
      title: "lastConnectionTime",
      dataIndex: "lastConnectionTime",
    },
    {
      key: "2",
      title: "stateOfCharge",
      dataIndex: "stateOfCharge",
      sorter: {
        compare: (record1, record2) =>
          record1.stateOfCharge - record2.stateOfCharge,
      },
    },
    {
      key: "2",
      title: "stateOfHealth",
      dataIndex: "stateOfHealth",
    },
    {
      key: "2",
      title: "recentIssues",
      dataIndex: "recentIssues",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}></Table>
      </header>
    </div>
  );
}

export default App;
