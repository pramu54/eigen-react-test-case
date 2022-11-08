import './App.css';
import { ButtonPrimary } from './components/button/Button';
import NewsCard from './components/card/Card';
import SearchBox from './components/searchBox/SearchBox';
import LayoutProvider from './layout/layout';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      {/* <ButtonPrimary caption={"Ini Button"}/>
      <NewsCard 
        author="Jak Connor"
        title="Elon Musk's Twitter rolls out check mark badges, launch delayed just 1 day later"
        description="Twitter announced that it would be rolling out its verification check marks to Twitter Blue subscribers, but one day later, it's been delayed. Continue reading at TweakTown >"
        url='https://www.tweaktown.com/news/89363/elon-musks-twitter-rolls-out-check-mark-badges-launch-delayed-just-1-day-later/index.html'
        publishedAt="2022-11-07T08:31:02Z"
      />
      <SearchBox /> */}
      <LayoutProvider content={<Home />}/>
    </div>
  );
}

export default App;
