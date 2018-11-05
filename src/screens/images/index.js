import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';
import Loading from '~/components/loading';
import api from '~/services/api';
import { IMAGES_URL } from '~/api-url';

type State = {
  loaded: boolean,
  previewVisible: boolean,
  previewImage: string,
  fileList: array
};

class ImagesScreen extends Component<State> {
  state = {
    loaded: false,
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ]
  };

  componentDidMount() {
    api
      .get(IMAGES_URL)
      .then(() => {
        // this.setState({ fileList: images });
      })
      .catch(e => {
        console.error(e);
        alert('Error on load data!');
      })
      .finally(() => {
        this.setState({ loaded: true });
      });
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <>
        {this.state.loaded ? (
          <div className="clearfix">
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default ImagesScreen;
