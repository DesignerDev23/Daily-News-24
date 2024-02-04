import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.summary}>
      Summary
      </Text>
      <Text style={styles.website}>
      Website Name: Daily News 24
      </Text>
      <Text style={styles.website}>
      Website Address: dailynews24.ng
      </Text>
      <Text style={styles.website}>
      Publisher Name: Ayrah Media Concept Ltd.
      </Text>
      <Text style={styles.website}>
      Corporate Address: 392, New Gandu Layout, Behind Trade Fair Ground, Zoo Road, Kano State, Nigeria.
      </Text>
      <Text style={styles.website}>
      Email: dn24newsroom@gmail.com, ayrahmedia@gmail.com
      </Text>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to Daily News 24, your ultimate source for the latest news and insightful features on topical issues in Nigeria. As a leading online news platform, we have developed a reputation for delivering up-to-the-minute news, in-depth investigations, and engaging content that resonates with our readers.
      </Text>
      <Text style={styles.paragraph}>
        At Daily News 24, we understand the importance of staying informed and connected in today’s fast-paced world. Our team of skilled journalists and writers, with years of expertise in the field, strives to bring you the most accurate and comprehensive news coverage available. We pride ourselves on delivering breaking news that keeps you ahead of the curve, ensuring you are always up to date with the latest happenings across Nigeria.
      </Text>
      <Text style={styles.paragraph}>
        Our commitment to providing diverse coverage extends to various areas of interest. From politics to business, sports to entertainment, our dedicated team works tirelessly to bring you a wide range of stories that impact your everyday life. Whether you’re seeking in-depth analysis of political developments, captivating sports articles, or thought-provoking features on trending topics, Daily News 24 is your go-to platform.
      </Text>
      <Text style={styles.paragraph}>
      In addition to our news reporting, we take pride in our investigative journalism. We believe in holding those in power accountable and shedding light on critical issues that often go unnoticed. Through thorough research and meticulous fact-checking, our investigations strive to uncover hidden truths and provide a voice to the voiceless in our society.
      </Text>
      <Text style={styles.paragraph}>Daily News 24 is not just a news platform; we aim to create an interactive and engaging experience for our readers. We encourage our audience to participate by sharing their opinions, comments, and perspectives on the stories that matter most to them. By fostering an atmosphere of open dialogue, we create a community that values diversity of thought and encourages healthy discussions.
Our commitment to excellence extends beyond our news coverage. Daily News 24’s intuitive website design ensures easy navigation and quick access to the information you need. Whether you prefer reading on your desktop, tablet, or smartphone, we have optimised our platform to deliver an exceptional user experience across all devices.
      </Text>
      <Text style={styles.paragraph}>At Daily News 24, we believe that knowledge is power, and our goal is to empower you with accurate, reliable, and thought-provoking content. We are passionate about delivering news that informs, educates, and sparks conversations that shape our society.
    </Text>
      <Text style={styles.paragraph}>Thank you for choosing Daily News 24 as your trusted source for online news in Nigeria. Join us in our mission to stay informed, engaged, and empowered. Together, let’s explore the ever-evolving landscape of Nigeria and beyond.
      </Text>
      <Text style={styles.title}>Our Core Value</Text>
      <Text style={styles.paragraph}>Fairness, equity, inclusion, and integrity
      </Text>
      <Text style={styles.title}>Lunch Date</Text>
      <Text style={styles.paragraph}>July 8, 2020
      </Text>
      <Text style={styles.title}>Meet Our Publishing Authors</Text>
      <Image
        source={require('../assets/publishers 2.png')}  // Update the path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Meet Our Digital Media Team</Text>
      <Image
        source={require('../assets/publishers.png')}  // Update the path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Daily News 24 Virtual Studio</Text>
      <Image
        source={require('../assets/studio.png')}  // Update the path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Daily News 24 Video and Graphics Editing Suite</Text>
      <Image
        source={require('../assets/Graphics.png')}  // Update the path to your image
        style={styles.image}
      />
      <Text style={styles.line}></Text>
      {/* Add the rest of your content here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
  },
  line: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 56,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    color: '#333',
  },
  summary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 24,
    color: '#333',
  },
  image: {
    width: '100%',  // Adjust the width as needed
    height: 200,    // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 16,
  },
  website: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#333',
  },
});

export default AboutUsScreen;
