import Result from "./result";
import Start from "./start";
import Quiz from "./quiz";
import { QuizContext } from "./QuizHolder";
import { useContext } from "react";
function WellBeing() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default WellBeing;
