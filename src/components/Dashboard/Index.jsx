import React from "react";
import Hero from "./Hero";
import Tournaments from "./Tournaments";
import TournamentResults from "./TournamentResults";
import PickOuts from "./PickOuts";
import SearchTeamMember from "./SearchTeamMember";
import EntryCriteria from "./EntryCriteria";
import Products from "./Products";

const Index = () => {
  return (
    <>
      <Hero />
      <Tournaments />
      <TournamentResults />
      <PickOuts />
      <SearchTeamMember />
      <EntryCriteria />
      <Products />
    </>
  );
};

export default Index;
