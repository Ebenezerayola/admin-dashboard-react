import React from "react";
import { Form, Select, Button, Alert } from "antd";
import { useQuery, useMutation } from "react-query";
import { getAllCurrency, addCurrencyPair } from "../../server";

export const CurrencyPairForm = () => {
  const { isLoading, data, error } = useQuery("currencies", getAllCurrency);
  const mutation = useMutation(addCurrencyPair);

  const onFinish  = (values) => {
      mutation.mutate(values);
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      {mutation.error &&
      <Alert
      type="error"
      message={mutation.error.message}
      />
      }
      {mutation.data &&
      <Alert
      type="success"
      message={mutation.data.message}
      />
      }
      <Form name="currencypair" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="buying"
          label="Select Buying Currency"
          rules={[
            {
              required: true,
              message: "Select buying currency",
            },
          ]}
        >
          <Select allowClear loading={isLoading}>
            {data &&
              data.map((item) => (
                <Select.Option value={item.currency}>{item.currency}</Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="selling"
          label="Select selling currency"
          rules={[
            {
              required: true,
              message: "Select selling currency",
            },
          ]}
        >
          {data &&
            data.map((item) => (
              <Select.Option value={item.currency}>{item.currency}</Select.Option>
            ))}
        </Form.Item>

        <Form.Item>
          <Button block type="primary" loading={mutation.isLoading}>
            Add Currency Pair
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
