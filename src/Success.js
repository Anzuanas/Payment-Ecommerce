import React from 'react'
import styled from 'styled-components'

const Success = () => {


  const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  `
  
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const Styledimg = styled.img`
    width: 52px;
    border-radius: 50%;
    margin-bottom: 10px;
  `


  const Done = styled.div`
    background-color: teal;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 22px;
  `
  const Desc = styled.p`
    
  `


  return (
    <Container>
      <Wrapper>
        <Styledimg src="https://www.shutterstock.com/image-illustration/chocolate-letter-m-isolated-on-260nw-64654888.jpg" alt="" />
        <Done>
          Successfull.
        </Done>
        <Desc>
          Your order is being prepared. Thanks for choosing Mocca.
        </Desc>
      </Wrapper>
    </Container>
  )
}

export default Success
