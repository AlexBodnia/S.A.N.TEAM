import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import BenefitsSport from "../sections/benefitssport";
import VideoSection from "../sections/video-section";
import Feature from "../sections/feature";
import GroupKid from "../sections/groupkid";
import GroupAdult from "../sections/groupadult";
import Sponsors from "../sections/sponsors";
import Pricing from "../sections/pricing";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="S.A.N.TEAM" />
        <Banner />
        <BenefitsSport />
        <VideoSection />
        <Feature />
        <GroupKid />
        <GroupAdult />
        <Sponsors />
        <Pricing />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
