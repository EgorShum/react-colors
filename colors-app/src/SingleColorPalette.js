import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex',
    }
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    //return all shades of given color
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(allColors[key].filter(item => item.id === colorToFilterBy));
    }
    return shades.slice(1);
  }
  changeFormat(format) {
    this.setState({format});
  }
  render() {
    const {paletteName, emoji} = this.props.palette;
    const colorBoxes = this._shades.map(item => (
      <ColorBox key={item.id} name={item.name} background={item[this.state.format]} hideLink={true}/>
    ));
    return (
      <div className='Palette'>
        <Navbar handleChange={this.changeFormat} hideSlider={true}/>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}
export default SingleColorPalette;