const mongoose = require('mongoose');
const connectToMongoDB = require('../db');

const courseSchema = new mongoose.Schema({
    name: String,
    instructor: String,
    description: String,
    enrollmentStatus: String,
    thumbnail: String,
    duration: String,
    schedule: String,
    location: String,
    prerequisites: [String],
    syllabus: [{
        week: Number,
        topic: String,
        content: String,
    }],
    students: [{
        id: Number,
        name: String,
        email: String,
    }],
    
});


const coursesData = [
    {
        name: "Data Structures Fundamentals",

        instructor: "Samantha Miller",
        description: "Establish a strong foundation in data structures, starting with an overview and diving into the fundamentals of arrays.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1548058583-56a764effe57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGF8ZW58MHx8fDB8fHww",
        duration: "8 weeks",
        schedule: "Mondays and Wednesdays, 5:30 PM – 7:30 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Understanding of algorithms."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data structures',
                content: "Overview of Data Structures, Starting with Arrays."
            },
            {
                week: 2,
                topic: 'Binary Search',
                content: "Simplifying the search using Binary Search Techniques"
            },
            {
                week: 3,
                topic: 'Linked List',
                content: "Learning about pointers and linked lists"
            },
            {
                week: 4,
                topic: 'Binary Tree',
                content: "Delve into the intricacies of data structures with a comprehensive course on Binary Trees, covering their properties, traversal algorithms, and applications in computer science."
            },
        ],
        students: [
            {
                id: 112,
                name: 'Leo Harris',
                email: 'leo@yahoo.com',
            },
            {
                id: 114,
                name: 'Noah Brown',
                email: 'noah@yahoo.com',
            },
            {
                id: 115,
                name: 'Olivia Hall',
                email: 'olivia@gmail.com',
            },
            {
                id: 128,
                name: 'Bella Nelson',
                email: 'bella@yahoo.com',
            },
            {
                id: 129,
                name: 'Carlos Owens',
                email: 'carlos@gmail.com',
            },
            {
                id: 130,
                name: 'Diana Parker',
                email: 'diana@yahoo.com',
            }
        ]
    },
    {
        name: "Advanced Binary Search Techniques",

        instructor: "Jonathan Harris",
        description: "Master the art of simplifying searches with advanced Binary Search techniques, optimizing algorithms for efficiency.",
        enrollmentStatus: "Closed",
        thumbnail: "https://images.unsplash.com/photo-1589756381676-2095d1647885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpbm",
        duration: "10 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM – 8:00 PM",
        location: "Online",
        prerequisites: ["Understanding of basic algorithms", "Familiarity with binary search."],
        syllabus: [
            {
                week: 1,
                topic: 'Advanced Binary Search Techniques',
                content: "Introduction to advanced techniques for optimizing binary search algorithms."
            },
            {
                week: 2,
                topic: 'Dynamic Programming',
                content: "Explore dynamic programming concepts and apply them to algorithmic problem-solving."
            },
            {
                week: 3,
                topic: 'Graph Algorithms',
                content: "Study various graph algorithms, including traversal and shortest path algorithms."
            },
            {
                week: 4,
                topic: 'Hashing and Hash Tables',
                content: "Understanding the principles of hashing and the use of hash tables in data structures."
            }
        ],
        students: [
            {
                id: 122,
                name: 'Victor Hayes',
                email: 'victor@yahoo.com',
            },
            {
                id: 123,
                name: 'Wendy Irwin',
                email: 'wendy@gmail.com',
            },
            {
                id: 124,
                name: 'Xavier Johnson',
                email: 'xavier@yahoo.com',
            },
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@gmail.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@yahoo.com',
            },
        ]
    },
    {
        name: "Algorithmic Problem Solving",
        instructor: "Dr. Jennifer Thompson",
        description: "Develop strong problem-solving skills through algorithmic thinking. Learn to approach and solve complex problems efficiently.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1593642532455-2a6a10f4c87c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxnb3JpdGhtJTIwcHJvYmxlbSUyMHNpbmdsZXxlbnwwfHwwfHw%3D",
        duration: "12 weeks",
        schedule: "Mondays and Wednesdays, 6:30 PM – 8:30 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Understanding of data structures."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Algorithms',
                content: "Overview of algorithmic concepts, time complexity, and space complexity analysis."
            },
            {
                week: 2,
                topic: 'Sorting and Searching Algorithms',
                content: "Study and implement various sorting and searching algorithms."
            },
            {
                week: 3,
                topic: 'Divide and Conquer',
                content: "Explore the divide and conquer paradigm and its application in algorithm design."
            },
            {
                week: 4,
                topic: 'Greedy Algorithms',
                content: "Understanding greedy algorithms and their applications in optimization problems."
            }
        ],
        students: [

        ]
    },
    {
        name: "Data Science with Python",
        instructor: "Dr. Michael Rodriguez",
        description: "Discover the world of data science using Python. Learn data analysis, visualization, and machine learning concepts.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww",
        duration: "10 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM – 9:00 PM",
        location: "Online",
        prerequisites: ["Basic Python programming", "Fundamental statistics knowledge."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: "Overview of data science, data types, and exploratory data analysis."
            },
            {
                week: 2,
                topic: 'Data Visualization with Matplotlib and Seaborn',
                content: "Creating informative and visually appealing data visualizations."
            },
            {
                week: 3,
                topic: 'Machine Learning Basics',
                content: "Introduction to supervised and unsupervised learning algorithms."
            },
            {
                week: 4,
                topic: 'Building Predictive Models with Scikit-Learn',
                content: "Hands-on experience with building and evaluating machine learning models."
            }
        ],
        students: [
            {
                id: 104,
                name: 'David Miller',
                email: 'david@yahoo.com',
            },
            {
                id: 105,
                name: 'Emma Wilson',
                email: 'emma@gmail.com',
            },
            {
                id: 106,
                name: 'Frank Thomas',
                email: 'frank@yahoo.com',
            },
            {
                id: 107,
                name: 'Grace Lee',
                email: 'grace@gmail.com',
            },
            {
                id: 120,
                name: 'Tina Foster',
                email: 'tina@yahoo.com',
            },
            {
                id: 121,
                name: 'Ulysses Gonzales',
                email: 'ulysses@gmail.com',
            }
        ]
    },
    {
        name: "Cybersecurity Fundamentals",
        instructor: "Dr. James Foster",
        description: "Gain a foundational understanding of cybersecurity, covering threat detection, network security, and ethical hacking.",
        enrollmentStatus: "In Progress",
        thumbnail: "https://images.unsplash.com/photo-1480694313141-fce5e697ee2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJzZWN1cnklMjBmdW5kYW1lbnRhbHxlbnwwfHwwfHw%3D",
        duration: "8 weeks",
        schedule: "Fridays, 6:00 PM – 8:00 PM",
        location: "Online",
        prerequisites: ["Basic understanding of networking", "Familiarity with computer systems."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: "Overview of cybersecurity, common threats, and security principles."
            },
            {
                week: 2,
                topic: 'Network Security',
                content: "Understanding and implementing network security measures."
            },
            {
                week: 3,
                topic: 'Ethical Hacking Basics',
                content: "Introduction to ethical hacking, penetration testing, and vulnerability assessment."
            },
            {
                week: 4,
                topic: 'Cybersecurity Best Practices',
                content: "Implementing best practices for maintaining a secure computing environment."
            }
        ],
        students: [

        ]
    },
    {
        name: "Blockchain and Cryptocurrency",
        instructor: "Dr. Emily White",
        description: "Explore the fundamentals of blockchain technology and cryptocurrency. Understand decentralized systems and smart contracts.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1542484709-3f10d4e2e858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbiUyMHJveGljfGVufDB8fDB8fHww",
        duration: "12 weeks",
        schedule: "Saturdays, 10:30 AM – 12:30 PM",
        location: "Offline",
        prerequisites: ["Basic understanding of cryptography", "Familiarity with computer networks."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Blockchain',
                content: "Overview of blockchain technology, distributed ledgers, and consensus algorithms."
            },
            {
                week: 2,
                topic: 'Cryptocurrencies and Tokens',
                content: "Understanding different cryptocurrencies, tokens, and their use cases."
            },
            {
                week: 3,
                topic: 'Smart Contracts',
                content: "Introduction to smart contracts and their implementation on blockchain platforms."
            },
            {
                week: 4,
                topic: 'Decentralized Applications (DApps)',
                content: "Building and deploying decentralized applications on blockchain networks."
            }
        ],
        students: [
            {
                id: 120,
                name: 'Tina Foster',
                email: 'tina@yahoo.com',
            },
            {
                id: 121,
                name: 'Ulysses Gonzales',
                email: 'ulysses@gmail.com',
            },
            {
                id: 123,
                name: 'Wendy Irwin',
                email: 'wendy@gmail.com',
            },
            {
                id: 124,
                name: 'Xavier Johnson',
                email: 'xavier@yahoo.com',
            },
            {
                id: 125,
                name: 'Yvonne King',
                email: 'yvonne@gmail.com',
            },
        ]
    },
    {
        name: "Natural Language Processing (NLP)",
        instructor: "Dr. Sophia Chen",
        description: "Delve into the field of Natural Language Processing. Learn to process and analyze human language using machine learning techniques.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1516732449456-0071c4cc55a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBsYW5ndWFnZSUyMHBvaW50fGVufDB8fDB8fHww",
        duration: "10 weeks",
        schedule: "Wednesdays and Fridays, 7:00 PM – 9:00 PM",
        location: "Online",
        prerequisites: ["Basic understanding of machine learning", "Familiarity with Python programming."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to NLP',
                content: "Overview of Natural Language Processing, applications, and challenges."
            },
            {
                week: 2,
                topic: 'Text Preprocessing and Tokenization',
                content: "Cleaning and preparing text data for NLP tasks, and tokenization techniques."
            },
            {
                week: 3,
                topic: 'Sentiment Analysis',
                content: "Analyzing and classifying sentiments in text using machine learning."
            },
            {
                week: 4,
                topic: 'Named Entity Recognition (NER)',
                content: "Introduction to NER and extracting entities from unstructured text."
            }
        ],
        students: [
            {
                id: 123,
                name: 'Wendy Irwin',
                email: 'wendy@gmail.com',
            },
            {
                id: 124,
                name: 'Xavier Johnson',
                email: 'xavier@yahoo.com',
            },
            {
                id: 125,
                name: 'Yvonne King',
                email: 'yvonne@gmail.com',
            },
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@gmail.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@yahoo.com',
            },
            {
                id: 103,
                name: 'Charlie Davis',
                email: 'charlie@gmail.com',
            }
        ]
    },
    {
        name: "Introduction to Cloud Computing",
        instructor: "Dr. Kevin Davis",
        description: "Understand the fundamentals of cloud computing, including services, deployment models, and security considerations.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
        duration: "8 weeks",
        schedule: "Mondays, 6:30 PM – 8:30 PM",
        location: "Offline",
        prerequisites: ["Basic understanding of networking", "Familiarity with virtualization."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cloud Computing',
                content: "Overview of cloud computing, services, and deployment models."
            },
            {
                week: 2,
                topic: 'Cloud Service Models (IaaS, PaaS, SaaS)',
                content: "Understanding Infrastructure as a Service, Platform as a Service, and Software as a Service."
            },
            {
                week: 3,
                topic: 'Cloud Security',
                content: "Security considerations in cloud computing and best practices."
            },
            {
                week: 4,
                topic: 'Cloud Deployment and Management',
                content: "Deploying applications on the cloud and managing cloud resources."
            }
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@gmail.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@yahoo.com',
            },
            {
                id: 103,
                name: 'Charlie Davis',
                email: 'charlie@gmail.com',
            },
            {
                id: 122,
                name: 'Victor Hayes',
                email: 'victor@yahoo.com',
            },
            {
                id: 123,
                name: 'Wendy Irwin',
                email: 'wendy@gmail.com',
            },
            {
                id: 124,
                name: 'Xavier Johnson',
                email: 'xavier@yahoo.com',
            }
        ]
    },
    {
        name: "Mobile App UI/UX Design",
        instructor: "Alice Thompson",
        description: "Learn the principles of designing user interfaces and experiences for mobile applications. Create visually appealing and user-friendly mobile apps.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1606165097652-1d280ac4be88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vYmlsZSUyMGFwcCUyMGlkZXNpZ25lfGVufDB8fDB8fHww",
        duration: "10 weeks",
        schedule: "Thursdays, 7:00 PM – 9:00 PM",
        location: "Online",
        prerequisites: ["Basic understanding of mobile app development", "Interest in design principles."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Mobile UI/UX Design',
                content: "Overview of mobile UI/UX design principles and user-centered design."
            },
            {
                week: 2,
                topic: 'Wireframing and Prototyping',
                content: "Creating wireframes and prototypes for mobile app interfaces."
            },
            {
                week: 3,
                topic: 'User Interaction and Navigation Design',
                content: "Designing intuitive navigation and optimizing user interactions."
            },
            {
                week: 4,
                topic: 'Mobile App Usability Testing',
                content: "Conducting usability testing and refining mobile app designs based on feedback."
            }
        ],
        students: [
            {
                id: 122,
                name: 'Victor Hayes',
                email: 'victor@yahoo.com',
            },
            {
                id: 123,
                name: 'Wendy Irwin',
                email: 'wendy@gmail.com',
            },
            {
                id: 124,
                name: 'Xavier Johnson',
                email: 'xavier@yahoo.com',
            },
            {
                id: 113,
                name: 'Mia Carter',
                email: 'mia@gmail.com',
            },
            {
                id: 114,
                name: 'Noah Brown',
                email: 'noah@yahoo.com',
            },
            {
                id: 115,
                name: 'Olivia Hall',
                email: 'olivia@gmail.com',
            }
        ]
    },
    {
        name: "Web Development with Django",
        instructor: "Dr. Christopher Walker",
        description: "Build dynamic web applications using Django, a high-level web framework for Python. Learn to create robust and scalable web solutions.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1598481668817-3a3c3e791d66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluamFnbyUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
        duration: "12 weeks",
        schedule: "Tuesdays and Thursdays, 6:30 PM – 8:30 PM",
        location: "Online",
        prerequisites: ["Basic understanding of Python programming", "Knowledge of web development concepts."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Django',
                content: "Overview of Django framework, project structure, and MVC architecture."
            },
            {
                week: 2,
                topic: 'Django Models and ORM',
                content: "Defining models, working with databases using Django ORM."
            },
            {
                week: 3,
                topic: 'Django Views and Templates',
                content: "Creating views, rendering templates, and handling user requests."
            },
            {
                week: 4,
                topic: 'Building a Django Web Application',
                content: "Putting it all together - building a dynamic web application with Django."
            }
        ],
        students: [
            {
                id: 113,
                name: 'Mia Carter',
                email: 'mia@gmail.com',
            },
            {
                id: 114,
                name: 'Noah Brown',
                email: 'noah@yahoo.com',
            },
            {
                id: 115,
                name: 'Olivia Hall',
                email: 'olivia@gmail.com',
            },
            {
                id: 119,
                name: 'Samuel Clark',
                email: 'samuel@gmail.com',
            },
            {
                id: 120,
                name: 'Tina Foster',
                email: 'tina@yahoo.com',
            },
            {
                id: 121,
                name: 'Ulysses Gonzales',
                email: 'ulysses@gmail.com',
            }
        ]
    },
    {
        name: "Frontend Development with Vue.js",
        instructor: "Dr. Alexandra Turner",
        description: "Explore Vue.js, a progressive JavaScript framework for building user interfaces. Learn to create interactive and responsive web applications.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1603613722141-6b1c6c9cb835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlldyUyMmNvbXB1dGVyJTIwc3RyYWdnZXxlbnwwfHwwfHw%3D",
        duration: "10 weeks",
        schedule: "Wednesdays and Fridays, 6:00 PM – 8:00 PM",
        location: "Online",
        prerequisites: ["Basic understanding of HTML, CSS, and JavaScript", "Interest in frontend development."],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Vue.js',
                content: "Overview of Vue.js, Vue instance, and basic directives."
            }
        ],
        students: [
            {
                id: 119,
                name: 'Samuel Clark',
                email: 'samuel@gmail.com',
            },
            {
                id: 120,
                name: 'Tina Foster',
                email: 'tina@yahoo.com',
            },
            {
                id: 121,
                name: 'Ulysses Gonzales',
                email: 'ulysses@gmail.com',
            },
            {
                id: 106,
                name: 'Frank Thomas',
                email: 'frank@yahoo.com',
            },
            {
                id: 107,
                name: 'Grace Lee',
                email: 'grace@gmail.com',
            },
            {
                id: 108,
                name: 'Henry Turner',
                email: 'henry@yahoo.com',
            }
        ]
    },
    {
        name: "Data Structures and Algorithms",
        instructor: "Abhishek Gola",
        description: "Learn to solve complex DSA problems.",
        enrollmentStatus: "Open",
        thumbnail: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc29yfGVufDB8fDB8fHww",
        duration: "12 weeks",
        schedule: "Tuesdays and Thursdays, 4:00 PM – 6:00 PM",
        location: "Online",
        prerequisites: ['Basic knowledge of C++/python programming'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data structures',
                content: 'Overview of Data Structures, Starting with Arrays.'
            },
            {
                week: 2,
                topic: 'Binary Search',
                content: 'Simplifying the search using Binary Search Techniques'
            },
            {
                week: 3,
                topic: 'Linked List',
                content: 'Learning about pointers and linkedlist',
            },
            {
                week: 4,
                topic: 'Binary Tree',
                content: 'Delve into the intricacies of data structures with a comprehensive course on Binary Trees, covering their properties, traversal algorithms, and applications in computer science.'
            },

        ],
        students: [
            {
                id: 103,
                name: 'Charlie Davis',
                email: 'charlie@gmail.com',
            },
            {
                id: 104,
                name: 'David Miller',
                email: 'david@yahoo.com',
            },
            {
                id: 109,
                name: 'Ivy Baker',
                email: 'ivy@gmail.com',
            },
            {
                id: 110,
                name: 'Jack White',
                email: 'jack@yahoo.com',
            },
            {
                id: 112,
                name: 'Leo Harris',
                email: 'leo@yahoo.com',
            }
        ]
    },

];

const CoursesCollection = mongoose.model('courses', courseSchema);

async function insertCourseData() {
    try {
        await connectToMongoDB();

        const result = await CoursesCollection.insertMany(coursesData);
        console.log(`${result.length} documents inserted into the courses collection`);
    } catch (error) {
        console.error(`Error inserting documents: ${error.message}`);
    }
}

// insertCourseData();

module.exports = CoursesCollection;