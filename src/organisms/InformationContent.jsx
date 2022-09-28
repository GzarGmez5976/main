import ImgAndText from '../molecules/ImgAndText';

import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import image5 from '../assets/img/image5.png'
import image6 from '../assets/img/image6.png'
import image6 from '../assets/img/image7.png'

import '../assets/styles/InformationContent.css'

const ImageAndTextContent = [
    {
        src: image1,
        text: "El ingeniero en nanotecnología es un profesionista que se ocupa del uso, adquisición, desarrollo, implementación, evaluación, control o sugerencia del uso, aplicación, desarrollo o adquisición de materiales o componentes que trabajen a escala nanométrica con el objeto fundamental de generar progreso y valor permanentes para la organización que lo produce, usa o comercializa."
    },
    {
        src: image2,
        text: 'Licenciatura en Administración y Gestión Empresarial, Forma profesionales con capacidades gerenciales, altamente competitivos que respondan a los desafíos que enfrentan las organizaciones en ambientes de incertidumbre; dirigiendo eficazmente sus recursos y funciones a través de una visión vanguardista, para diseñar, evaluar y aplicar estrategias que permitan innovar o mejorar procesos en las organizaciones en un marco de sustentabilidad'
    },
    {
        src: image3,
        text: 'El ingeniero petrolero se forma aprovechando de manera sustentable los recursos naturales, atendiendo la preservación del medio ambiente, aplicando para ello las nuevas tecnologías, con habilidades, actitudes, aptitudes analíticas y creativas, de liderazgo y calidad humana, con un espíritu de superación permanente para investigar, desarrollar y aplicar el conocimiento científico y tecnológico. Las y los ingenieros petroleros son profesionistas capaces de atender las necesidades emanadas de los procesos de explotación de hidrocarburos, de agua y de energía geotérmica, a fin de redituar beneficios económicos al país y prever los posibles daños ecológicos al medio ambiente.'
    },
    {
        src: image4,
        text: "El ingeniero en tecnologías de manufactura es el profesionista capaz de atender las necesidades emanadas de los procesos de transformación de productos manufacturados, contribuyendo al desarrollo local, regional y/o nacional. La combinación de conocimientos de automatización de procesos, tecnologías de manufactura avanzada y técnicas de gestión industrial, hacen del ingeniero en Tecnologías de Manufactura un líder en la industria manufacturera. Las y los ingenieros en Tecnologías de Manufactura de la Universidad Politécnica de Chiapas combinan la aplicación de los conocimientos científicos y tecnológicos para mejorar, diseñar, implantar, automatizar procesos de manufactura, así como administrar y evaluar proyectos en el ámbito de su competencia, con una formación en valores humanos como fundamento de un compromiso real con la sociedad, medio ambiente y las necesidades del crecimiento económico del estado"
    },
    {
        src: image5,
        text: "La Ingeniería en Energía es una carrera profesional que se centra en los principios fundamentales para la toma de decisiones en la generación, distribución y utilización eficiente de la energía con responsabilidad ambiental, sostenible y social. Así también, estudian las fuentes energéticas alternas (energías renovables) para su transformación en energía secundaria tales como: electricidad, calor, etc. y su uso óptimo en los procesos de equipo y producción. En la Universidad Politécnica de Chiapas formamos ingenieros en energía con sólidos conocimientos basados en la teoría, la práctica y visión empresarial, capaces de ofrecer soluciones científicas y tecnológicas relacionadas con las fuentes convencionales y renovables de energía. "
    },
    {
        src: image6,
        text: 'Es la aplicación práctica del conocimiento científico y humanístico al diseño y construcción de programas de computadora, diseñando soluciones de software innovadoras y acordes con el entorno social y empresarial, mediante herramientas, técnicas, tecnologías de usabilidad, base de datos, redes, teleproceso y lenguajes de programación. En Politécnica de Chiapas formamos ingenieros profesionales especializados en el desarrollo de software; capaces de crear, innovar y aplicar la tecnología para ofrecer soluciones en las áreas de la comunicación digital, automatización, negocios, sistemas computacionales, educación, transportes, diversión y entretenimiento.'
    },
    {
        src: image7,
        text: 'En esta rama de la ingeniería se fusionan aspectos de electrónica, medicina, física, informática, química, biología y matemáticas. Las y los ingenieros biomédicos diseñan, crean, desarrollan, innovan e implementan equipos, dispositivos y sistemas médicos que ofrezcan soluciones tecnológicas y científicas en el área de la salud; así también manejan programas de mejoramiento, administración, operación y conservación de instalaciones y equipo hospitalario. En Politécnica de Chiapas formamos ingenieras (os) biomédicos profesionales y especializados, con valores, capaces de desarrollar, adoptar y aplicar la tecnología para ofrecer soluciones científicas y administrativas integrales en el campo de la salud'
    },
]

function InformationContent () {
    return (
    <div className='mainInformation'>
        <h2>Universidad Politécnica de Chiapas</h2>
        <div className='line'></div>

        <div className='imagesAndTextes'> 
            {ImageAndTextContent.map((content)=>{
                return ( <ImgAndText src={content.src} text={content.text}></ImgAndText> )
            })}
        </div>
    </div>
    )
}

export default InformationContent