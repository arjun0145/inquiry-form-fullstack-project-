// import "./App.css";
import Navbar from "./Navbar";
import Formx from "./Formx";
import { Alert, Container } from "react-bootstrap";
function App() {




  return (
    <div>
      <Container>
        <br />
        <Container>
          <h1 align="center
      " id="comname" className="text-primary"
          > Welcome To Universal Informatics </h1>
          <br />
          <div id="bodytext"><p> Our single – minded devotion to deliver result oriented customized services that are scalable, value driven and highly competitive – both in terms of cost and expertise.
            We review and improvise our services to offer you solution that meet your needs strive for your success by staying abreast with the latest technology.
            Our programmes are designed as per the industry requirement and keeping in mind the placement opportunities and self-employment.
            We encourage you to think imaginatively & recognize your speed, innovativeness, creativity & pioneering zeal.
            Innovation in technology, training, staffing and Consulting. </p></div>
          <br />
        </Container>
        <Container>
          <Alert>

            <h3 id="cotation" className="text-center">" Logic and Logical Person Will change the world "</h3>
            <h5 id="author" className="mx-5 text-center">...Arjun Kumar Chaturvedi</h5>
          </Alert>
          <Container className="border">
            
            <h3 className="text-center mt-1 ">Inquiry Form </h3>
            <br />
            
            <Formx className='mt-5'></Formx>
            <br />
          </Container>

        </Container>

        <br></br>
        <Container>
          <div className="why">
            <h5>Why us ... ? </h5>
            <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid vero odit
              repellat nam fuga maxime nesciunt sapiente provident
              incidunt, nihil sit assumenda laudantium nemo explicabo,
              veritatis rerum iusto placeat ea Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum earum, ullam obcaecati perferendis sint
              voluptatum nulla doloremque natus. Blanditiis excepturi illum voluptatibu
              s nesciunt, expedita asperiores labore sed quia quos recusandae face
              re dolorem totam eius cupiditate odit, libero, quibusdam provident.
              Maiores, eos! Dolore non at fuga autem assumenda dolorem consequuntu
              r maiores voluptas modi impedit, sapiente temporibus iure quia perfe
              rendis quae nisi quod quis porro? Magnam, modi repellat! Aliquid dol
              oribus quo distinctio voluptatem rerum id quae pariatur odio lauda
              ntium ex ducimus, libero ea hic dolorem. Tenetur inventore repudia
              ndae itaque! Ducimus nihil laudantium sed esse. Fugiat aliquam, re
              pudiandae sapiente ipsa ab totam ratione. Eos, a, placeat, recusa
              dae voluptas voluptatum eveniet cumque incidunt magnam fugiat quid
              em hic aliquid inventore consequatur modi! Facilis perspiciatis de
              lectus, aperiam ipsum maxime reiciendis nesciunt dignissimos ducim
              us aliquid cumque eveniet obcaecati quia sapiente earum dolor fuga
              praesentium nam eaque totam alias veritatis minima voluptatibus p
              ariatur velit! Sed odio repellat magni dolor, dolores nisi cupidi
              tate dolorum doloremque modi at. Officiis aperiam sapiente consec
              tetur adipisci voluptates ad ipsa omnis tempora odio, pariatur ve
              niam eos eveniet exercitationem sunt rerum officia quibusdam porr
              o fuga. Ducimus totam repudiandae necessitatibus, quidem sit ea s
              int doloribus exercitationem rem cumque eligendi, voluptatibus al
              ias quod. Fugiat veniam sint dolorum!.</p>
          </div>
        </Container>

      </Container>
    </div>
  )
}

export default App;
