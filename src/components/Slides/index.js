import {Component} from 'react'
import {v4} from 'uuid'
import Header from '../Header'
import SlideTab from '../SlideTab'
import CurrentSlide from '../CurrentSlide'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {activeTab: initialSlidesList[0], slidesList: initialSlidesList}

  changeActiveTab = id => {
    const {slidesList} = this.state
    const activeTab = slidesList.find(slide => slide.id === id)
    this.setState({activeTab})
  }

  onHeadingChange = (id, text) => {
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(slide => {
        if (slide.id === id) {
          return {...slide, heading: text}
        }
        return slide
      }),
      activeTab: {...prevState.activeTab, heading: text},
    }))
  }

  onDescChange = (id, text) => {
    console.log(id)
    console.log(text)
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(slide => {
        if (slide.id === id) {
          return {...slide, description: text}
        }
        return slide
      }),
      activeTab: {...prevState.activeTab, description: text},
    }))
  }

  renderSlidesTabs = () => {
    const {slidesList, activeTab} = this.state
    return (
      <ol className="tabs-panel-container">
        {slidesList.map((slide, index) => (
          <SlideTab
            slideDetails={slide}
            key={slide.id}
            isActive={activeTab.id === slide.id}
            onActiveTab={this.changeActiveTab}
            slideIndex={index}
          />
        ))}
      </ol>
    )
  }

  onNewSlide = () => {
    const {activeTab, slidesList} = this.state
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }
    const actIndex = slidesList.findIndex(slide => slide.id === activeTab.id)
    this.setState(prevState => ({
      slidesList: [
        ...prevState.slidesList.slice(0, actIndex + 1),
        newSlide,
        ...prevState.slidesList.slice(actIndex + 1),
      ],
      activeTab: newSlide,
    }))
  }

  render() {
    const {activeTab, slidesList} = this.state
    console.log(slidesList)
    return (
      <div className="bg-container">
        <Header />
        <div className="slides-container">
          <div className="btn-container">
            <button type="button" className="new-btn" onClick={this.onNewSlide}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
                className="plus-icon"
              />
              New
            </button>
          </div>
          <div className="slides-panel-container">
            {this.renderSlidesTabs()}
            <div className="current-slide-container">
              <CurrentSlide
                key={activeTab.id}
                currentSlide={activeTab}
                HeadingChange={this.onHeadingChange}
                DescChange={this.onDescChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
