import {ImagesBtns} from '../../MainPage/styledComponents'

const RockAndScissor = props => {
  const {details, imageClicked} = props
  const {id, imageUrl} = details
  const BtnClicked = () => {
    imageClicked(id)
  }
  if (id !== 'PAPER') {
    return (
      <ImagesBtns key={id} onClick={BtnClicked}>
        <img src={imageUrl} alt={id} className="imageCSS" />
      </ImagesBtns>
    )
  }
  return null
}

export default RockAndScissor
