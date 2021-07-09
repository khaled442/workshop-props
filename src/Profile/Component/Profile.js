import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Profile = ({ profile, handleName, children, name }) => {
  const styleObject = { width: "250px", marginLeft: "550px" };
  return (
    <div style={styleObject}>
      <h1 style={{textAlign:'center',color:'red'}}>{name}</h1>
      {profile.map((el) => (
        <Card style={{ height: "20rem" }}>
          <Card.Img
            variant="top"
            src={children}
            style={{
              width: "220px",
              height: "300px",
              marginLeft: "14px",
              marginTop: "10px",
            }}
          />
          <Card.Body style={{fontSize:'30px', color:'blue'}}>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.bio}</Card.Text>
            <Card.Text>{el.profession}</Card.Text>
            <Button variant="primary" onClick={() => handleName(el.name)}>
              display name
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
Profile.propTypes = {
  profile: PropTypes.object,
  handleName: PropTypes.func,
};
Profile.defaultProps = {
  name: "Khaled",
};

export default Profile;
