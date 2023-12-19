import './App.css';
import requests from './Requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div>

    <Nav/>

    <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row isPoster={true} title="Trending Movies" fetchUrl={requests.fetchTrending} />

      <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests. fetchActionMovies} />

      <Row title="Comedy Movie" fetchUrl={requests. fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />

      <Row title="Romance MOvies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
