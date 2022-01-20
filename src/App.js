import './App.css';
import { ComingSoon } from './components/coming_soon/ComingSoon';
import { Hero_Image } from './components/home/Hero_Image';
import { Hero_One } from './components/home/Hero_One';
import { Hero_three } from './components/home/Hero_three';
import { Hero_two } from './components/home/Hero_two';
import NavBar from './components/home/NavBar';

function App() {
  const sub_header_one = "content writing / copywriting"
  const main_header_one = "Copywriting"
  const subject_one = "Professional copywriting that serves both people and algorithm"
  const paragraph_one = `
    We specialize in effectively telling brand stories and creating high performing contents for your website, blog posts, email campaigns, press releases, ebooks and product description.
  `
  const ending_text = `
    Our strategy aligns your values with your audience's needs while ensuring top product ranking, increased visibility and strong campaigns.
  `
  const line_color_one = "orange_line"
  return (
    <>
      <div className='App'>
        <NavBar className="nav_grid"/>
        <Hero_Image className="img_grid"/>
        <Hero_One/>
        <Hero_three />
      </div>
      <Hero_two sub_header={sub_header_one} main_header={main_header_one} subject={subject_one} 
          paragraph_one={paragraph_one} ending_text={ending_text} line_color={line_color_one} star_color="orange_star" 
          bg_color="#FFF8F3" icon_color="orange_question"/>
      
    </>
  );
}

export default App;
