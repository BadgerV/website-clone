import "./footer.css";
import img from "../../assets/main_assets/logo_new.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="top_part">
        <div className="footer_left_part">
          <div className="footer_image_container">
            <img src={img} alt="logo_picture" className="footer_logo_image" />
          </div>

          <span className="footer_text_content">
            Anyone can scan a piece of paper. But SideKick is one company that
            knows how to use imaging to substantially improve our payables
            process.
          </span>

          <span className="footer_text_title">
            - Carl, CEO Large Electronics Distributor
          </span>

          <span className="footer_miss_text">Sitemap | Blog</span>
        </div>

        <div className="footer_middle_part">
          <span className="footer_header_title">Our Services</span>
          <ul className="footer_list">
            <li className="footer_list_items">
              Document Scanning and Conversion
            </li>
            <li className="footer_list_items">
              Microfilm Conversion Solutions
            </li>
            <li className="footer_list_items">Document Management</li>
            <li className="footer_list_items">Data Entry</li>
            <li className="footer_list_items">Document Imaging</li>
            <li className="footer_list_items">Document Destruction Services</li>
            <li className="footer_list_items">Document Backup</li>
          </ul>
        </div>
        <div className="footer_right_part">
          <h2 className="get_in_touch">Get In Touch</h2>
          <form className="footer_form">
            <input
              type="text"
              className="footer_input"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              className="footer_input"
              placeholder="Your E-mail Address"
            />

            <input
              type="number"
              className="footer_input"
              placeholder="Your Phone Number"
            />
            <textarea
              rows="1"
              cols="50"
              wrap="physical"
              name="comments"
              className="footer_input message_input"
              placeholder="Your Message Here"
            ></textarea>

            <button className="submit_button">CALL US NOW</button>
          </form>
        </div>
      </div>
      <div className="bottom_part">
        <span className="copyright_text">
          © Copyright Sidekick, Inc.. All Rights Reserved | PRIVACY POLICY
        </span>

        <div className="footer_links">
          <ul className="footer_links_ul">
            <li className="footer_links_item">HOME</li>
            <li className="footer_links_item">SERVICES</li>
            <li className="footer_links_item">INDUSTRIES</li>
            <li className="footer_links_item">ABOUT US</li>
            <li className="footer_links_item">CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
