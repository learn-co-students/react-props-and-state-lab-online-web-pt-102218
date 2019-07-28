import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.selectType= this.selectType.bind(this)
    this.handleClick= this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onFindPetsClick(e)
  }

  selectType(e) {
    this.props.onChangeType(e.target.value)
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.selectType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
