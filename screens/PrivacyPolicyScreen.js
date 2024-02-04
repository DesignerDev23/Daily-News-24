// PrivacyPolicyScreen.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily News 24 Privacy Policy</Text>
      <Text style={styles.paragraph}>
      At Daily News 24, accessible from https://dailynews24.ng, one of our main priorities is the privacy of our visitors.
      This Privacy Policy document contains types of information that is collected and recorded by DailyNews24.NG and how we use it.
      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
      This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in DailyNews24.NG.
      This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
      </Text>
      <Text style={styles.title}>Information we collect</Text>
      <Text style={styles.paragraph}>
      The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
      If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide
      When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
      </Text>
      <Text style={styles.title}>Log Files</Text>
      <Text style={styles.paragraph}>
      DailyNews24.NG follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
      </Text>
      <Text style={styles.title}>Cookies and Web Beacons</Text>
      <Text style={styles.paragraph}>
      Like any other website, DailyNews24.NG uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
      For more general information on cookies, please read “What Are Cookies” from Cookie Consent.
      </Text>
      <Text style={styles.title}>Advertising Partners Privacy Policies</Text>
      <Text style={styles.paragraph}>
      You may consult this list to find the Privacy Policy for each of the advertising partners of DailyNews24.NG. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on DailyNews24.NG, which are sent directly to users’ browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that DailyNews24.NG has no access to or control over these cookies that are used by third-party advertisers.
      </Text>
      <Text style={styles.title}>Mobile Application Privacy Policy</Text>
      <Text style={styles.paragraph}>
      Ayrah Media Concept Ltd. built the Daily News 24 App as a Free app. This SERVICE is provided by Ayrah Media Concept Ltd. at no cost and is intended for use as is. sThis page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Daily News 24 unless otherwise defined in this Privacy Policy.
      </Text>
      <Text style={styles.title}>Security</Text>
      <Text style={styles.paragraph}>
      We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
      </Text>
      <Text style={styles.title}>Children's Privacy</Text>
      <Text style={styles.paragraph}>
      These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
      </Text>
      {/* Add the rest of the Privacy Policy content here */}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: '#fff',
  },
    paragraph: {
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default PrivacyPolicyScreen;
