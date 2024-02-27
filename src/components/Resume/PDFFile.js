import React from 'react';
import {
  Link,
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
    marginBottom: 10, // Add margin bottom to create space between sections
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato Bold",
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

const Header = () => (
  <View style={headerStyles.container}>
    <View style={headerStyles.detailColumn}>
      <Text style={headerStyles.name}>Nan Wroblewski</Text>
      <Text style={headerStyles.subtitle}>Philadelphia, Pennsylvania (Able to Relocate)</Text>
      <Text style={headerStyles.subtitle}>+1 330-704-0488 | vr000nan@gmail.com</Text>
      <Text style={headerStyles.link}>
        <Link href="https://www.linkedin.com/in/nan-wroblewski-09547a224/">LinkedIn</Link> |{' '}
        <Link href="https://github.com/vr000nan">GitHub</Link> |{' '}
        <Link href="https://vr000nan.netlify.com">Portfolio</Link>
      </Text>
    </View>
  </View>
);

const titleStyles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

const Title = ({ children }) => (
  <Text style={titleStyles.title}>{children}</Text>
);

const listStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const List = ({ children }) => children;

const Item = ({ children }) => (
  <View style={listStyles.item}>
    <Text style={listStyles.bulletPoint}>•</Text>
    <Text style={listStyles.itemContent}>{children}</Text>
  </View>
);

const skillsStyles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={skillsStyles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      skills={[
        "My ability to communicate effectively and work seamlessly within cross-functional teams underscores my commitment to fostering a collaborative and inclusive work environment. Eager to contribute my skills and enthusiasm to innovative projects, I am poised to make a positive impact in the realm of web-based software engineering."
      ]}
    />
  </View>
);

const experienceStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  entryContainer: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    color: "black",
    textDecoration: "none",
  },
  date: {
    fontSize: 10,
    fontFamily: "Lato Italic",
    marginBottom: 5,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const ExperienceEntry = ({ company, position, date, details }) => (
  <View style={experienceStyles.entryContainer}>
    <Text style={experienceStyles.title}>{company} | {position}</Text>
    <Text style={experienceStyles.date}>{date}</Text>
    <List>
      {details.map((detail, i) => (
        <Item key={i}>{detail}</Item>
      ))}
    </List>
  </View>
);

const Experience = () => (
  <View style={experienceStyles.container}>
    <Title>Professional Experience</Title>
    <ExperienceEntry
      company="UI/UX Developer"
      position="Rise Marketing"
      date="August 2023 - Present"
      details={[
        "Proficient in leveraging JavaScript and PHP to create dynamic and responsive user interfaces.",
        "Developed interactive web applications with a focus on optimizing user experiences through sleek and intuitive designs.",
        "Skilled in using popular JavaScript frameworks like React to build modern, single-page applications (SPAs). Employed React's component-based architecture to create reusable UI elements, streamlining development workflows.",
        "Prioritized user-centered design principles, conducting usability testing, and gathering user feedback to inform interface enhancements. Ensured that web applications were visually appealing, user-friendly, and accessible across devices.",
        "Created responsive web designs using HTML/CSS and JavaScript, ensuring seamless user experiences on various screen sizes and devices.",
        "Conducted thorough testing and debugging of JavaScript code to identify and resolve issues, ensuring the reliability and stability of web applications.",
      ]}
    />
    <ExperienceEntry
      company="Software Engineer 1"
      position="JP Morgan Chase & Co."
      date="October 2022 - July 2023"
      details={[
        "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
        "Led cross-functional teams, implementing cutting-edge software solutions for enhanced operational efficiency.",
        "Committed to continuous learning and innovation, contributing breakthrough ideas to drive excellence.",
        "Ensured top-notch code quality through rigorous reviews, delivering high-performing systems.",
        "Modernized legacy code, elevating functionality, and stability.",
        "Recognized for transforming complex systems into streamlined platforms.",
        "Wrote and tested front end components with React, react-testing library, and MDS styling.",
        "Gained knowledge on Java, SpringBoot, and Typescript and utilized it on a daily basis.",
      ]}
    />
    <ExperienceEntry
      company="Mentor/Instructor Associate"
      position="Fullstack Academy"
      date="January 2022 - Present"
      details={[
        "Exemplified exceptional quality control, meticulously evaluating student submissions against grading rubrics to ensure compliance with requirements.",
        "Served as a dedicated mentor and invaluable support to coding bootcamp students, fostering their success throughout the program and facilitating their smooth transition into the tech industry.",
        "Proactively collaborated with instructors to enhance the curriculum and instructional materials, resulting in a superior learning experience and outcomes for students.",
        "Demonstrated keen analytical skills by conducting regular assessments of student progress, tracking their learning journeys, and providing targeted feedback for continuous improvement.",
      ]}
    />
  </View>
);

const educationStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 10,
  },
  details: {
    fontFamily: "Lato",
    fontSize: 10,
  },
});

const Education = () => (
  <View style={educationStyles.container}>
    <Title>Education</Title>
    <Text style={educationStyles.title}>Certificate in Web Development and Software Engineering, December 2021</Text>
    <Text style={educationStyles.details}>University Of North Florida Remote, Florida</Text>
    <Text style={educationStyles.title}>AWS Cloud Practitioner Certificate, February 2023</Text>
    <Text style={educationStyles.details}>Amazon Web Services Remote, PA</Text>
    <Text style={educationStyles.title}>Certified Scrum Master, January 2024</Text>
    <Text style={educationStyles.details}>Scrum Alliance Remote, PA</Text>
  </View>
);

const resumeStyles = StyleSheet.create({
  page: {
    padding: 30,
  },
});

Font.register({
  family: "Lato",
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});

Font.register({
  family: "Lato Italic",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf",
});

Font.register({
  family: "Lato Bold",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

const PDFFile = () => (
  <Document
    author="Nan Wroblewski"
    keywords="resume, software engineer, JavaScript, React, PHP, SpringBoot, SQL, AWS, Agile"
    subject="Resume"
    title="Nan Wroblewski Resume"
  >
    <Page size="A4" style={resumeStyles.page}>
      <Header />
      <Skills />
      <Experience />
      <Education />
    </Page>
  </Document>
);

export default PDFFile;
