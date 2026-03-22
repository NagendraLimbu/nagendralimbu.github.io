import cloudEngineerCertLogo from '../assets/cloud_engineer_cert_logo.png';

export const profileData = {
  projects: [],
  about2: `Full-Stack Software Engineer with expertise in Financial, Banking, and Healthcare applications.`,
  about: `Experienced and progressive software engineer with professional experience in development and IT project management roles. Strong ability to analyze processes and determine strategies for improved workflow, efficiency, and team performance. Proactive solution provider with keen insight into implementing modern practices within legacy systems. Detail-oriented approach with exceptional testing skills. Expertise in implementing business solutions in Financial and Banking Applications and health care.`,
  resumeurl: `https://drive.google.com/file/d/11fUSKY9LSWyGqoJb-qK90PXDbJXFU0Ls`, // Placeholder from previous, can update later if needed

  skills: [
    { id: '1', skill: 'Java (8/11/17/21/25), J2EE, Groovy', progress: '95%' },
    { id: '2', skill: 'Spring Ecosystem (Boot, MVC, Batch, Cloud, AI)', progress: '95%' },
    { id: '3', skill: 'Angular, React, TypeScript', progress: '85%' },
    { id: '4', skill: 'Microservices & RESTful APIs', progress: '90%' },
    { id: '5', skill: 'Apache Kafka, RabbitMQ', progress: '85%' },
    { id: '6', skill: 'GCP, PCF, OCP, Docker, Kubernetes, AWS, Azure', progress: '85%' },
    { id: '7', skill: 'PostgreSQL, MySQL, Oracle DB, SQL Server, MongoDB', progress: '80%' },
    { id: '8', skill: 'Jenkins, Concourse, Maven, Git', progress: '90%' },
    { id: '9', skill: 'JUnit, Spock, Mockito (TDD)', progress: '90%' }
  ],

  education: [
    {
      id: '1',
      from_to_year: 'Graduated: 2017',
      education: "Master of Science",
      stream: 'Computer Science',
      info: `Key Courses: Fundamental Programming Practice, Modern Programming Practice, Web Application Programming, Algorithm, Web Application Architecture and Frameworks, Enterprise Architecture, Advanced Software Development`,
      institution: 'Maharishi University of Management, Fairfield, Iowa, US'
    },
    {
      id: '2',
      from_to_year: 'Graduated: 2010',
      education: "Bachelor of Engineering",
      stream: 'Computer Engineering',
      institution: 'Himalaya College of Engineering, Kathmandu, Nepal',
      info: `Computer Engineering.`
    }
  ],

  experience: [
    {
      id: 6,
      company: 'Huntington Bank',
      location: 'Columbus, OH, USA',
      timeline: 'April 2024 – Current',
      role: 'Programmer/Analyst-Senior',
      work: [
        { eachwork: `System Architecture & Design: Translate complex business requirements into scalable, cloud-native solutions using Java/J2EE and Spring Boot, ensuring alignment with 12-factor app principles and organizational goals.` },
        { eachwork: `Stakeholder Collaboration: Partner with Product Owners and Software Architects to define technical roadmaps, project scopes, and deliverables for high-traffic Microservices architectures.` },
        { eachwork: `Full-Stack Development: Lead the design and implementation of secure, high-quality applications using Spring Framework (Web, Boot, Data, AI) on the backend and Angular/TypeScript for modern, responsive frontends.` },
        { eachwork: `API & Integration Engineering: Build, test, and optimize RESTful APIs and event-driven integrations using Kafka and RabbitMQ to ensure seamless data flow between distributed services.` },
        { eachwork: `Code Excellence: Spearhead peer code reviews to enforce coding standards, performance optimization, and secure development practices within the Spring MVC design pattern.` },
        { eachwork: `Cloud Operations (GCP/OCP): Manage the end-to-end lifecycle of services on Google Cloud Platform and OpenShift, including writing manifest files, scaling containers with Docker, and managing deployments.` },
        { eachwork: `Database Optimization: Design and tune complex data models and queries for PostgreSQL, MySQL, and Oracle, prioritizing reliability and high-speed data retrieval.` },
        { eachwork: `Observability & Resolution: Conduct root-cause analysis of production bottlenecks using Splunk, New Relic, and Dynatrace, and implement performance tuning to ensure 99.9% system uptime.` },
        { eachwork: `Technical Mentorship: Foster engineering excellence by providing technical guidance to junior developers, promoting Test-Driven Development (TDD), and maintaining comprehensive architecture diagrams/documentation.` },
        { eachwork: `Agile Delivery: Drive Agile/Scrum processes, including precise task estimation, sprint planning, and backlog refinement to maintain a high-velocity development cycle.` },
        { eachwork: `CI/CD & DevOps Automation: Orchestrate automated deployment pipelines using Jenkins and Concourse, utilizing Maven/Gradle to streamline reliable, continuous application releases.` },
        { eachwork: `Testing & Quality Assurance: Develop comprehensive unit and integration test suites using Spock, Groovy, and Mockito, and coordinate with stakeholders to ensure successful User Acceptance Testing (UAT).` }
      ]
    },
    {
      id: 5,
      company: 'Tidal Impact LLC (Client: Huntington Bank / Cardinal Health)',
      location: 'Columbus, OH, USA',
      timeline: 'July 2020 – March 2024',
      role: 'Full-Stack Software Engineer',
      work: [
        { eachwork: `Architected and scaled robust microservices using Spring Boot and Spring MVC, strictly adhering to 12-Factor App methodology for cloud-native environments.` },
        { eachwork: `Engineered asynchronous communication systems utilizing Apache Kafka and RabbitMQ to ensure high-throughput, fault-tolerant messaging across distributed service architectures.` },
        { eachwork: `Designed and implemented Spring Batch microservices to automate complex data processing tasks, improving efficiency and system throughput.` },
        { eachwork: `Collaborated with architects and business analysts to design and maintain end-to-end solutions, translating complex User Stories into technical requirements and high-level designs.` },
        { eachwork: `Spearheaded cloud deployment strategies on GCP, PCF, and OpenShift (OCP), managing container orchestration, manifest configurations, and automated scaling.` },
        { eachwork: `Optimized CI/CD release cycles by architecting and maintaining Concourse and Jenkins pipelines, ensuring seamless integration and high deployment reliability.` },
        { eachwork: `Ensured system performance and reliability through active monitoring and observability using enterprise tools, including Splunk, New Relic, and Dynatrace.` },
        { eachwork: `Developed high-performance user interfaces using Angular 14, TypeScript, Node.js, and modern CSS3/HTML5, ensuring a responsive and accessible user experience.` },
        { eachwork: `Streamlined full-stack integration by aligning frontend design with backend API schemas, resulting in a cohesive and efficient application flow.` },
        { eachwork: `Championed quality assurance standards within the team by establishing and enforcing code review processes, pair programming practices, and documentation workflows.` },
        { eachwork: `Ensured high-coverage testing through extensive unit and integration testing frameworks (Spock, Groovy, Mockito), significantly reducing production bugs and technical debt.` },
        { eachwork: `Produced comprehensive technical documentation, including system flowcharts, architecture diagrams, and clear code comments, to facilitate long-term maintenance and team knowledge sharing.` }
      ]
    },
    {
      id: 4,
      company: 'G2O Inc. (Client: M&T Bank)',
      location: 'Columbus, OH, USA',
      timeline: 'September 2018 – April 2020',
      role: 'Java Developer',
      work: [
        { eachwork: `Microservices & Cloud Architecture: Architected and developed scalable microservices using Spring Boot and 12-Factor App methodologies. Managed the full deployment lifecycle on GCP and Pivotal Cloud Foundry (PCF), including authoring manifest files and horizontal scaling.` },
        { eachwork: `Full-Stack Development: Engineered responsive frontends using Angular (v6+), TypeScript, Node.js, and AJAX, while implementing robust backend logic through the Spring MVC design pattern.` },
        { eachwork: `API Design & Integration: Developed and modernized RESTful and SOAP web services, utilizing Spring Cloud Config for centralized configuration and ensuring seamless data exchange between upstream and downstream systems.` },
        { eachwork: `Messaging & Event-Driven Logic: Implemented IBM MQ for reliable asynchronous messaging and handled both synchronous and asynchronous communication flows to ensure system decoupling.` },
        { eachwork: `Agile Leadership & Planning: Led requirements gathering and technical analysis in Scrum environments; collaborated with System Engineers to refine User Stories and provide high-accuracy effort estimations.` },
        { eachwork: `DevOps & CI/CD Excellence: Streamlined development workflows using Maven, Jenkins, and Docker. Managed application builds and deployments onto Apache Tomcat and cloud-native environments.` },
        { eachwork: `Production Support & Observability: Provided critical Tier-3 support, utilizing Kibana and ServiceNow for centralized logging, incident management, and real-time application monitoring.` },
        { eachwork: `Root Cause Analysis (RCA): Spearheaded troubleshooting for complex production emergencies, performing deep-dive data analysis and documenting architectural fixes to prevent recurring issues.` },
        { eachwork: `Collaborative Quality Assurance: Leveraged Pair Programming to enhance code quality; developed comprehensive unit tests using the JUnit framework to maintain high code coverage.` },
        { eachwork: `Cross-Functional Coordination: Acted as a technical liaison between System Testing (ST), System Engineering (SE), and UAT teams to resolve blockers and ensure successful platform migrations.` },
        { eachwork: `On-Call & Platform Migration: Provided expert-level support for platform migrations and production deployments, including rotating after-hours and weekend emergency coverage.` }
      ]
    },
    {
      id: 3,
      company: 'Collabera Inc (Client: Visa Inc.)',
      location: 'Austin, TX, USA',
      timeline: 'February 2018 – September 2018',
      role: 'Java Developer',
      work: [
        { eachwork: `Used Spring (MVC) architecture to implement the application using the concrete principles laid down by several design patterns such as Façade, Factory, Singleton, and Data Access Object.` },
        { eachwork: `Designed and developed micro-services using Spring Boot based on requirements.` },
        { eachwork: `Used Spring Framework for Transaction Management and Dependency Injection.` },
        { eachwork: `Rest, JMS is used to communicate between micro-services.` },
        { eachwork: `Implemented ZeroMQ for messaging.` },
        { eachwork: `Used HQL (Hibernate Query Language) to query the Database System and used JDBC` },
        { eachwork: `Developed the front-end user interface for the application using Angular/React, HTML, CSS, JavaScript, and AJAX.` },
        { eachwork: `Application build, deployment, and continuous integration using Jenkins/Maven.` },
        { eachwork: `Drove successful outcomes using a test-driven development approach, performing Junit for unit testing on individual Java components.` },
        { eachwork: `Development of a REST API to create a Web service to communicate between different applications.` },
        { eachwork: `Spring MVC and following Agile principles using JIRA and Rally.` }
      ]
    },
    {
      id: 2,
      company: 'Vastika Inc.',
      location: 'Irving, TX, USA',
      timeline: 'September 2016 – January 2018',
      role: 'Java/J2EE Developer',
      work: [
        { eachwork: `Used Spring (MVC) architecture to implement the application using the concrete principles laid down by several design patterns such as Façade, Factory, Singleton, and Data Access Object.` },
        { eachwork: `Used Spring Framework for Transaction Management and Dependency Injection.` },
        { eachwork: `Used Hibernate annotations for mapping objects to the relational database and implemented persistence using Hibernate.` },
        { eachwork: `Used HQL (Hibernate Query Language) to query the Database System and used JDBC` },
        { eachwork: `Extensively used Hibernate as an ORM Framework and dealt with concepts such as Eager fetch, lazy loading, and transactions.` },
        { eachwork: `Developed the front-end user interface for the application using JSP, HTML, CSS, JavaScript, and AJAX.` },
        { eachwork: `Assisted with application build, deployment, and continuous integration using Jenkins/Maven and Docker.` },
        { eachwork: `Drove successful outcomes using a test-driven development approach, performing Junit for unit testing on individual Java components.` },
        { eachwork: `Development of a REST API to create Web services to communicate between different applications.` },
        { eachwork: `Spring MVC and following Agile principles using JIRA.` },
        { eachwork: `Written database objects like stored procedures in SQL.` }
      ]
    },
    {
      id: 1,
      company: 'IT Village Technology Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      timeline: 'August 2011 - October 2015',
      role: 'Java/J2EE Developer',
      work: [
        { eachwork: `Involved in various software development life cycle phases of the project using Agile methodologies.` },
        { eachwork: `Used various core Java concepts such as exception handling and collection APIs to implement various features and enhancements.` },
        { eachwork: `Performed system analysis and design using OOA/OOD and UML diagrams.` },
        { eachwork: `Involved in the implementation of MVC architecture using Spring Framework.` },
        { eachwork: `Developed a GUI using JSP, JavaScript, HTML, AJAX, CSS, and jQuery.` },
        { eachwork: `Developed a business domain, which is internally handled by the session bean and hibernates.` },
        { eachwork: `Developed a data persistence API using Hibernate and Spring DAO layer.` },
        { eachwork: `Developed various Java objects (POJOs) as part of persistence classes for ORM.` },
        { eachwork: `Used Maven and Jenkins tools to build Java applications for deployment of the application.` },
        { eachwork: `Used Git as a configuration management tool for code versioning and release.` },
        { eachwork: `Developed unit test cases using the JUnit framework.` }
      ]
    }
  ],

  certificates: [
    {
      id: '1',
      title: 'Associate Cloud Engineer',
      issued: 'March 2026',
      credential_id: '989454de6e9547c1aef29f32e529de73',
      logo: cloudEngineerCertLogo,
      url: 'https://www.credly.com/badges/25e8c10a-24d6-4605-8f57-78268a5f7ea3'
    }
  ],

  extraCircularInfo: [
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/nag_github.png',
      url: 'https://github.com/NagendraLimbu/'
    }
  ]
};
