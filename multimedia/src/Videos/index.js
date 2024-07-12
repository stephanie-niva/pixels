import './index.css';
import video from '/'

const Video = () => {
    return (
      <div className='page'>

        <div className='pagetext'>
         <h1  className='text'>Embark on a multimedia journey with our newest video</h1>
      
       <p className='wifi'>Wifi the magic that lets you magic you surf the internet from your couch, 
       without having to get up and plug in a cord. It's like having a personal genie that grants you internet access from anywhere in your home.</p>
       <iframe width="800" height="395" src="https://www.loom.com/embed/0b2b73df9edd4fca9f1efc4c3efcc6b8?sid=ba66d772-c08f-4fc4-8992-11845aa1acc5" 
       frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

        {/* <div>WiFi Router Presentation - Google Slides - 11 July 2024 </div> */}
       
      <div> <img src="/images/wifi3.jpg" alt="wifi" id='image'/> </div>
       
  
     
      </div>
    
       

     
     
        
    );
}

export default  Video;