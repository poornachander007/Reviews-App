// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeUserId: 0}

  leftArrowClick = () => {
    const {activeUserId} = this.state
    if (activeUserId !== 0) {
      this.setState({activeUserId: activeUserId - 1})
    }
  }

  rightArrowClick = () => {
    const {activeUserId} = this.state
    const {reviewsList} = this.props
    if (activeUserId !== reviewsList.length - 1) {
      this.setState({activeUserId: activeUserId + 1})
    }
  }

  render() {
    const {activeUserId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeUserId
    ]
    return (
      <div className="app_container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <div className="arrowsContainer">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.leftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrowImg"
            />
          </button>

          <p className="name"> {username} </p>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.rightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrowImg"
            />
          </button>
        </div>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
