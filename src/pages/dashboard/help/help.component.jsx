import React from "react";
import { PageContainer } from "../defaut.styles";
import CustomizedAccordions from "../../../components/accordion/Accordion.component";
import { Container } from "./help.styles";

function Help() {
  const a = (
    <a href="https://mailchimp.com/help/about-api-keys/">About API key</a>
  );

  const items = [
    {
      title: "How does SwipeMail work?",
      detail:
        "SwipeMail takes user details with their permission from services that are used on day to day like like Google, Facebook, Yahoo, etc...\nThat data is displayed to SwipeMail users",
    },
    {
      title: "What is a SwipeMail Campaign?",
      detail:
        "A campaign is a link that can be visited by your followers where they can subscribe to newsletters, SwipeMail users can have one default campaign or multiple campaigns for different use",
    },
    {
      title: "How to create a SwipeMail Campaign?",
      detail:
        "In order to create a SwipeMail campaign, users should head to the <Links> tab on the dashboard - followed by clicking the <Generate Link> button on top right of the screen.\nUsers have the option to create a SwipeMail link where followers data will be stored on our database or use an available MailChimp account",
    },
    {
      title: "How to link MailChimp account to SwipeMail ?",
      detail: [
        `In order to generate a MailChimp link the user need to provide MailChimp's api key in the <Settigns> tab. You can find a guide on how to get an api key here `,
        <a href={"https://mailchimp.com/help/about-api-keys/"} target="_blank">
          About Api Key
        </a>,
      ],
    },
    {
      title: "Stats from dashboard missing MailChimp subscriptions",
      detail:
        "When using a MailChimp link for a campaign, all data is stored on the MailChimp servers thus stats from those subscriptions will not be present on the charts in the our main dashboard",
    },
  ];

  return (
    <PageContainer>
      <h2
        style={{
          fontFamily: "Gilroy",
          fontWeight: "bold",
          color: "#000",
          fontSize: "1.5rem",
          letterSpacing: "1px",
          marginBottom: "2rem",
        }}
      >
        Help
      </h2>
      <Container style={{ overflowY: "scroll" }}>
        <CustomizedAccordions title={items[0].title} detail={items[0].detail} />
        <CustomizedAccordions title={items[1].title} detail={items[1].detail} />
        <CustomizedAccordions title={items[2].title} detail={items[2].detail} />
        <CustomizedAccordions title={items[3].title} detail={items[3].detail} />
        <CustomizedAccordions title={items[4].title} detail={items[4].detail} />
      </Container>
    </PageContainer>
  );
}

export default Help;
