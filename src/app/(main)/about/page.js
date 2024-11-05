"use client";
import styles from "./pageabout.module.scss";
import AnimatedLetters from "@components/AnimatedLetters/AnimatedLetters";

// const HardSpinningCube = () => {
//   return (
//     <div className={styles.stageCubeCont}>
//       <div className={styles.cubespinner}>
//         <div className={styles.face1}>
//           <FontAwesomeIcon icon={faPython} color="#DD0031" />
//         </div>
//         <div className={styles.face2}>
//           <FontAwesomeIcon icon={faJava} color="#F06529" />
//         </div>
//         <div className={styles.face3}>
//           <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
//         </div>
//         <div className={styles.face4}>
//           <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
//         </div>
//         <div className={styles.face5}>
//           <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
//         </div>
//         <div className={styles.face6}>
//           <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
//         </div>
//       </div>
//     </div>
//   );
// };

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <s>
        <div className={styles.textZoneAbout}>
          <h1>
            <AnimatedLetters
                letterClass="textAnimate"
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
            />
          </h1>
          <p>I like to get things done.</p>
          <p>
            Chill and confident person. I enjoy spending time with my friends and
            family.
          </p>
          <p>
            I like gym, ski, coffee, humuor, sometimes I do nerd sh*t. I am quite
            an interesting personality in that sense.
          </p>
        </div>
        <div>
          <h3>
            I read, think, do on the following <u>tech</u> stuf
          </h3>
          <ul>
            <li>nlp, ml, vector databases & search is always cool</li>
            <li>system design</li>
            <li>web technologies</li>
            <li>backend mostly Node and Java</li>
            <li>front mostly react</li>
            <li>
              devsecops i respect that. not a big fan
            </li>
            <li>
              data engineering, web crawling is cool
            </li>
          </ul>
          {/* <h3>
          I read, think, do on the following <u>non-tech</u> stuf
        </h3>
        <ul>
          <li>criticising and thinking on my values</li>
          <li>gym for better life experience</li>
          <li>travelling is ok</li>
          <li>
            financial freedom is big concern to me probably @ 23yrs of age. its
            all lame ngl but happens
          </li>
          <li>something of a mysterious person i am</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3>
          About <u>you</u>
        </h3>
        <ul>
          {process.env.NODE_ENV !== "development" && (
            <>
              <li>
                you, your opinions and your values matter <u>a lot</u>
              </li>
              <li>
                your bandwith is{" "}
                {navigator ? navigator?.connection?.downlink : "-"}mbps +-
              </li>
              <li>
                your ping is {navigator ? navigator?.connection?.rtt : "-"} +-
              </li>
            </>
          )}
        </ul> */}
        </div>
      </s>

      <h1>Im building an online learning platform at learn.stuf24.com</h1>
      <h4>yeah. </h4>

      <br/>
<p>i found theopage some cringe. so its crossed. you dont know about me</p>
      {/* <HardSpinningCube /> */}
    </div>
  );
};

export default About;
