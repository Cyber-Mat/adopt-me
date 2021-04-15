import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class Details extends Component {
  state = { loading: true };

  componentDidMount() {
    pet.animal(Number(this.props.id)).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='details'>
          <SkeletonTheme color='#d8e3e7' highlightColor='#f4f4f4'>
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>

            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        </div>
      );
    }

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className='details'>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
