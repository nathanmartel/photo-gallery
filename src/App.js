import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import imageData from './data.js';
import SelectOptionItem from './SelectOptionItem.js';
import './bootstrap-reboot.min.css';
import './App.css';
import './gallery.css';

export default class App extends Component {
  state = { selected: null };

  render() {
    const imageNodes = imageData
      .filter(image => {
        if (!this.state.selected) return true;
        return image.keyword === this.state.selected;
      });

    const imageNodesTwo = imageData
      .filter(image => {
        if (!this.state.selectedTwo) return true;
        return image.horns === this.state.selectedTwo;
      });

// This works but feels super-wrong and inefficient...
    const keyWords = [];
    imageData.map(image => { if (!keyWords.includes(image.keyword)) { 
      keyWords.push(image.keyword); 
      }
      return true;
    });
    console.log(keyWords);

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };    

    const handleChangeTwo = e => {
      this.setState({ selectedTwo: e.target.value });
    };    
  
    return (
      <div>
        <Header />
        <section className="options">
            <select className="select-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              {/* AAAARRRGGHHHHH */}
              {/* { keyWords.forEach(item => <SelectOptionItem />) } */}
              <option value="narwhal">Narwhal</option>
              <option value="rhino">Rhino</option>
              <option value="unicorn">Unicorn</option>
              <option value="unilego">Unilego</option>
              <option value="triceratops">Triceratops</option>
              <option value="markhor">Markhor</option>
              <option value="mouflon">Mouflon</option>
              <option value="addax">Addax</option>
              <option value="chameleon">Chameleon</option>
              <option value="lizard">Lizard</option>
              <option value="dragon">Dragon</option>
              <option value="none">none</option>
            </select>
            <select className="select-filter" onChange={handleChangeTwo}>
              <option value="" defaultValue>
                All Horns
              </option>
              {/* AAAARRRGGHHHHH */}
              {/* { keyWords.forEach(item => <SelectOptionItem />) } */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </section>
        <ImageList imageData={imageNodes} />
        <ImageList imageData={imageNodesTwo} />
      </div>
    );
  }
}
