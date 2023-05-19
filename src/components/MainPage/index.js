import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreContainer,
  TextCSS,
  ScoreTextCSS,
  ImagesContainer,
  WholeContainer,
  MainContainer1,
  ImagesBtns1,
  ImageAndText,
  PlayAgainBtn,
  RulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'
import RockAndScissor from '../ImagesList/RockAndScissor'
import Paper from '../ImagesList/Paper'
import Score from '../Score'
import './index.css'

let result = ''

class MainPage extends Component {
  state = {
    resultView: false,
    ourChoice: {},
    opponentChoice: {},
  }

  imageClicked = Id => {
    const {choicesList} = this.props
    const RPS = ['ROCK', 'PAPER', 'SCISSORS']

    const RandomNumber = Math.floor(Math.random() * 3)
    const filteredOpponent = choicesList.filter(
      each => each.id === RPS[RandomNumber],
    )
    const filteredOurItem = choicesList.filter(each => each.id === Id)
    this.setState({
      resultView: true,
      ourChoice: filteredOurItem,
      opponentChoice: filteredOpponent,
    })
  }

  playAgainClicked = () => {
    this.setState({resultView: false})
  }

  renderImagesContainer = () => {
    const {choicesList} = this.props
    return (
      <ImagesContainer>
        <div className="rockAndPaperContainer">
          {choicesList.map(each => (
            <RockAndScissor
              key={each.id}
              details={each}
              imageClicked={this.imageClicked}
            />
          ))}
        </div>
        {choicesList.map(each => (
          <Paper
            key={each.id}
            details={each}
            imageClicked={this.imageClicked}
          />
        ))}
      </ImagesContainer>
    )
  }

  getResultText = (ourId, opponentId) => {
    if (ourId === 'ROCK') {
      switch (opponentId) {
        case 'PAPER':
          result = 'YOU LOSE'
          break
        case 'SCISSORS':
          result = 'YOU WON'
          break
        default:
          result = 'IT IS DRAW'
      }
    }
    if (ourId === 'PAPER') {
      switch (opponentId) {
        case 'SCISSORS':
          result = 'YOU LOSE'
          break
        case 'ROCK':
          result = 'YOU WON'
          break
        default:
          result = 'IT IS DRAW'
      }
    }
    if (ourId === 'SCISSORS') {
      switch (opponentId) {
        case 'PAPER':
          result = 'YOU WON'
          break
        case 'ROCK':
          result = 'YOU LOSE'
          break
        default:
          result = 'IT IS DRAW'
      }
    }
    return result
  }

  renderResultsContainer = () => {
    const {ourChoice, opponentChoice} = this.state
    const getText = this.getResultText(ourChoice[0].id, opponentChoice[0].id)
    return (
      <WholeContainer>
        <MainContainer1>
          <ImageAndText>
            <p className="textCSS" style={{margin: '0px'}}>
              YOU
            </p>
            <ImagesBtns1>
              <img
                src={ourChoice[0].imageUrl}
                alt={ourChoice[0].id}
                className="imageCSS"
              />
            </ImagesBtns1>
          </ImageAndText>
          <ImageAndText>
            <p className="textCSS" style={{margin: '0px'}}>
              OPPONENT
            </p>
            <ImagesBtns1>
              <img
                src={opponentChoice[0].imageUrl}
                alt={opponentChoice[0].id}
                className="imageCSS"
              />
            </ImagesBtns1>
          </ImageAndText>
        </MainContainer1>
        <p className="textCSS" style={{marginTop: '0px', fontSize: '23px'}}>
          {getText}
        </p>
        <PlayAgainBtn onClick={this.playAgainClicked}>PLAY AGAIN</PlayAgainBtn>
      </WholeContainer>
    )
  }

  render() {
    const {resultView} = this.state
    return (
      <MainContainer>
        <ScoreContainer style={{borderRadius: '10px'}}>
          <div className="textContainer">
            <TextCSS>ROCK</TextCSS>
            <TextCSS>PAPER</TextCSS>
            <TextCSS>SCISSORS</TextCSS>
          </div>
          <div className="scoreCard">
            <ScoreTextCSS>Score</ScoreTextCSS>
            <Score resultText={result} />
          </div>
        </ScoreContainer>
        {!resultView
          ? this.renderImagesContainer()
          : this.renderResultsContainer()}
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine style={{fill: 'black'}} />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </MainContainer>
    )
  }
}

export default MainPage
