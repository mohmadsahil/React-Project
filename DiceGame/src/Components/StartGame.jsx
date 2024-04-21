import styled from "styled-components"

const Container = styled.div`
    height: auto;
    width: 100%;
    background-color: red;
    display: flex;
    .imgContainer{
        height: 100%;
        width: 50%;
        background-color: aqua;
    }
    .diceImg{
        height: auto;
        width: 100%;
    }
`

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 30px 10px 30px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
`

const Title = styled.h1`
    font-size: 50px;
`

export const StartGame = () => {
  return (
    <Container>
        <div className="">
            <img className="diceImg" src="/Images/Dice.png"/>
        </div>
        <div>
            <Title>Start Game</Title>
            <Button>Start</Button>
        </div>
    </Container>
  )
}
