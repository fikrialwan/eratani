import { useEffect, useState } from "react";
import { IDummy } from "../interfaces/dummy.interface";
import useDummy from "../stores/hooks";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  message,
  Modal,
  Select,
} from "antd";

interface Props {
  id: number;
  isModalOpen: boolean;
  handleClose: () => void;
}

export default function Update({ isModalOpen, handleClose, id }: Props) {
  const [form] = Form.useForm();
  const { data, setData } = useDummy();

  const statusValue = Form.useWatch("status", form);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const item = data.find((item) => item.id === id);
    form.setFieldsValue({
      name: item?.name,
      email: item?.email,
      gender: item?.gender,
      status: item?.status === "active",
    });
  }, [id, data, form]);

  const onFinish: FormProps<IDummy>["onFinish"] = async (values) => {
    setLoading(true);
    const payload = {
      ...values,
      id,
      status: statusValue ? "active" : "inactive",
    };

    setData(data.map((item) => (item.id === id ? payload : item)));

    message.success("Successfully updated");
    form.resetFields();

    setLoading(false);
    handleClose();
  };

  return (
    <Modal
      title="Update"
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<IDummy>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IDummy>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item<IDummy>
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

        <Form.Item<IDummy> name="status" valuePropName="checked" label="Status">
          <Checkbox>{statusValue ? "Active" : "Inactive"}</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}