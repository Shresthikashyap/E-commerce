import React from 'react';
import { Container,Card,Button} from 'react-bootstrap';
import './Home.css';

const Tours = [
  {
    date: 'July 16',
    city: 'DETROIT, MI',
    venue: 'DTE ENERGY MUSIC THEATRE',
  },
  {
    date: 'JUL19',
    city: 'TORONTO,ON',
    venue: 'BUDWEISER STAGE',
  },
  {
    date: 'JUL 22',
    city: 'BRISTOW, VA',
    venue: 'JIGGY LUBE LIVE',
  },
  {
    date: 'JUL 29',
    city: 'PHOENIX, AZ',
    venue: 'AK-CHIN PAVILION',
  },
  {
    date: 'AUG 2',
    city: 'LAS VEGAS, NV',
    venue: 'T-MOBILE ARENA',
  },{
    date: 'AUG 7',
    city: 'CONCORD, CA',
    venue: 'CONCORD PAVILION'
  }
];


const AvailableTours = () => {

  const availableTours = Tours.map((tour, index) => (
          
          <li key={Math.random().toString()}  sm={3}>
            <Card className='shadow-lg'>
              <Card.Body>
              <div className='tour-info'>
                <div className='tour-date'>{tour.date}</div>
                <div className='tour-city'>{tour.city}</div>
                <div className='tour-venue'>{tour.venue}</div>
              </div>
               <Button>Buy Tickets</Button>
            </Card.Body>
            </Card>
          </li>
  ));

  return (
    <section>
      <div>
        <Container className='mt-4'>
          <ul className='tour-list'>
                {availableTours}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default AvailableTours;
