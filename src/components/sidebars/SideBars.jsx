import {useEffect} from 'react';
import './sidebars.css';

export default function SideBars() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts.
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="sidebars">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1607013502213-a33bdd54851a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="sidebarimage"
        />
        <p className="sidebartext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium eaque quis
          animi ducimus? Quam adipisci amet aspernatur molestias error maxime ipsa mollitia.
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitems">Life</li>
          <li className="sidebarlistitems">Music</li>
          <li className="sidebarlistitems">Style</li>
          <li className="sidebarlistitems">Sport</li>
          <li className="sidebarlistitems">Tech</li>
          <li className="sidebarlistitems">Cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="topicon fa-brands fa-square-facebook"></i>
          <i className="topicon fa-brands fa-twitter"></i>
          <i className="topicon fa-brands fa-square-pinterest"></i>
          <i className="topicon fa-brands fa-square-instagram"></i>
        </div>
      </div>

      <div className="twitter">
        <div>
          <a
            href="https://twitter.com/francisefe3"
            class="twitter-follow-button"
            data-show-count="false">
            Follow @francisefe3
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  );
}
