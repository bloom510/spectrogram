import React, { Component } from 'react';
import { Spectrogram, Uploader, Downloader, PlaybackCtrl } from './components';
import { Layout, List, Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const SpectrogramStyles = {
  width: '95vw',
  height: '50vh',
  border: '1px solid #ccc',
  margin: '0 auto'
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      playing: false
    }
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
    this.handlePlayback = this.handlePlayback.bind(this);
  }
  onUploadSuccess(file) {
    this.setState({ files: this.state.files.concat(file) }, () => console.log(this.state.files));
  }
  handlePlayback() {
    this.setState({ playing: !this.state.playing });
  }
  render() {
    // TODO; GRID LAYOUT FOR CONTENT, FLEX LAYOUT FOR DISTRIBUTING BUTTONS
    return (
      <div style={{ padding: '1% 2%', backgroundColor: '#f5f5f5', height:'100vh' }}>
        <Spectrogram style={SpectrogramStyles} />
        <div style={{ backgroundColor: 'white', width: '95vw', margin: '0 auto' }}>
          <List
            header={
              <div style={{ width: '95vw', margin: '0 auto' }}>
                <Uploader
                  onUploadSuccess={this.onUploadSuccess}
                />
                <Downloader style={{ marginLeft: '1vw' }} />
                <PlaybackCtrl
                  handlePlayback={this.handlePlayback}
                  playing={this.state.playing}
                  style={{ marginLeft: '1vw' }}
                />
              </div>
            }
            // footer={<div>Footer</div>}
            bordered
            dataSource={this.state.files}
            renderItem={file => (
              <List.Item>
                {file.name}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;

