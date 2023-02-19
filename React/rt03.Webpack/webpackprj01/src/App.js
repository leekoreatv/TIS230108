import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <section id="page1" data-role="page">
        <div className="content" data-role="content">
          컨텐츠
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default App;
