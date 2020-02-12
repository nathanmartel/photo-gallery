import React, { Component } from 'react';

// Data object:
// {
// url:
// "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// title: "UniWhal",
// description: "A unicorn and a narwhal nuzzling their horns",
// keyword: "narwhal",
// horns: 1
// }


export default class ImageItem extends Component {
    render() {
    return <li>
        <img src={this.props.creature.url} alt={this.props.creature.title} />
        <h2>{this.props.creature.title}</h2>
        <p>{this.props.creature.description}</p>
        <p>Horns: {this.props.creature.horns}</p>
    </li>
    }
}