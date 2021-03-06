
import './servicePage.css';
 
import { Tabs,Tab,Container , Accordion, Card, Button} from 'react-bootstrap';
import Galery from './galery';
import ControlledCarousel from './slider';
import Coustem from './coustem';
import sa1 from '../images/2.jpeg'
import sa2 from '../images/3.jpeg'
import sa3 from '../images/4.jpeg'

import sa5 from '../images/6.jpeg'
import sa6 from '../images/7.jpeg'

import sa9 from '../images/9.jpeg'
import sa10 from '../images/10.jpeg'
import sa7 from '../images/8.jpeg'
import sa20 from '../images/20.jpeg'


  

function ServicPage() {
  const babies = [
    {
      img: sa3,
      content: "have a nice outdoor graduation session with your family and dears,in this offer you will have outdoor tow hours session with our greatest omar khyami wiht his accessories ",
      title:"FAMILY SESSION",
      cost: "50 JOD",
      data: {
      location: 'outdoor',
      photography: 'omar khyami',
      sessionHoures: 'tow hour',
      theming: 'with accessories',
      price: '50 JOD',
      id: 0,
      time:Date(),
      }
      
      // id=1 
    },

    {
      title:"2020 GRADUATION SESSION",
      img: sa5,
      content: "Enjoy your graduation moment at 2020 and don't let COVD-19 stop you, iin this offer you will have outdoor, one hour session with the Astonishing Ali Sasdi. ",
      // id=2
      cost: "45 JOD",
      data:{
      location: 'Outdoor',
      photography: 'Ali Sasdi',
      sessionHoures: 'one hour',
      theming: 'without accessories',
      price: '45 JOD',
      id: 1,
      time:Date(),


         }
    },
             
    {
      title:"FRIENDS SESSION",
      img: sa20,
      content: " A sweet friendship refreshes the soul,So have a nice  session  with your best friends and keep your memories with out door,toe our session whit linda AL-Koury. ",
      // id=3
      cost: "55 JOD" ,
      data: {
        location: 'outdoor',
      photography: 'linda AL-Koury',
      sessionHoures: 'one hour',
      theming: 'without accessories',
      price: '55 JOD',
      id: 2,
      time:Date(),
      }
      
        
    },
    {
      title:"OUT OP THE BOX SESSION",
      img: sa7,
      content: "Things end. But memories last forever,So keep your memories with Unfamiliar session with Anas AL-Kurdi  and his amazing Accessories with one our outdoor session. ",
      // id=4
      cost: " 50 JOD" ,
      data: {
        location: 'outdoor',
      photography: 'Anas AL-Kurdi',
      sessionHoures: 'one hour',
      theming: 'with accessories',
      price: '55 JOD',
      id: 3,
      time:Date(),
      }
           
    }
  ];
  const couples = [

    {
      img: sa2,
      title:"LOVE MOMENT SESSION",
      content: "You fell in love the way you fall asleep,slowly, and then all at once,have your own session and keep your moment  with omar khyami in outdoor one hour session ",
      cost: "45 JOD",
      data: {
         location: 'outdoor',
      photography: 'omar khyami',
      sessionHoures: 'one hour',
      theming: 'with accessories',
      price: '45 JOD',
      id: 0,
      time:Date(),
      }

    },

    {
      img: sa1,
      title:"LOVE MOMENT SESSION",
      content: "You fell in love the way you fall asleep ,slowly, and then all at once,have your own session with Ali Sasdi and his accessoriess in outdoor one tow session ",
      cost: "55 JOD",
      data: {
         location: 'Outdoor',
      photography: 'Ali Sasdi',
      sessionHoures: 'one hour',
      theming: 'without accessories',
      price: '55 JOD',
      id: 1,
      time:Date(),
        
      }
    
    },

             
    {
      img: sa9,
      title:"LOVE MOMENT SESSION",
      content: "You fell in love the way you fall asleep: slowly, and then all at once,have your own session and keep your moment  with linda AL-Koury in outdoor tow hour session ",
      cost: "50JOD", 
      data: {
          location: 'outdoor',
      photography: 'linda AL-Koury',
      sessionHoures: 'tow hour',
      theming: 'without accessories',
      price: '50 JOD',
      id: 2,
      time:Date(),
      }
        
    },
    {
      img: sa10,
      title:"LOVE MOMENT SESSION",
      content: "You fell in love the way you fall asleep: slowly, and then all at once,have your own session  with omar khyami his accessories in outdoor one hour session ",
      cost: "55 JOD"  ,
      data: {
          location: 'outdoor',
      photography: 'omar khyami',
      sessionHoures: 'one hour',
      theming: 'with accessories',
      price: '55 JOD',
      id: 3,
      time:Date(),
      }

    }
  ];
  
  
  const graduates = [

    

    {
      title:"CUTE BABIES SESSION",
      img: "https://www.avnidaphotography.com/wp-content/uploads/2015/05/20-4896-post/6-month-old-baby-Jacob-shows-off-the-cutest-pout-we-have-seen(pp_w768_h512).jpg",
      content: "keep your cute baby memories and don't let them the memory die with our amazing photographer linda AL-Koury ,in this session you will have tow hour indoor session  .",
      cost: " 50 JOD",
      data: {
          location: 'indoor',
      photography: 'linda AL-Koury',
      sessionHoures: 'tow hour',
      theming: 'without accessories',
      price: '50 JOD',
      id: 0,
      time:Date(),
      }

      
    },
    {
      title:"BABY SMILE MEMORIES",
      img: "https://i.pinimg.com/564x/69/c4/81/69c48166cae8cf633fe84558669d6cd1.jpg",
      content: "It is a smile of a baby that makes life worth living ,save yor baby smile with  the amazing linda AL-Koury and her Accessories in tow hour indoor session .",
      cost: " 65 JOD",
      data: {
          location: 'indoor',
      photography: 'linda AL-Koury',
      sessionHoures: 'tow hour',
      theming: 'with accessories',
      price: '65 JOD',
      id: 1,
      time:Date(),


      }
      
    },
    
    {
      title:"FLOWER BABY ",
      img: "https://bambiniphoto.sg/wp-content/uploads/baby-photoshoot-7.jpg",
      content: "A baby is as pure as an angel and as fresh as a blooming flower, so don't miss the memories with linda AL-Koury and her Accessories in one hour indoor session  .",
      cost: " 50 JOD",
      data: {
        location: 'indoor',
      photography: 'linda AL-Koury',
      sessionHoures: 'one hour',
      theming: 'with accessories',
      price: '50 JOD',
      id: 2,
      time:Date(),

      }
      
      
    },
    {
      title:"BROTHER SESSION",
      img: "https://cchampagnephotography.com/wp-content/uploads/2019/03/Newborn-Photographer-Carthage-Joplin-Missouri-Celesta-Champagne_2713-1024x684.jpg",
      content: "keep your son's connected and save there memories together in our photo session with the best photographer in this field omar khyami in indoor, one hour session.",
      cost: " 45 JOD",
      data: {
        location: 'indoor',
      photography: 'omar khyami',
      sessionHoures: 'one hour',
      theming: 'without accessories',
      price: '45 JOD',
        id: 3,
      time:Date(),
      }
           
    }
  ];


  return (
    
    <div className="servicePage">
      <ControlledCarousel />
       

       <Container fluid >
       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="OUR OFFERS">
  <Tabs className='servis-taps' fluid defaultActiveKey="profile" id="uncontrolled-tab-example">
       
       <Tab eventKey="home" title="Graduates">
         {
           babies.map((baby)=>
             < Galery
              img={baby.img} 
              content={baby.content}
              cost={baby.cost}
              title={baby.title}
              offer={baby.data}
             
             />
           
           )
     
     }
       </Tab>
     
       <Tab eventKey="profile" title="Couples">
       {
         couples.map((couples)=>
         
     < Galery
     img={couples.img} 
     content={couples.content}
     cost={couples.cost}
     title={couples.title}
     offer={couples.data}
    
    
      />
     )
     }
       </Tab>
     
     
       <Tab eventKey="contact" title="Babies" >
       {
         graduates.map(( graduate)=>
     < Galery
     title={graduate.title}
     img={ graduate.img} 
     content={ graduate.content}
     cost={graduate.cost}
    offer={graduate.data}
    // 

     />
     )
     }
     
       </Tab>
     
       
     </Tabs>
  </Tab>
  <Tab eventKey="profile" title="COUSTMIZE YOUR SESSION">
  <Coustem/>
  </Tab>
 
</Tabs>
      
    

  

</Container>
 
 
    </div>
  );
}


export default ServicPage;




