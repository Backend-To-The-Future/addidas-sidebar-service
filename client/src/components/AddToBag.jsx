import React from 'react';
import styled from 'styled-components';
import AddToBagModal from './AddToBagModal.jsx';

const ButtonFlex = styled.div`
  display: flex;
  margin-top: 20px;
  z-index: 0;
  }
`;

const AddToBagButton = styled.button`
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  justify-content: space-between;
  width: 100%;
  background-color: #000;
  border-color: #fff;
  color: #fff;
  height: 50px;
  align-items: center;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  min-height: 50px;
  padding: 0 21px;
  box-shadow: 3px 3px grey;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  &:hover {
    color: gray;
`;

const Icon = styled.svg`
  flex-shrink: 0;
  margin-left: 20px;
  display: inline-block;
  height: 24px;
  vertical-align: text-top;
  width: 24px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
`;

const IconPath = styled.path`
  d: path("M17.59 7l5 5-5 5M0 12h22");
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  stroke-width: 2;
`;

const WishList = styled.div`
  margin-left: 10px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  line-height: 47px;
  width: 50px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  border-radius: 0;
  min-height: 50px;
  // position: relative;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
`;

const WisHListToggle = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%
`;

const HeartButton = styled.svg`
  display: inline-block;
  height: 26px;
  vertical-align: text-top;
  width: 26px;
`;

const HeartIcon = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-miterLimit: 10;
  stroke-width: 2;
  d: path("M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z")

`;

const FilledHeartIcon = styled.path`
  fill: currentColor;
  stroke: none;
  stroke-miterLimit: 10;
  stroke-width: 2;
  d: path("M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z")

`;

const AddToBag = ({product}) => {
  const [display, setDisplay] = React.useState(false)

  const handleClick = () => {
    setDisplay(!display)
  }

  const modalRef = React.useRef();

  const handleIsOpen = () => {
    modalRef.current.open()
  }

  return(
    <ButtonFlex>
      <AddToBagButton onClick={handleIsOpen}>
        Add to Bag
        <Icon viewBox="0 0 24 24">
            <IconPath />
        </Icon>
      </AddToBagButton>
      <AddToBagModal ref={modalRef} product={product}/>
      <WishList>
        <WisHListToggle>
          <HeartButton viewBox=" 0 0 20 20" onClick={handleClick}>
            {!display ? <HeartIcon /> : <FilledHeartIcon />}
          </HeartButton>
        </WisHListToggle>
      </WishList>
    </ButtonFlex>
  )
}

export default AddToBag;
