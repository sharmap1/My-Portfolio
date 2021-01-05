import React from "react";
import Sdata from "../../Sdata";
import { Row, Container } from "react-bootstrap";
import Propcard from "../../components/Propcard";

// const pcard = (val) => {
// all the sdata is now stored in val
//   return (
//     <>
//       <Propcard
//         title={val.title}
//         imgsrc={val.imgsrc}
//         summary={val.summary}
//         link={val.link}
//       />
//     </>
//   );
// };

function Portpage() {
  return (
    <>
      <Container>
        <Row md={3}>
          {/* <Row> */}
          {Sdata.map((val) => {
            // {Sdata.map(const pcard=(val)=> {
            //writing function directly inside map function
            // no need to even write function you can directly get the val

            return (
              <>
                <Propcard
                  key={val.id}
                  title={val.title}
                  imgsrc={val.imgsrc}
                  summary={val.summary}
                  github={val.github}
                  link={val.link}
                />
              </>
            );
          })}
        </Row>
      </Container>
      ;{/* map function has 3 parameters val,arr, and index */}
    </>
  );
}

export default Portpage;
