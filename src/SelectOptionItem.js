import React, { Component } from 'react';

// Data Object example:
// {
// url:
// "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// title: "UniWhal",
// description: "A unicorn and a narwhal nuzzling their horns",
// keyword: "narwhal",
// horns: 1
// }


export default class SelectOptionItem extends Component {
    render() {
            return <option value="1">1</option>
        }
}

// export default class ImageList extends Component {
//     render() {
//     return <ul className='data-list'>
//       { this.props.imageData.map(image => <ImageItem creature = {image} />) }
//     </ul>
//     }
// }

// const selectOptions = keyWords.forEach(item => <option value="item">item</option>);

// const quoteNodes = this.state.quotes.map(quote => <li className="quote-item" >
// <h2>
// <img src={quote.image}
//   alt={quote.character} />
// <span>{quote.character}</span>
// </h2>
// <quote>
// {quote.quote}
// </quote>
// </li >)