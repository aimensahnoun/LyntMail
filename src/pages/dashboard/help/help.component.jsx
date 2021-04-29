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
      title: "How does Lyntmail work?",
      detail:
        "Lyntmail takes user details with their permission from services that are used on day to day like like Google, Facebook, Yahoo, etc... That data is displayed to LyntMail users",
    },
    {
      title: "What is a Lyntmail campaign?",
      detail:
        "A campaign is a link that can be visited by your followers or visitors of the website where they can share their user details such as email,full name, and phone number. Lyntmail users can have one default campaign or multiple campaigns for different use",
    },
    {
      title: "How to create a Lyntmail campaign?",
      detail:
        "To create a Lyntmail campaign, users should head to the <Links> tab on the dashboard - followed by clicking the <Generate Link> button on the top right of the screen. Users have the option to create a Lyntmail link where leads' data will be stored on our database to be exported in excel format or if you have an existing Mailchimp account, then you can store it there, by creating a Mailchimp link",
    },
    {
      title: "How to link Mailchimp account to Lyntmail ?",
      detail: [
        `In order to generate a MailChimp link the user need to provide MailChimp's api key in the <Settigns> tab. You can find a guide on how to get an api key here `,
        <a href={"https://mailchimp.com/help/about-api-keys/"} target="_blank">
          About Api Key
        </a>,
      ],
    },
    {
      title: "Stats from dashboard missing Mailchimp subscriptions",
      detail:
        "When using a Mailchimp link for a campaign, all data is stored on the Mailchimp servers thus stats for those leads will not be present on the charts in our main dashboard",
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
