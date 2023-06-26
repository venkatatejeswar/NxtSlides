import {Component} from 'react'
import './index.css'

class CurrentSlide extends Component {
  state = {headingFocus: false, descFocus: false}

  onHeadingChange = e => {
    const {HeadingChange, currentSlide} = this.props
    const {id} = currentSlide
    HeadingChange(id, e.target.value)
  }

  onDescChange = e => {
    const {DescChange, currentSlide} = this.props
    const {id} = currentSlide
    DescChange(id, e.target.value)
  }

  changeHeadingFocus = () => {
    this.setState(prevState => ({headingFocus: !prevState.headingFocus}))
  }

  changeDescFocus = () => {
    this.setState(prevState => ({descFocus: !prevState.descFocus}))
  }

  render() {
    const {currentSlide} = this.props
    const {heading, description} = currentSlide
    const {headingFocus, descFocus} = this.state
    return (
      <div className="current-slide">
        {headingFocus ? (
          <input
            type="text"
            value={heading}
            className="heading-input"
            onChange={this.onHeadingChange}
            onBlur={this.changeHeadingFocus}
          />
        ) : (
          <h1 onClick={this.changeHeadingFocus} className="heading-input">
            {heading}
          </h1>
        )}
        {descFocus ? (
          <input
            type="text"
            value={description}
            className="desc-input"
            onChange={this.onDescChange}
            onBlur={this.changeDescFocus}
          />
        ) : (
          <p className="desc-input" onClick={this.changeDescFocus}>
            {description}
          </p>
        )}
      </div>
    )
  }
}

export default CurrentSlide
