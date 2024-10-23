import { Table } from "antd";
import { useEffect, useState } from "react";

type ItemType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

type DataType = ItemType[];

const getData = fetch("https://gorest.co.in/public/v2/users")
  .then((res) => res.json())
  .catch(() => []) as Promise<DataType>;

function App() {
  const [data, setData] = useState<DataType>([]);

  useEffect(() => {
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <Table
        dataSource={data}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
        ]}
      />
    </>
  );
}

export default App;
