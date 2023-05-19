import {Component} from 'react'
import {ScoreCSS} from '../MainPage/styledComponents'
import './index.css'

class Score extends Component {
  state = {score: 0}

  componentDidMount() {
    const {resultText} = this.props
    if (resultText === 'YOU WIN') {
      this.setState(prevstate => ({score: prevstate.score + 1}))
    }
    if (resultText === 'YOU LOSE') {
      this.setState(prevstate => ({score: prevstate.score - 1}))
    }
  }

  /* setScore = text => {
    if (text === 'YOU WIN') {
      this.setState(prevstate => ({score: prevstate.score + 1}))
    }
    if (text === 'YOU LOSE') {
      this.setState(prevstate => ({score: prevstate.score - 1}))
    }
  } */

  render() {
    const {score} = this.state
    return (
      <ScoreCSS style={{color: 'black', margin: '0px', fontSize: '35px'}}>
        {score}
      </ScoreCSS>
    )
  }
}

export default Score
