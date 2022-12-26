import "./services.css";
import image1 from "../../assets/main_assets/Difference-services/image1.jpg";
import image2 from "../../assets/main_assets/Difference-services/image2.jpg";
import image3 from "../../assets/main_assets/Difference-services/image3.jpg";
import image4 from "../../assets/main_assets/Difference-services/image4.jpg";

const Services = () => {
  return (
    <div className="sevices_container">
      <div className="services">
        <div className="sevice_rendered">
          <div className="image_container">
            <img src={image1} alt="Picture" className="the_picture" />
          </div>
          <div className="textTitle_container">
            <span className="textTitle">DOCUMENT SCANNING + CONVERSION</span>
          </div>
          <span className="text_content">
            SideKick will scan trhe paper or word document, converting them to
            digital images that are then stored on CD, DVD
          </span>

          <button className="read_more"> READ MORE</button>
        </div>

        <div className="sevice_rendered">
          <div className="image_container">
            <img src={image2} alt="Picture" className="the_picture" />
          </div>

          <div className="textTitle_container">
            <span className="textTitle">MICROFILM COVERSION SOLUTIONS</span>
          </div>
          <span className="text_content">
            You may have old Microfilm, Microfische, Aperture Cards that have
            been stored off site or har to access or ....
          </span>

          <button className="read_more"> READ MORE</button>
        </div>

        <div className="sevice_rendered">
          <div className="image_container">
            <img src={image3} alt="Picture" className="the_picture" />
          </div>

          <div className="textTitle_container">
            <span className="textTitle">DOCUMENT MANAGEMENT</span>
          </div>
          <span className="text_content">
            SideKick Document Management Services will control the life cycle of
            documents in your organization how they are
          </span>

          <button className="read_more"> READ MORE</button>
        </div>

        <div className="sevice_rendered">
          <div className="image_container">
            <img src={image4} alt="Picture" className="the_picture" />
          </div>

          <div className="textTitle_container">
            <span className="textTitle">DATA ENTRY </span>
          </div>

          <span className="text_content">
            SideKick Inc., Advanced Document Services provides assistance with
            complex data entry projects that require keen
          </span>

          <button className="read_more"> READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
