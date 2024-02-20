import React from 'react';
import { Container,Button} from 'react-bootstrap';
import './Home.css';
//import Card from '../UI/Card/Card'

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
    <div className='tour-item' key={index}>
      <span >{tour.date}</span>
      <span >{tour.city}</span>
      <span >{tour.venue}</span>
      <Button>Buy Tickets</Button>
    </div>
  ));

  return (
 
    <section className='tours'>
      <div className='tours-header'>
      <h2 className='header-title'>
            Tours
          </h2>       
      </div> 
      <div className='tours-container'>
        <Container>{availableTours}</Container>
      </div>
    </section>
 
  );
};

export default AvailableTours;
