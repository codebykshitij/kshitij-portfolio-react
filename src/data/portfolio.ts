export const portfolioData = {
  personal: {
    name: "Kshitij Azad",
    title: "Associate Software Engineer | Java Development",
    tagline: "Passionate About Learning, Coding, and Contributing",
    email: "kshitijazad.ka@gmail.com",
    phone: "+91 9669983847",
    location: "Indore, India",
    bio: "Full-stack developer with hands-on experience in Java, Spring Boot, REST APIs, and modern web technologies. Passionate about building scalable, secure applications with clean architecture and great user experience. Skilled in MySQL, Cassandra, Docker, and AWS, with a strong focus on performance and continuous improvement.",
    resumeUrl: "/documents/Kshitij_Azad.pdf"
  },
  skills: {
    development: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "Spring Boot", level: 88, icon: "🌱" },
      { name: "JUnit", level: 80, icon: "🧪" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Postman", level: 90, icon: "📬" },
      { name: "Swagger", level: 85, icon: "📄" },
      { name: "OpenAPI Codegen", level: 75, icon: "💡" }
    ],
    databaseAndDevOps: [
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "CassandraDB", level: 75, icon: "🟦" },
      { name: "Oracle", level: 70, icon: "🔵" },
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "Kubernetes", level: 78, icon: "📦" },
      { name: "Jenkins", level: 80, icon: "🔧" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Azure", level: 75, icon: "🔷" }
    ],
    toolsAndSecurity: [
      { name: "Keycloak", level: 75, icon: "🛡️" },
      { name: "Git", level: 90, icon: "🔧" },
      { name: "GitHub", level: 88, icon: "🐱" },
      { name: "GitLab", level: 85, icon: "🦊" },
      { name: "SonarQube", level: 85, icon: "🧪" },
      { name: "Microservices", level: 80, icon: "🔗" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "MYCOM-OSI",
      description: "MYCOM OSI is a telecom network management software used for monitoring, fault management, and performance optimization.It helps communication service providers automate and enhance their network operations and service quality.",
      image: "/images/projects/Mycom.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java 8", "MobaXterm", "Oracle", "Gitlab", "AWS", "Elasticsearch", "Eclipse Mars 2.0", "GWT (Google Web Toolkit)", "Spring", "JSP-Servlet"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "ROGERS",
      description: "Rogers Communications is a leading Canadian telecom company offering mobile, internet, TV, and home phone services. It is known for its strong network coverage, innovation, and involvement in media and sports.",
      image: "/images/projects/Rogers.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java 17", "JUnit Test", "SonarQube", "Azure", "Cassandra DB", "Cosmos DB", "Dynatrace", "GitHub", "Jira", "Postman", "Swagger", "OpenAPI Codegen", "IntelliJ IDEA", "Spring Boot"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Developed a E-Commerce web application using Java, Spring Boot, and MySQL with features like property listing, user authentication, and CRUD operations. Designed a responsive interface with HTML/CSS and Bootstrap.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "MYSQL", "HTML/CSS", "Spring Boot"],
      githubUrl: "https://github.com/Kshitij-Azad/Herbal_Impression.git",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "Blog Application",
      description: "Developed a blog application using Spring MVC and Thymeleaf with user authentication, and CRUD operations for posts and comments. Created a Docker image for the project and deployed it on AWS using an EC2 instance with MySQL integration.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "Spring MVC", "MYSQL","Thymeleaf", "HTML/CSS", "Docker", "AWS", "JWT"],
      githubUrl: "https://github.com/Kshitij-Azad/Blog_Application.git",
      liveUrl: "",
      featured: false
      },

      {
        id: 5,
        title: "Spring Boot Multi DB Application (Backend)",
        description: "Implemented multi-database configuration in a Spring Boot application using Java 8 and MySQL to connect and manage multiple data sources independently. Enabled seamless routing between databases for modular data handling, supporting scalable and maintainable architecture.",
        image: "https://images.pexels.com/photos/1089613/pexels-photo-1089613.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Java 8", "Spring Boot", "MYSQL", "Postman"],
        githubUrl: "https://github.com/Kshitij-Azad/Blog_Application.git",
        liveUrl: "",
        featured: false
      },

      {
        id: 6,
        title: "E-commerce Website (Currently Working)",
        description: "Developed a full-stack application using Java 21, Spring Boot, and MySQL with secure authentication via Keycloak. Integrated React for dynamic UI, utilized AWS and Docker for scalable deployment, and ensured robust testing with JUnit, Postman, and IntelliJ IDEA.",
        image: "https://images.pexels.com/photos/1089613/pexels-photo-1089613.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Java 21", "Spring Boot", "MYSQL","Keycloak", "React", "JUnit", "IntelliJ IDEA","Postman", "AWS", "Docker"],
        githubUrl: "",
        liveUrl: "",
        featured: false
      }
  ],
  experience: [
    {
      id: 1,
      title: "Associate Software Developer",
      company: "SHIAVNSKI TECHNOLOGIES LLP.",
      location: "Indore, India",
      period: "2025-Present",
      description: "Lead development of scalable web applications serving 100k+ users. Mentor junior developers and drive technical architecture decisions.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      title: "Associate Software Developer Intern.",
      company: "SHIAVNSKI TECHNOLOGIES LLP.",
      location: "Indore, India",
      period: "2024-2025",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated closely with design and product teams.",
      achievements: [
        "Built responsive web applications for 10+ clients",
        "Implemented real-time features using WebSocket technology",
        "Contributed to 50% increase in user engagement"
      ]
    },
    {
      id: 3,
      title: "Java Developer / Backend Developer (Internship Role)",
      company: "Ypsilon IT Solutions Pvt Ltd ",
      location: "Indore, India",
      period: "2023 - 2024",
      description: "Specialized in creating pixel-perfect, responsive user interfaces with focus on accessibility and performance.",
      achievements: [
        "Developed the Get Professional Online Booking System using HTML,CSS, JavaScript, Java, and MySQL, allowing users to browse professionals and book appointments. ",
        "Designed the front-end interface with HTML/CSS and implemented interactivity using JavaScript. ",
        "Utilized MySQL for data management and developed server-side logic in Java."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Shivajirao Kadam Institute of Technology and Management",
      location: "Indore, India",
      period: "2019 - 2023",
      gpa: "7.80",
      relevant: ["Web Development", "Database Systems"]
    },
    {
      id: 2,
      degree: "Higher Secondary School",
      institution: "Shri Devi Ahilya Shishu Vihar",
      location: "Indore",
      period: "2019",
      gpa: null,
      relevant: ["12th PCM"]
    },
    {
      id: 3,
      degree: "High School",
      institution: "Shri Devi Ahilya Shishu Vihar",
      location: "Indore",
      period: "2017",
      gpa: null,
      relevant: ["10th"]
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Introduction to Computers training",
      description: "This is a certificate for completing the 'Introduction to Computers' training course conducted under the Spoken Tutorial Project by IIT Bombay. It covers basic computer concepts and was awarded upon successfully passing the online test.",
      image: "/images/certificates/2019/Dec-03-2019-Ioc.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["IOT", "Score: 75%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 2,
      title: "C/C++ training",
      description: "This is a certificate for successfully completing the C & C++ with OOPS training program at Universal Informatics, Janjeerwala Campus, Indore. The course was conducted from January 21, 2020 to March 31, 2020, focusing on programming fundamentals and object-oriented concepts.",
      image: "/images/certificates/2020/April-01-2020-C.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C", "C++", "OOPs"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2020/July-14-2020-Pyhton.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Workshop"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "C++ training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2020/Nov-23-2020-Cpp.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C++", "Score: 62.50%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "C training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2020/Sep-02-2020-C.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C", "Score: 52.50%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "Advanced C++ training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2021/April-05-2021-Cpp.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Advanced C++", "Score: 70%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 7,
      title: "Java training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2021/Sep-20-2021-Java.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "Score: 62.50%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 8,
      title: "C training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2021/Sep-21-2021-C.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C", "Score: 52.50%"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 9,
      title: "Java training",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2023/Oct-06-2023-java.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Core Java", "Advance Java", "J2EE", "SQL"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 10,
      title: "Ypsilon IT Solutions Pvt Ltd.",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "/images/certificates/2024/Jan-07-2024-Ypsilon.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "Spring Boot", "MYSQL"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    }
  ]
  // testimonials: [
  //   {
  //     id: 1,
  //     name: "Sarah Mitchell",
  //     role: "Product Manager at TechCorp",
  //     content: "Alex consistently delivers high-quality code and has an exceptional ability to translate complex requirements into elegant solutions. A true professional.",
  //     avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     role: "CTO at StartupXYZ",
  //     content: "Working with Alex was a game-changer for our development team. His technical expertise and mentorship helped us scale our platform successfully.",
  //     avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
  //   },
  //   {
  //     id: 3,
  //     name: "Emily Rodriguez",
  //     role: "Designer at Digital Agency Pro",
  //     content: "Alex brings designs to life with incredible attention to detail. His collaborative approach makes him a pleasure to work with.",
  //     avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  //   }
  // ]
};