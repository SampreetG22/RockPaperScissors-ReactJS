import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  border: 2px solid white;
  padding: 15px;
  padding-bottom:0px
  border-radius: 10px;
`

export const TextCSS = styled.p`
  margin: 2px;
  font-weight: lighter;
`

export const ScoreTextCSS = styled.p`
  color: black;
  margin: 0px 35px 0px 35px;
`

export const ScoreCSS = styled.p`
  color: 'black';
  font-size: '35px';
  margin: '0px';
  color: 'black';
  margin: '0px';
  fontsize: '35px';
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ImagesBtns = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding-top: 80px;
`
export const MainContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
`
export const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImagesBtns1 = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const PlayAgainBtn = styled.button`
  width: max-content;
  padding: 12px 30px 12px 30px;
  font-size: 13px;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
