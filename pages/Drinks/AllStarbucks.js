import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import NavBar from '../Navbar'
import Head from 'next/head'


function AllStarbucks() {
    return (

        <div>
            <Head>
                <title>hack-my-coffee / All Starbucks Drinks</title>
            </Head>
            <NavBar />
            <br />
            <br />
            <br />
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="/iced-starbucks-drink.png" />
    <Card.Body>
      <Card.Title>TikTok White Mocha 😈</Card.Title>
      <Card.Text>
        Hi, can I get a grande cold brew (or iced coffee) with 4 pumps white mocha and sweet cream?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Starbucks <img className="logoStar" src="/starbucks.svg" alt="starbucks logo" /></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/hot-starbucks-drink.png" />
    <Card.Body>
      <Card.Title>Dolce de leche cake 🎂</Card.Title>
      <Card.Text>
      Hi, can I get a grande hot brève vanilla latte with 2 pumps of cinnamon dolce?{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Starbucks <img className="logoStar" src="/starbucks.svg" alt="starbucks logo" /></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/iced-starbucks-drink.png" />
    <Card.Body>
      <Card.Title>Iced Quad Blonde Espresso 💣</Card.Title>
      <Card.Text>
      Hi, I would like an iced blonde quad ristretto shots in a venti cup, with light ice and extra sweet cream cold foam
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starbucks <img className="logoStar" src="/starbucks.svg" alt="starbucks logo" /></small>
    </Card.Footer>
  </Card>
</CardDeck>
<style jsx>{`
        .text-muted,
        .logoStar {
            margin: 2px;
            padding: 2px;
            color: inherit;
            text-decoration: none;
            display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          
        }
      `}</style>
        </div>
    )
}

export default AllStarbucks

// 800 x 600 is a good image size for images of drinks