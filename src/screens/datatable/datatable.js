import React, { Component } from 'react';
import { Button, Table } from 'antd';
import Loading from '~/components/loading';
import ModalForm from './modal-form';
import api from '~/services/api';
import { DATATABLE_URL } from '~/api-url';

type State = {
  loaded: boolean,
  visible: boolean,
  data: array
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
  }
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class DataTableScreen extends Component<State> {
  state = {
    loaded: false,
    visible: false,
    data: []
  };

  componentDidMount() {
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park'
      }
    ];
    this.setState({ data });

    api
      .get(DATATABLE_URL)
      .then(() => {
        // code...
      })
      .catch(e => {
        console.error(e);
        alert('Error on load data!');
      })
      .finally(() => {
        this.setState({ loaded: true });
      });
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            key: prevState.data.length + 1,
            name: values.name,
            age: values.age,
            address: values.address
          }
        ]
      }));
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <>
        {this.state.loaded ? (
          <div>
            <Button type="primary" onClick={this.showModal}>
              New
            </Button>
            <ModalForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
            <br />
            <br />
            <Table
              columns={columns}
              dataSource={this.state.data}
              onChange={onChange}
            />
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default DataTableScreen;
