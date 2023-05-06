import styles from './footer.module.css';

// import logo from '../../pages/Home/images/logo-bgRemoved.png';
import {
  FaBlogger,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            {/* <img alt="img" src={logo} className={styles.logo} /> */}

            <ul>
              <li>
                <a
                  href="https://engg.kkwagh.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  about us
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/K.+K.+Wagh+institute+of+engineering+education+and+research,+Nashik+(main+Entrance+Gate)/@20.0142507,73.8201704,17.75z/data=!4m5!3m4!1s0x3bddeb110e990565:0x10778a0c8728c9a!8m2!3d20.0137576!4d73.8213895?hl=en&shorturl=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiOutlineLocationMarker />
                  Hirabai Haridas Vidyanagari, Amrutdham, Panchavati, Nashik –
                  422003
                </a>
              </li>
              <li>
                <p>+91 253 2512876 / +91 253 2512867</p>
              </li>
              <li>
                <p>
                  <HiOutlineMail />
                  kkwieer@kkwagh.edu.in / kkwe_office@dataone.in
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to="/shops" aria-label="Go to Shops">
                  Shops
                </Link>
              </li>
              <li>
                <Link
                  to="/application-form"
                  aria-label="Go to Application Form"
                >
                  Create Application
                </Link>
              </li>
              <li>
                <Link to="/applications" aria-label="Go to Applications">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/staff-login" aria-label="Go to Staff Login">
                  Staff Login
                </Link>
              </li>
              <li>
                <Link
                  to="/user-registration"
                  aria-label="Go to User Registration"
                >
                  User Registration
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>follow us</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/engg.kkwagh/"
                aria-label="Go to KKWagh Facebook Page"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/k.k.waghinstitute/?igshid=1ns2dqcsb8cv5"
                aria-label="Go to KKWagh Instagram Handle"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwWJ3-aCITg6WvNmrPiVaew/videos"
                aria-label="Go to KKWagh Youtube Channel"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com/KKWaghInstitute"
                aria-label="Go to KKWagh Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/kkwaghinstitute/"
                aria-label="Go to KKWagh LinkedIn profile"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://enggkkwagh.blogspot.com/"
                aria-label="Go to KKWagh BlogSpot"
                target="_blank"
                rel="noreferrer"
              >
                <FaBlogger />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.credentials}>
        <p>
          2022@K. K. Wagh Institute of Engineering Education & Research, Nashik.
        </p>
        <p>
          Designed By <span>TEA Computer Department</span> Students Team
        </p>
      </div>
    </footer>
  );
};

export { Footer };
