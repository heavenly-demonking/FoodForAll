import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="description">
        <h2>Description</h2>
        <p>
          FoodForAll is a platform designed to facilitate food donations and
          improve community nourishment. Users can register as a donor, food
          bank, or recipient; manage and schedule donations; locate food banks,
          and track the impact of their contributions. The website also offers
          educational resources to raise awareness and drive engagement.
        </p>
      </div>
      <div className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="card">
            <h3>Founder</h3>
            <h4>Don Young</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
          <div className="card">
            <h3>Director</h3>
            <h4>Sarah Johnson</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
          <div className="card">
            <h3>Member 3</h3>
            <h4>Jane Doe</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
          <div className="card">
            <h3>Member 4</h3>
            <h4>John Smith</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
          <div className="card">
            <h3>Member 5</h3>
            <h4>Emily Clark</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
          <div className="card">
            <h3>Member 6</h3>
            <h4>Michael Brown</h4>
            <p>
              Add a short bio for each team member. Make it brief and
              informative to maintain visitor engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>Founded</h2>
        <p>2023</p>
        <h2>Mission</h2>
        <p>
          To facilitate food donations, improve community nourishment, and raise
          awareness through educational resources.
        </p>
        <h2>Vision</h2>
        <p>
          To create a world where everyone has access to nutritious food and
          where food waste is significantly reduced.
        </p>
        <h2>Awards</h2>
        <p>
          FoodForAll has been honored for its outstanding work in facilitating
          food donations and improving community nourishment.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
