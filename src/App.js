import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import ImageList from './ImageList.js';
import imageData from './data.js';
import './bootstrap-reboot.min.css';
import './App.css';
import './gallery.css';

export default class App extends Component {
  render() {
    // imageData.map(image => <ImageItem creature = {image} />);
  
    return (
      <div>
        <Header />
        <ImageList imageData={imageData} />
      </div>
    );
  }
}
