import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlesm">Welcome to EruLo's</span>
        <span className="headertitlelg">Blog</span>
        <span className="headerslogan">
          So Much News, Events, Entertainment, Lifestyle, Fashion, Beauty, Inspiration and yes...
          Gossip!
        </span>
      </div>

      <img
        className="headerimage"
        src="https://plus.unsplash.com/premium_photo-1661265944044-bc7248ae54f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="home photo"
      />
    </div>
  );
}
