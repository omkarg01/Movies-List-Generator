import logo from './logo.svg';
import './App.css';
import MovieCard from './components/Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const moviesList = ["Marvin's Room", 'Tucker and Dale vs Evil', 'Quills', 'The Man from Earth', 'The Quest', 'The Nine Lives of Fritz the Cat', 'Airport', 'Airport 1975', 'Paper Man', 'Atlas Shrugged: Part I', 'Bernie', 'Jeff, Who Lives at Home', "The King's Speech", 'Butter', 'Bottle Shock', 'Ghost', 'Eight Men Out', 'Earth Girls Are Easy', 'Flowers in the Attic', 'Happy, Texas', 'Into the West', 'Lucky', 'Mermaids', 'Not Without My Daughter', 'The Parking Lot Movie', "Things to Do in Denver When You're Dead", 'Humboldt County', '$5 a Day', 'The African Queen', 'A Bag of Hammers', 'Beyond Silence', 'The Experts', 'Dutch', 'Grand Canyon', 'Heartburn', 'Once Around', '9 to 5', 'School Ties', 'Sabrina', 'Sassy Pants', 'Summer School', 'To Be or Not to Be', 'True Confessions', 'Undertaking Betty', 'In a Day', 'There Goes the Neighborhood', 'Cross My Heart', 'Rat', 'Raising Arizona', 'Rabbit Hole', 'The Lincoln Lawyer', 'Wild Target', 'Memento', 'The Last of the Mohicans', 'The Last Emperor', 'Insidious', 'Heathers', 'Following', '8MM', 'Dead Man', 'Career Opportunities', 'Rubber', 'Chinatown', 'The Apostle', 'The Adventures of Ford Fairlane', "Bustin' Loose", 'Greedy', 'She-Devil', 'The Smell of Success', 'Senseless', 'Far Out Man', 'Management', 'I.Q.', 'The Golden Child', 'Tremors', 'Red Corner', 'Millennium', 'Going Berserk', 'The Thing', 'Easy Money', 'Warrior', 'The Hunt for Red October', 'Seeking Justice', 'Guns, Girls and Gambling', 'Once Upon a Time in the West', 'The Andromeda Strain', 'Dylan Dog: Dead of Night', 'Time Bandits', 'Men of War', 'Star Trek II: The Wrath of Khan', 'Star Trek III: The Search for Spock', 'Star Trek: Insurrection', 'Star Trek: Nemesis', 'The Untouchables', 'Terms of Endearment', 'Morning Glory', 'Outlaws', 'The Accused', 'October Baby', 'The Dream Team'];

  const randomNumber = () => {
    return Math.floor(Math.random() * (moviesList.length - 0) + 0);
  }

  const fetch = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=46a1d1b3&t=${moviesList[1]}`);
    console.log(data);
  }

  useEffect(() => {
    fetch();
  }, [])


  return (
    <div className="App">
      <h1>Movies List</h1>
      <h4>Generate random movies</h4>
      <header className="App-header">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </header>
      <Button variant="success" style={{ marginBlockStart: "50px" }}>Generate</Button>
    </div >
  );
}

export default App;
