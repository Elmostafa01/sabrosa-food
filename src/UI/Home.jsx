import wave from '../images/svgs/wave.svg'
import Hero from './Hero';
import Mediaicons from './Mediaicons';

function Home() {
  return (
    <div className="absolute top-0 left-0 right-0 h-screen w-screen bg-glovo 
      bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className='hero relative mb-24 px-8 flex flex-row-reverse items-center justify-center max-w-7xl '>
        <Hero />
      </div>
      <Mediaicons />
      <div className="svg absolute bottom-0 w-full">
        <img className='svg-wave z-10' src={wave} />
      </div>
    </div>
  );
}

export default Home;
