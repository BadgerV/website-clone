import "./disaster.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image5 from "../../assets/main_assets/Difference-services/image5.jpg";

const Disaster = () => {
  return (
    <div className="disaster_main">
      <div className="disaster_containter">
        <div className="disasterLeft">
          <span className="disaster_title">When Disaster Strikes</span>
          <span className="disaster_text">
            Waiting for a fire, flood or security breach means you’re too late!
            Protect your files and create secure backups using SideKick’s
            extensive range of services before disaster strikes.
          </span>

          <div className="button">
            <span className="learnMore">READ MORE</span>
            <span className="innerButton">
              <ArrowForwardIosIcon className="icon" />
            </span>
          </div>
        </div>
        <div className="disasterRight">
          <img src={image5} alt="Big image" />
        </div>
      </div>
    </div>
  );
};

export default Disaster;
