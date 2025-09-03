import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/garbage_management_system" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Хог ачилтын захиалгын систем</h3>
              <p>
                Программ хангамжийн төсөл хичээлийн хүрээнд хийсэн бөгөөд энэхүү систем нь хэрэглэгчдэд хог ачилтын захиалга өгөх, удирдах боломжийг олгодог. Админ хэрэглэгчид захиалгын мэдээллийг харах, шинэ захиалга нэмэх, захиалгыг устгах, хэрэглэгчийн мэдээллийг удирдах зэрэг үйлдлүүдийг гүйцэтгэх боломжтой.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>MYSQL</li>
                <li>SCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/pizza_order_mobile_biydaalt" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.jvgdernamjil.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>Мобайл Програмчлал хичээлийн хүрээнд пизза захиалгын аппликейшн хийсэн бөгөөд crud үйлдийг багтаан firebase-тай холбосон гэдгээрээ давуу талтай.</h3>
            </div>
            <footer> <ul className="tech-list"> <li>JAVA</li> <li>ANDROID STUDIO</li> <li>FIREBASE</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/ExamMediaPlayer" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Дуу тогуудагч аппликейшн</h3>
              <p>
              Мобайл Програмчлал хичээлийн хүрээнд дуу тоглуулагч аппликейшн хийсэн бөгөөд audio file унших, тоглуулах, түр зогсоох, зогсоох, дараагийн дуу руу шилжих, өмнөх дуу руу шилжих зэрэг үйлдлийг багтаасан.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVA</li>
                <li>ANDROID STUDIO</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/Portfolio-reactjs" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Веб технологи хичээлийн хүрээнд React js ашиглан Portfolio вебсайт хийсэн.</h3>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVASCRIPT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>REACT JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/car-rental" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Объёкт хандлагат программчлал ашиглан машин түрээсийн систем хийсэн java python 2 хэл дээр хийж мэдлэгээ баталгаажуулсан.</h3>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVA</li>
                <li>PYTHON</li>
                <li>GIT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/lucilfer1111/flashcard-java" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://github.com/lucilfer1111/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Программ хангамжийн бүтээлт хичээлийн хүрээнд flashcard тоглоом хийсэн test code бичсэнээрээ давуу талтай.</h3>
              <p>
                Мөн interface, inheritance-ийн  ойлголтуудыг ашигласан.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVA</li>
                <li>JUNIT</li>
                <li>GIT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}