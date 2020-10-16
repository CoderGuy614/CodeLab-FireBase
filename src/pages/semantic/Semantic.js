import React from 'react'
import './semantic.scss'
import {Button, Card, Icon, Image} from 'semantic-ui-react'


const Semantic = () => {
    return (
        <div>
        <div className="buttons-container">
        <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button>Basic</Button>
        </div>
      <div className="cards-container">
      <Card>
    <Image src="https://source.unsplash.com/random/1000x1000" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </div>
        </div>
    
    )
}

export default Semantic
