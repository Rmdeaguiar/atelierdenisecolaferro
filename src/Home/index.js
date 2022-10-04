import './styles.css';
import Header from '../Components/Header'
import Cards from '../Components/Cards'

function Home() {
  return (
    <>
      <Header />
      <div className='container-home'></div>
      <div className='home-background'></div>
      <Cards />
    </>


  );
}

export default Home;
