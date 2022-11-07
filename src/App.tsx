import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonPrimary } from './components/button/Button';
import NewsCard from './components/card/Card';
import SearchBox from './components/searchBox/SearchBox';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ButtonPrimary caption={"Ini Button"}/>
      <NewsCard 
        author="Jak Connor"
        title="Elon Musk's Twitter rolls out check mark badges, launch delayed just 1 day later"
        description="Twitter announced that it would be rolling out its verification check marks to Twitter Blue subscribers, but one day later, it's been delayed. Continue reading at TweakTown >"
        imgUrl='https://static.tweaktown.com/news/8/9/89363_01_elon-musks-twitter-rolls-out-verification-check-delays-launch-1-day-later_full.png'
        url='https://www.tweaktown.com/news/89363/elon-musks-twitter-rolls-out-check-mark-badges-launch-delayed-just-1-day-later/index.html'
        publishedAt="2022-11-07T08:31:02Z"
      />
      <SearchBox />
    </div>
  );
}

export default App;
