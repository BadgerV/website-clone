import "./header.css";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/header-icon-3.png";
import icon2 from "../../assets/header-icon-1.png";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="header_top">
        <span className="menu_icon">
          <MenuIcon sx={{ fontSize: 30 }} />
        </span>
        <div className="logo_part">
          <span>
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="small_screens_only">
          <div className="discount_part">
            <div className="first_span">
              <span>
                <img src={icon2} className="icon" alt="" />
              </span>
              <span className="number text-primary-400">(952) 835-5425</span>
            </div>
            <div className="second_span">
              <span>
                <img src={icon1} alt="" className="icon" />
              </span>
              <div className="up_and_down">
                <span className="header_second_span_top number text-primary-400">
                  Get 10% Off
                </span>
                <span className="header_second_span_bottom text-primary-400 fw-regular">
                  Watch Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small_screens_only">
        <div className="bottom_part">
          <div className="left_part">
            <ul className="ul_links">
              <li className="links">
                <a href="#">HOME</a>
              </li>
              <li className="links">
                <a href="#">SERVICES</a>
                <div class="dropdown-content">
                  <a href="#" className="options">
                    DOCUMENT SCANNING AND CONVERSION
                  </a>
                  <a href="#" className="options">
                    MICROFILM CONVERSION SOLUTIONS
                  </a>
                  <a href="#" className="options">
                    DOCUMENT MANAGEMENT
                  </a>
                  <a href="#" className="options">
                    DATA ENTRY
                  </a>
                  <a href="#" className="options">
                    DOCUMENT IMAGING
                  </a>
                  <a href="#" className="options">
                    DOCUMENT DESTRUCTION SERVICES
                  </a>
                  <a href="#" className="options">
                    DOCUMENT BACKUP
                  </a>
                </div>
              </li>
              <li className="links">
                <a href="#">INDUSTRY</a>
                <div class="dropdown-content">
                  <a href="#" className="options">
                    ACCOUNTING
                  </a>
                  <a href="#" className="options">
                    CEMETRY AND FUNERAL SERVICES
                  </a>
                  <a href="#" className="options">
                    CONSTRUCTION AND DEVELOPMENT
                  </a>
                  <a href="#" className="options">
                    DENTAL
                  </a>
                  <a href="#" className="options">
                    DISASTER RECOVERY
                  </a>
                  <a href="#" className="options">
                    EDUCATION
                  </a>
                  <a href="#" className="options">
                    ENGINEERING
                  </a>
                  <a href="#" className="options">
                    FINANCE AND BANKING
                  </a>
                  <a href="#" className="options">
                    HEALTHCARE
                  </a>
                  <a href="#" className="options">
                    HUMAN RESOURCES AND PERSONNEL
                  </a>
                  <a href="#" className="options">
                    INSURANCE
                  </a>
                  <a href="#" className="options">
                    LEGAL AND LITIGATION
                  </a>
                  <a href="#" className="options">
                    LOGISTICS AND TRANSPORTING
                  </a>
                  <a href="#" className="options">
                    MANUFACTURING
                  </a>
                  <a href="#" className="options">
                    MEDICAL
                  </a>
                  <a href="#" className="options">
                    MICROFILM CONVERSION
                  </a>
                  <a href="#" className="options">
                    REAL ESTATE, MORTGAGE
                  </a>
                </div>
              </li>
              <li className="links">
                <a href="#">ABOUT US</a>
                <div class="dropdown-content">
                  <a href="#" className="options">
                    TESTIMONIALS
                  </a>
                </div>
              </li>
              <li className="links">
                <a href="#">CONTACT US</a>
                <div class="dropdown-content">
                  <a href="#" className="options">
                    RQUEST A QUOTE
                  </a>
                  <a href="#" className="options">
                    FAQs
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="right_part">
            <button className="quote_button">Get a Quote</button>
            <div className="input_text">
              <input
                type="text"
                placeholder="SEARCH HERE"
                className="search_bar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
