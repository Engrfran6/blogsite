import Header from '../../components/header/Header';
import {Header2} from '../../components/header/Header2';
import Posts from '../../components/posts/Posts';
import SideBars from '../../components/sidebars/SideBars';

import './home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />

      <div className="home">
        <Posts />
        <SideBars />
      </div>
    </div>
  );
}
