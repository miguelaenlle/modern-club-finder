import React from "react";
import { useState } from "react";
import ReusableClub from "./ReusableClub";
import Clubs from "./script/ClubScript";
import Modal from "../../pages/Modal";

const Club = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const handleClick = (id) => {
    setSelectedClub(id)
    setShowModal(!showModal);
  };

  const clubsShown = [
    [
      "6415cfb2a90acb37c316b6e0",
      "Hersey Hack Club",
      ["Coding", "Math", "Science"],
      "Learn to code and build awesome projects at the JHHS Hack Club! No experience needed",
      "Every Friday",
      "4:00PM - 5:00PM",
      "158",
      "Bob Brown",
      "bob.brown@d214.org",
    ]
  ];
  const reusableClubArray = [];

  clubsShown.forEach((sub) => {
    reusableClubArray.push(
      <div onClick={() => {
        handleClick(sub[0])
      }}>
        <ReusableClub className="inline-block" sub={sub} />
      </div>
    );
  });

  return (
    <div
      className="div-margin ml-10 mr-10 grid grid-cols-1 phone: grids-cols-2 gap-2 ml-10 mr-10 tablet:grid-cols-2 gap-2 ml-10 mr-10 laptop:grid-cols-3 gap-2 ml-10 mr-10 desktop:grid-cols-3 gap-5 ml-10 mr-10"
    >
      {reusableClubArray}
      {showModal && (
        <Modal
          selectedClub={selectedClub}
          title="JHHS Hack Club"
          content="Learn to code and build awesome projects at the JHHS Hack Club! No prior experience needed. We also do hackathons, game nights, and more!"
          date="Every Monday"
          time="4:00PM - 5:00PM"
          room="JHHS Room 158"
          email="Email Sponsor (Bob Brown)"
          link="herseyhack.club"
          onClose={handleClick}
        />
      )}
    </div>
  );
};

export default Club;
