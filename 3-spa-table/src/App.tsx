import { Button, Input, Popconfirm, Table } from "antd";
import useDummy from "./stores/hooks";
import { useState } from "react";
import Add from "./components/add";
import Update from "./components/update";

function App() {
  const { data, setData } = useDummy();

  const [search, setSearch] = useState("");
  const [isModalAddOpen, setModalAddOpen] = useState(false);
  const [item, setItem] = useState<{ id: number; isOpen: boolean }>({
    id: 0,
    isOpen: false,
  });

  return (
    <>
      <Button onClick={() => setModalAddOpen(true)}>Tambah</Button>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />

      <Table
        dataSource={data
          .map((item) => ({ ...item, key: item.id }))
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()}
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
          {
            title: "Action",
            key: "id",
            render: ({ id }) => (
              <div style={{ display: "flex", gap: "5px" }}>
                <Button
                  type="primary"
                  onClick={() => setItem({ id, isOpen: true })}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Delete the user"
                  description="Are you sure to delete this user?"
                  onConfirm={() =>
                    setData(data.filter((item) => item.id !== id))
                  }
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>
              </div>
            ),
          },
        ]}
      />
      <Add
        isModalOpen={isModalAddOpen}
        handleClose={() => setModalAddOpen(false)}
      />
      <Update
        id={item.id}
        isModalOpen={item.isOpen}
        handleClose={() => setItem({ id: 0, isOpen: false })}
      />
    </>
  );
}

export default App;
