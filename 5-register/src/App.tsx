import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  message,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

interface FieldType {
  name: string;
  email: string;
  gender: string;
  status: boolean;
}

interface PayloadType {
  name: string;
  email: string;
  gender: string;
  status: string;
}

const regsiter = (payload: PayloadType) =>
  fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());

function App() {
  const [form] = useForm();

  const statusValue = Form.useWatch("status", form);

  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    const payload = {
      ...values,
      status: statusValue ? "active" : "inactive",
    };

    const res = await regsiter(payload);

    if (res.id) {
      message.success("Register successfully");
      form.resetFields();
    } else {
      message.error("Register failed");
    }

    setLoading(false);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
        >
          <Select
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
            ]}
            allowClear={true}
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="status"
          valuePropName="checked"
          label="Status"
        >
          <Checkbox>{statusValue ? "Active" : "Inactive"}</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default App;
