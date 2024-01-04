import Team from "@/app/ui/dashboard/team/Team";
import React from "react";

const teams = [
  {
    id: 1,
    name: "Jonh Doe",
    img: "",
    email: "jonhdoe@gmail.com",
    position: "Leader",
  },
  {
    id: 2,
    name: "Hanna",
    img: "https://images.pexels.com/photos/12639043/pexels-photo-12639043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    email: "hanna@gmail.com",
    position: "Member",
  },
  {
    id: 3,
    name: "Jack",
    img: "https://images.pexels.com/photos/7050090/pexels-photo-7050090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    email: "jack@gmail.com",
    position: "Sub Leader",
  },
  {
    id: 4,
    name: "Misthy",
    img: "https://images.pexels.com/photos/8264826/pexels-photo-8264826.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    email: "misthy@gmail.com",
    position: "Member",
  },
  {
    id: 5,
    name: "Jonhson",
    img: "https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    email: "jonhson@gmail.com",
    position: "Member",
  },
  {
    id: 6,
    name: "gramsay",
    img: "https://images.pexels.com/photos/12857579/pexels-photo-12857579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    email: "gramsay@gmail.com",
    position: "Member",
  },
];

const TeamsPage = () => {
  return (
    <div>
      <Team teams={teams} />
    </div>
  );
};

export default TeamsPage;
