import './index.css'

const SlideTab = props => {
  const {slideDetails, isActive, onActiveTab, slideIndex} = props
  const {id, heading, description} = slideDetails
  const changeTab = () => {
    onActiveTab(id)
  }
  return (
    <li
      className={isActive ? 'active-item' : 'list-item'}
      onClick={changeTab}
      testid={`slideTab${slideIndex + 1}`}
    >
      <p className="slide-index">{slideIndex + 1}</p>
      <div className="tab-item">
        <h1 className="tab-heading">{heading}</h1>
        <p className="tab-desc">{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
