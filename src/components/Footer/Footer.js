import AnimatedLogo from '../reusables/AnimatedLogo';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <Link to={'/'}><AnimatedLogo /></Link>
        <p>
          <a className="main-link" href="https://twitter.com/buidlbox">Twitter</a>
          <span className="links-divider">{' /// '}</span>
          <a className="main-link" href="https://discord.gg/NTRYy5V2Q9">Discord</a>
          <span className="links-divider">{' /// '}</span>
          <a className="main-link" href="https://supermodular.xyz/">Supermodular</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;