export const certifications = {
    'aws-certified-cloud-practitioner': {
        id: 'main',
        title: 'AWS Certified Cloud Practitioner',
        brand: 'Amazon Web Services',
        brandLogo: '/images/home/amazon.png',
        rating: '4.8',
        ratingsCount: '1,245 ratings',
        students: '12,450+',
        duration: '12 Hours',
        totalHours: '12 total hours',
        modules: '8 Modules',
        courseCount: '8 modules',
        description: 'Master the fundamentals of AWS Cloud. Build your high-paying career starting with this foundation.',
        fullDescription: 'The AWS Certified Cloud Practitioner validates your overall understanding of the AWS Cloud platform, covering basic cloud concepts, security, compliance, technology, and billing/pricing.',
        slug: 'aws-certified-cloud-practitioner',
        featured: true,
        learningPoints: [
            'Basic cloud concepts and AWS global infrastructure',
            'AWS Cloud security and compliance',
            'Core AWS services (EC2, S3, RDS, etc.)',
            'AWS billing, pricing models, and support',
            'Deployment and operation in the AWS Cloud'
        ],
        curriculum: [
            { title: 'Introduction to Cloud Computing', duration: '1.5h' },
            { title: 'AWS Global Infrastructure', duration: '2h' },
            { title: 'AWS Compute Services', duration: '2.5h' },
            { title: 'AWS Storage & Database Services', duration: '2h' },
            { title: 'Security & Compliance', duration: '2h' },
            { title: 'Pricing & Support', duration: '2h' }
        ]
    },
    'cisco-ccna': {
        id: 1,
        title: 'Cisco Certified Network Associate (CCNA)',
        brand: 'Cisco',
        brandLogo: '/images/home/cisco.png',
        image: '/images/home/cisco.png',
        rating: '4.9',
        students: '8,200+',
        duration: '40 Hours',
        fullDuration: '40 Hours',
        modules: '12 Modules',
        description: 'CCNA certification proves you have what it takes to navigate the ever-changing landscape of IT.',
        fullDescription: 'CCNA certification proves you have what it takes to navigate the ever-changing landscape of IT. CCNA exam covers networking fundamentals, IP services, security fundamentals, automation and programmability.',
        slug: 'cisco-ccna',
        learningPoints: [
            'Network fundamentals and access',
            'IP connectivity and services',
            'Security fundamentals',
            'Automation and programmability',
            'Router and switch configuration'
        ],
        curriculum: [
            { title: 'Networking Fundamentals', duration: '6h' },
            { title: 'Network Access', duration: '8h' },
            { title: 'IP Connectivity', duration: '10h' },
            { title: 'IP Services', duration: '6h' },
            { title: 'Security Fundamentals', duration: '6h' },
            { title: 'Automation & Programmability', duration: '4h' }
        ]
    },
    'microsoft-power-bi': {
        id: 2,
        title: 'Microsoft Power BI Data Analyst',
        brand: 'Microsoft',
        brandLogo: '/images/home/microsoft.png',
        image: '/images/home/microsoft.png',
        rating: '4.7',
        students: '15,000+',
        duration: '25 Hours',
        fullDuration: '25 Hours',
        modules: '10 Modules',
        description: 'Power BI Data Analysts deliver actionable insights by leveraging available data and applying domain expertise.',
        fullDescription: 'Power BI Data Analysts deliver actionable insights by leveraging available data and applying domain expertise. They provide meaningful business value through easy-to-comprehend data visualizations.',
        slug: 'microsoft-power-bi',
        learningPoints: [
            'Data preparation and transformation',
            'Modeling data for performance',
            'Visualizing data and creating reports',
            'Analyzing data and trends',
            'Deploying and maintaining assets'
        ],
        curriculum: [
            { title: 'Introduction to Power BI', duration: '3h' },
            { title: 'Data Cleaning & Transformation', duration: '5h' },
            { title: 'Data Modeling & DAX', duration: '7h' },
            { title: 'Report Design & Visualization', duration: '6h' },
            { title: 'Power BI Service & Security', duration: '4h' }
        ]
    },
    'google-cloud-digital-leader': {
        id: 3,
        title: 'Google Cloud Digital Leader',
        brand: 'Google Cloud',
        brandLogo: '/images/home/ai_ml_logo.png',
        image: '/images/home/ai_ml_logo.png',
        rating: '4.6',
        students: '10,000+',
        duration: '10 Hours',
        fullDuration: '10 Hours',
        modules: '6 Modules',
        description: 'Demonstrate your knowledge of cloud technology and Google Cloud as a business transformation agent.',
        fullDescription: 'The Google Cloud Digital Leader certification is designed for cloud practitioners and professionals who want to demonstrate their knowledge of cloud technology and Google Cloud as a business transformation agent.',
        slug: 'google-cloud-digital-leader',
        learningPoints: [
            'Core Google Cloud products and services',
            'Digital transformation with Google Cloud',
            'Innovating with data and Google Cloud',
            'Infrastructure and application modernization',
            'Google Cloud security and operations'
        ],
        curriculum: [
            { title: 'Introduction to Cloud Leadership', duration: '2h' },
            { title: 'Digital Transformation Journey', duration: '2h' },
            { title: 'Data & Google Cloud', duration: '2h' },
            { title: 'Cloud Infrastructure Essentials', duration: '2h' },
            { title: 'Cloud Operations & Security', duration: '2h' }
        ]
    },
    'comptia-security-plus': {
        id: 4,
        title: 'CompTIA Security+ SY0-701',
        brand: 'CompTIA',
        brandLogo: '/images/home/fullstack.png',
        image: '/images/home/fullstack.png',
        rating: '4.8',
        students: '5,000+',
        duration: '32 Hours',
        fullDuration: '32 Hours',
        modules: '8 Modules',
        description: 'Establish the core knowledge required of any cybersecurity role and provide a springboard to intermediate-level cybersecurity jobs.',
        fullDescription: 'CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.',
        slug: 'comptia-security-plus',
        learningPoints: [
            'Threats, Attacks and Vulnerabilities',
            'Technologies and Tools',
            'Architecture and Design',
            'Identity and Access Management',
            'Risk Management',
            'Cryptography and PKI'
        ],
        curriculum: [
            { title: 'Security Fundamentals', duration: '4h' },
            { title: 'Threat Actor Types', duration: '4h' },
            { title: 'Vulnerability Scanning', duration: '6h' },
            { title: 'Secure Architecture', duration: '8h' },
            { title: 'Operations and Incident Response', duration: '10h' }
        ]
    }
};
