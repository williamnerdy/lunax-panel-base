import React from 'react';
import { Modal, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const FormItem = Form.Item;

class ModalForm extends React.Component {
  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input the name!'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Age">
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: 'Please input the age!'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Address">
            {getFieldDecorator('address', {
              rules: [
                {
                  message: 'Please input the address!'
                }
              ]
            })(<TextArea />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(ModalForm);
