import background from "../../assets/background.mp4"
import  blueP  from '../../assets/blueplanet.svg';
export default function Home() {
  return (
    <div>
       <div className="relative h-screen w-full">
      <video
        className="absolute top-0 mr-4 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

     
      <div className="relative flex items-start ">
        {/* <h1 className="text-white text-7xl font-bold mt-[23vh] ml-[25vh]">
          Welcome to<br/>
          our
        </h1> */}
        <div className="fixed top-10 left-10">
          <img  className="w-full h-full mt-[23vh] md:block " src={blueP} />  {/* Adjust size and positioning */}
        </div>
      </div>
    </div>
    </div>
  )
}
