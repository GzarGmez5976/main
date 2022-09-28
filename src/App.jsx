import Header from './organisms/Header';
import ContentImage from './molecules/ContentImage';
import Layout from './templates/Layout'
import InformationContent from './organisms/InformationContent';
import Footer from './molecules/Footer'

function App() {
  
  return (
    <>
      <Header></Header>
      <ContentImage></ContentImage>

      <Layout>
        <InformationContent></InformationContent>

        <Footer></Footer>
      </Layout>   </>
  );
}

export default App;
