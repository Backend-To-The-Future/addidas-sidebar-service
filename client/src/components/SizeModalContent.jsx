import React, {useState} from 'react';
import styled from 'styled-components';
import SizeTable from './SizeTable.jsx'
import HowToMeasure from './HowToMeasure.jsx'


const Container = styled.div`
  max-width: 100%;
  position: relative;
  width: 100%;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #000;
`;

const H4Tag = styled.h4`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 26px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ATag = styled.a`
  background-color: transparent;
  color: rgba(0,0,0,0.8);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: underline;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ChartToggle = styled.ul`
  display: flex;
  padding-inline-start: 0px;
  margin: 0;
  font-size: 14px;
`;

const ToggleList = styled.li`
  background-color: #fff;
  border-color: rgba(0,0,0,0.5);
  box-shadow: inset 0 -2px 0 #000;
  border: 1px solid #767677;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  list-style: none;
  margin-bottom: 14px;
  position: relative;
  text-align: center;
  z-index: 1;
  &:hover {
    border-color: #000;
  }
`;

const ToggleButton = styled.button`
  height:50px;
  width:50px;
  cursor: pointer;
  background: none;
  border: none;
  align-items: flex-start;
  padding-left: 1px;
  &:hover {
    color: rgba(0,0,0,0.7);
  }

`;

const SizeModalContent = () => {

  const [inch, setInch] = useState(false);

  const handleClick = () => {
    setInch(!inch);
  }

  return (
    <Container>
      <section>
        <header>
        <H4Tag>MEN'S AND WOMEN'S ADIDAS FOOTWEAR SIZING</H4Tag>
        <h5>FIND YOUR SIZE</h5>
        <ATag>Do you know how to measure?</ATag>
        </header>
        <ChartToggle>
          <ToggleList>
            <ToggleButton onClick={handleClick}>cm</ToggleButton>
          </ToggleList>
          <ToggleList>
            <ToggleButton onClick={handleClick}>inch</ToggleButton>
          </ToggleList>
        </ChartToggle>
        <SizeTable inch={inch} />
        <p style={{color: "rgba(0,0,0,0.8)"}}>Scroll horizontally to see more.</p>
      </section>
      <section>
        <div style={{marginalBottom: "40px", borderBottom:" 1px solid #767677"}}></div>
      </section>
      <section>
        <h4 style={{fontFamily: "font-family: AdihausDIN,Helvetica,Arial,sans-serif"}}>IN BETWEEN SIZES?</h4>
        <p style={{fontFamily: "font-family: AdihausDIN,Helvetica,Arial,sans-serif", fontWeight:"200"}}>For tight fit, go one size down.</p>
        <p style={{fontFamily: "font-family: AdihausDIN,Helvetica,Arial,sans-serif" , fontWeight:"200"}}>For loose fit, go one size up.</p>
      </section>
      <section>
        <h4 style={{fontFamily: "font-family: AdihausDIN,Helvetica,Arial,sans-serif"}}>NOT THE RIGHT SIZE OR COLOR?</h4>
        <p style={{fontFamily: "font-family: AdihausDIN,Helvetica,Arial,sans-serif", fontWeight:"200"}}>No problem, return for free.</p>
      </section>
      <HowToMeasure />
    </Container>
)
  }
export default SizeModalContent;