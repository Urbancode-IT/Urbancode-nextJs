export const certifications = {
    'aws-solution-architect': {
        id: 1,
        title: 'AWS Certified Solutions Architect - Associate',
        brand: 'AWS',
        brandLogo: '/images/home/amazon.png',
        image: '/images/home/amazon.png',
        rating: '4.9',
        ratingsCount: '2,450 ratings',
        students: '20,000+',
        duration: '35 Hours',
        totalHours: '35 total hours',
        modules: '14 Modules',
        courseCount: '14 modules',
        description: 'Master the art of designing distributed systems on AWS. One of the most valued certifications in the cloud industry.',
        fullDescription: 'This track focuses on the design of cost-efficient, fault-tolerant, and scalable distributed systems on AWS. It covers all key areas of the SAA-C03 exam including compute, storage, database, networking, and security.',
        slug: 'aws-solution-architect',
        featured: true,
        learningPoints: [
            'Designing resilient architectures on AWS',
            'Designing high-performing architectures',
            'Designing secure applications and architectures',
            'Designing cost-optimized architectures',
            'AWS well-architected framework implementation',
            'Migration and innovation strategies'
        ],
        curriculum: [
            { title: 'Designing Resilient Architectures', duration: '10h' },
            { title: 'Designing High-Performing Architectures', duration: '8h' },
            { title: 'Designing Secure Architectures', duration: '8h' },
            { title: 'Designing Cost-Optimized Architectures', duration: '5h' },
            { title: 'Well-Architected Framework', duration: '4h' }
        ]
    },
    'aws-certified-ai-practitioner': {
        id: 2,
        title: 'AWS Certified AI Practitioner',
        brand: 'AWS',
        brandLogo: '/images/home/amazon.png',
        image: '/images/home/amazon.png',
        rating: '4.8',
        ratingsCount: '1,120 ratings',
        students: '3,200+',
        duration: '20 Hours',
        totalHours: '20 total hours',
        modules: '8 Modules',
        description: 'Validate your understanding of AI, machine learning (ML) concepts, and use cases on AWS using SageMaker and Bedrock.',
        fullDescription: 'The AWS Certified AI Practitioner validates your overall understanding of AI and ML concepts, covering basic AI/ML terminology, AWS AI/ML services, and security/compliance for AI/ML on AWS.',
        slug: 'aws-certified-ai-practitioner',
        learningPoints: [
            'Fundamental AI and ML concepts and terminology',
            'Generative AI concepts and business use cases',
            'AWS AI and ML services (SageMaker, Amazon Bedrock, etc.)',
            'Security, compliance, and governance for AI/ML on AWS',
            'Responsible AI and ethical considerations'
        ],
        curriculum: [
            { title: 'AI & ML Fundamentals', duration: '4h' },
            { title: 'Introduction to Generative AI', duration: '4h' },
            { title: 'AWS AI/ML Services Overview', duration: '4h' },
            { title: 'SageMaker & Bedrock Deep Dive', duration: '4h' },
            { title: 'Security & Ethics in AI', duration: '4h' }
        ]
    },
    'cka-ckad-kubernetes': {
        id: 3,
        title: 'CKA/ CKAD (Kubernetes Administrator & Developer)',
        brand: 'CNCF',
        brandLogo: '/images/home/fullstack.png',
        image: '/images/home/fullstack.png',
        rating: '4.9',
        ratingsCount: '1,890 ratings',
        students: '4,500+',
        duration: '45 Hours',
        totalHours: '45 total hours',
        modules: '15 Modules',
        description: 'Master Kubernetes administration and application development. Industry-standard certifications for Cloud Engineers.',
        fullDescription: 'This comprehensive track covers everything from Kubernetes core concepts to advanced networking, storage, and security. Designed to prepare you for both CKA and CKAD exams through extensive hands-on labs.',
        slug: 'cka-ckad-kubernetes',
        learningPoints: [
            'Kubernetes architecture and core components',
            'Cluster installation, configuration, and validation',
            'Application lifecycle management and pod design',
            'Services, networking, and ingress controllers',
            'Storage management and persistence',
            'Troubleshooting and security best practices'
        ],
        curriculum: [
            { title: 'Core Concepts & Architecture', duration: '5h' },
            { title: 'Installation & Configuration', duration: '8h' },
            { title: 'Workloads & Scheduling', duration: '10h' },
            { title: 'Services & Networking', duration: '8h' },
            { title: 'Storage & Persistence', duration: '6h' },
            { title: 'Troubleshooting & Security', duration: '8h' }
        ]
    }
};
