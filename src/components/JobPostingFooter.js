import React from "react";
import HomepageHeader from "./HomepageHeader";
import HomepageFeatures from "./HomepageFeatures";
import styles from "../pages/index.module.css";
import ContactForm from "./ContactForm";

export const APPLY_FORM_URL = "https://submit-form.com/9yOnVWVN";

export const DataSQRLWorkBenefits = [
  {
    title: 'Personal Growth',
    image: '/img/generic/undraw_growth.svg',
    description: (
      <>
        You develop a personal growth plan with your mentor based on your skills
        and career goals. We actively invest in your growth plan and support you along the way.
        And this isn't an HR scheme to measure your performance.
      </>
    ),
  },
  {
    title: 'Work Flexibility',
    image: '/img/index/undraw_time_management_sqrl.svg',
    description: (
      <>
        DataSQRL is a distributed company which allows you to work remotely where and when is best for you.
        We have the experience to build remote teams that work well and maximize your impact without
        getting in the way of your life.
      </>
    ),
  },
  {
    title: 'Solid Benefits',
    image: '/img/index/undraw_online_shopping_sqrl.svg',
    description: (
      <>
        We have you covered with health benefits and PTO. Take paid time off when you need to take care
        of others and we also ask that you take a minimum PTO to take care of yourself. Rest
        is important for high-performance.
      </>
    ),
  },
];

export const WhyWorkAtDataSQRL = [
  {
    title: 'Impactful Mission',
    image: '/img/generic/undraw_launch.svg',
    description: (
      <>
        Our vision is to make building data products as easy as creating a
        spreadsheet. Data is the lifeblood of the modern economy. Our mission
        is to enable people to build with data through open-source technology
        so they can participate in the data economy.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/mission/',
    linkText: 'Our Mission & Vision'
  },
  {
    title: 'Learning Environment',
    image: '/img/generic/undraw_data_points.svg',
    description: (
      <>
        You get to work on hard problems and open-source technology with recognized
        experts who provide mentorship and guidance. Moreover, DataSQRL is committed to
        your learning journey with hands-on support and not just abstract career training.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/you/',
    linkText: 'Our Commitment to You'
  },
  {
    title: 'Responsibility with Support',
    image: '/img/index/undraw_active_support_sqrl.svg',
    description: (
      <>
        At DataSQRL, we are building a culture of responsibility that enables you to
        tackle challenging projects with autonomy and resourcefulness. We don't just
        throw you into the cold water, but provide a safe environment and support for you to succeed.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/culture/',
    linkText: 'Our Culture'
  },
];

export default function JobPostingFooter({jobTitle}) {
  return (
    <div>
        <HomepageFeatures FeatureList={WhyWorkAtDataSQRL} headline="Why Work for DataSQRL?" />
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3">
              </div>
              <div className="col col--6">
                <h2 className="margin-bottom--md">Apply for {jobTitle}</h2>
                <p>
                  Apply to join the DataSQRL teams as {jobTitle}.<br />
                  Enter your name, email, and 2 sentences on how the {jobTitle} position aligns with your career goals.<br />
                  We'll get back to you asap with more information and next steps.
                </p>
                <ContactForm formURL={APPLY_FORM_URL} messageLabel="How does this position align with your career goals?" submitText="Apply Now!" context={jobTitle} />
              </div>
              <div className="col col--3">
              </div>
            </div>
          </div>
        </section>
       <HomepageFeatures FeatureList={DataSQRLWorkBenefits} headline="What We Offer"/>
    </div>
  );
}
