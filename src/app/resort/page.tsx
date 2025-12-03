import { Banner } from "@/components";
import React from "react";
import { resortPageData } from "./resortPageData";
import { SignatureTherapies } from "../(home)/components";
import ExperiencesSliders from "./components/ExperiencesSliders";
import Restaurant from "./components/Restaurant";

const page = () => {
  return (
    <div>
      <Banner {...resortPageData?.bannerData} />
      <SignatureTherapies
        {...resortPageData.signatureTherapies}
        button={false}
        showDetails={false}
      />
      <ExperiencesSliders {...resortPageData?.experienceData} />
      <Restaurant {...resortPageData?.restaurantPageData} />
    </div>
  );
};

export default page;
