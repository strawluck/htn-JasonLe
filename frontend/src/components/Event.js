import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Event.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Event = ({
    id,
    name,
    event_type,
    permission,
    start_time,
    end_time,
    description,
    speakers, //list ?
    public_url,
    private_url,
    related_events, // int list
    logo,
  }) => {
    const startDate = new Date(start_time / 1000);

    const formattedStartDate = startDate.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return (
      <>
        <Row className={`${'my-2'} ${styles.shadowBorder} ${styles.oddSpacing}`}>
          <Col className="experienceLogoContainer col-auto">
            <img src={logo} className="experienceLogo py-4"></img>
          </Col>
          <Col className={`${styles.eventContent}`}>
            <h4 className={`${styles.oddSpacing}`}>{name}</h4>
            <p className="">{formattedStartDate}</p>
            <h6 className="m-0">Description:</h6>
            <p className="pt-2 m-0 experienceBody d-none d-md-block">{description}</p>
            <h6 className="pt-3">Speakers:</h6>
            <p className="">
              {speakers.map((speaker, index) => (
                <div key={index}>
                  <p className="m-0">{speaker.name ? speaker.name : null}</p>
                  {speaker.profile_pic && <img src={speaker.profile_pic} alt={speaker.name} />}
                </div>
              ))}
            </p>
          </Col>
        </Row>
      </>
    );
  };
  
  export default Event;

