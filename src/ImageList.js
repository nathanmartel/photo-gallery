import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
    return <ul className='data-list'>
      { this.props.imageData.map(image => <ImageItem creature = {image} />) }
    </ul>
    }
}