'use client';

import React, { useEffect, useState, useRef } from 'react';
import './GoogleReviews.css';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeBranch, setActiveBranch] = useState('All');

    const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);

    // Branch Google Maps review links for modal
    const writeReviewLinks = {
        'Velachery': 'https://g.page/r/CfH0LR1ZQro0EAE/review',
        'Pallikaranai': 'https://g.page/r/CQI15nsz8W2IEAE/review',
        'Tirunelveli': 'https://www.google.com/search?sca_esv=47fdd52eba661d26&rlz=1C1ONGR_enIN1082IN1083&sxsrf=APpeQnsPW-Nth2KLEW3ZAskdQ61FRMzs6g:1782982138857&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3FUiqlbF9e4rNiuCQoVGzSERo25DzRGEjXpofXaARMjWSzIXmPyifkoOmv4p1JOGpytj8x-NDrWsrhqby6vkymFi2dqcYmKH7cwKJC-GoRmYKX80euUyzpMStaelkhu-_5idtw%3D&q=Urbancode+Training+and+Solutions+Reviews&sa=X&ved=2ahUKEwjO1ZuIzrOVAxV_wTgGHbaSLGUQ0bkNegQIKxAH&biw=1280&bih=631&dpr=1.5#lrd=0x3b0413c4ce75c0fd:0x4e3fe58c93ab7a34,3,,,,',
    };
    const branches = ['All', 'Velachery', 'Pallikaranai', 'Tirunelveli'];

    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // ── Real reviews from Google Maps (copied verbatim) ──
    const fallbackReviews = [
        // ── Velachery Branch ──
        {
            _id: 'vlc_1',
            authorName: 'Suchithra R',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SR&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'Urban Code is an excellent training institute with a very supportive learning environment. The quality of teaching is outstanding, especially thanks to Savitha ma\'am, who is an amazing trainer. She explains concepts clearly, is very patient with doubts, and makes sure every student understands the topic thoroughly.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_2',
            authorName: 'Siva Sankara Pandian',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SS&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I studied Full Stack Development at Urbancode, and my trainer Pushparaj played a major role in my learning journey. He explains every topic from scratch and focuses on practical implementation. His guidance in HTML, CSS, JavaScript, React, backend, and databases helped me gain confidence.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_3',
            authorName: 'Mythreyi Sakthimohan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=MS&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I recently transitioned from a BA role to Data Analyst through this training at Urbancode, and it was really helpful. Trainer Senthil explained SQL, Power BI, Python, and Tableau in a simple and practical way. The sessions focused on real-world use cases and job-oriented preparation.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_4',
            authorName: 'Dhanusha',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=D&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I recently completed the Data Analyst course at Urban Code, and it was a great learning experience. The trainers were highly knowledgeable, supportive, and explained concepts in a very practical manner. The curriculum was well-structured, covering tools like Excel, SQL, Power BI, and Python with real-time projects.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_5',
            authorName: 'Geetha Kuraganti',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=GK&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I took the Data Analyst Placement Training from Urbancode, and it was an excellent experience. The preparation classes and continuous resume reviews really helped me get more interview calls and confidently crack them. A special thanks to my trainers Muthu and Prahadheesh for their constant guidance.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_6',
            authorName: 'Kim Jisoo',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=KJ&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I have learnt MERN full stack here in Urbancode. Excellent learning institute with well-structured courses. My trainer Saveetha has strong knowledge and explains concepts with real-time examples. The environment is positive and motivating. Highly recommended for students and working professionals.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_7',
            authorName: 'Ashwini Raguram',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=AR&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'Had a great experience with the Python training under Trainer Shakthi. The sessions were clear, practical, and easy to follow. Also received good support with practice, doubt clarification, and interview preparation. Highly helpful for beginners.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_8',
            authorName: 'Rohini K',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=RK&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'Strongly recommend URBAN CODE for anyone looking to learn SQL. Trainer Siva sir has deep knowledge and explains concepts in a simple and practical way. The training helped me build strong SQL fundamentals with real-time examples.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_9',
            authorName: 'Kathiravan N',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=KN&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'The Data Analytics training was useful and easy to understand. The trainer explained concepts clearly with practical examples. Hands-on practice helped a lot. Overall, it was a good learning experience.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_10',
            authorName: 'Manoje S',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=MS&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I studied data analytics from Urbancode. They covered MSSQL, PowerBI and Python from scratch. Also they have taken Data Bricks as part of placement support training. I gained practical knowledge and the trainers are very supportive, thanks to all my trainers Sendhil, Raghul and Siva.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_11',
            authorName: 'K Rohini',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=KR&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I had a very good learning experience here. The institute focuses on understanding concepts rather than just completing the syllabus. Trainer Pushparaj guided personally and cleared all doubts. Worth joining.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_12',
            authorName: 'Official Pavan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=OP&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I did my Data Analytics course from Urbancode along with my friends. I highly recommend this Institute for their Data Analytics course. The training in SQL, PowerBI, and Python was excellent and special thanks to the trainers Senthil and Raghul.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_13',
            authorName: 'Gokula Kannan S',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=GS&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'The Data Analyst course at Urban Code Training Institute was a pivotal career move. The trainers\' exceptional expertise ensured a comprehensive grasp of all concepts. The program\'s greatest strength is its practical, project-based structure, which delivered invaluable hands-on experience directly applicable to the field.',
            branchName: 'Velachery'
        },
        {
            _id: 'vlc_14',
            authorName: 'Kurian Abraham',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=KA&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I have done my SQL and PowerBI course long back, but didn\'t receive any interview calls for almost six months. After joining the BI Placement Program at Urbancode, things completely changed. The team revamped my CV with a high ATS score, updated all my job portal profiles, and highlighted the right key skills. Now I\'m getting a good number of interview calls.',
            branchName: 'Velachery'
        },

        // ── Pallikaranai Branch ──
        {
            _id: 'plk_1',
            authorName: 'Asra Fathima',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=AF&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I recently completed a 2-month Full Stack Developer internship at Urbancode, and it was a highly valuable learning experience. During my internship, I had the opportunity to learn under the guidance of my trainers, Atchaya and Siva Sankar. They were extremely supportive and explained every concept clearly.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_2',
            authorName: 'Subhiksga K',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SK&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I recently completed a 2-month Full Stack Developer internship at Urbancode, which was a highly valuable and insightful experience. I worked on real-time projects such as the Urbancode portfolio and the Jobzenter platform. These projects gave me hands-on experience in building and managing full stack applications.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_3',
            authorName: 'Mallika Venkatachalam',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=MV&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I studied SQL, Python, Power BI, and Tableau from scratch at Urbancode, and it was a great learning experience. The course structure was well-organized and beginner-friendly. The trainers, Arun and Siva, were extremely supportive and shared their real-time industry experience, which made the learning more practical.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_4',
            authorName: 'Rubini',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=R&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'The classes were engaging and informative. The teaching methodology was effective in helping me understand complex concepts. I appreciate the teacher\'s patience and willingness to clarify doubts. The classes were well-structured and easy to follow. The teaching approach was innovative and interactive.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_5',
            authorName: 'Krishna Veni',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=KV&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I recently enrolled in and completed the Angular course at Urbancode Edutech Solutions. Our instructor, Swetha, ensured that every student clearly understood the topics and learned effectively. She also encouraged us to complete the exercises independently.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_6',
            authorName: 'Rama Krishnan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=RK&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'The English communication class was excellent! The trainer explained concepts in a very simple and effective way, which boosted my confidence in speaking. The practice sessions were really useful. Thank you for such a valuable learning experience.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_7',
            authorName: 'Ranjith Vigneshwar',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=RV&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I had a great learning experience with Urban Code Training Institute during my Data Analyst course. The trainers are very knowledgeable and supportive, making sure every concept is explained clearly. The course was structured in a practical and easy-to-follow manner.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_8',
            authorName: 'Deivendraraj',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=DV&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'Attended the software testing demo class and the session was very informative. The trainer Jayaprathap explained networking concepts clearly with real time examples. Good learning environment.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_9',
            authorName: 'Natesh Sarma',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=NS&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I am very pleased with my association with Urban Code Training Institute and would like to commend them for the quality of their programs. The trainers come across as highly knowledgeable, approachable, and supportive, ensuring that complex concepts are broken down and explained in a manner that makes learning effective and engaging.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_10',
            authorName: 'Sraja Kohila',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SK&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I joined this institute to achieve my dream job, and it has been a really good experience. The trainers are very friendly, approachable, and highly knowledgeable. Compared to other institutions, the fees here are quite low, but the quality of training is excellent. I want to give special thanks to the CEO, Mr. Siva sir.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_11',
            authorName: 'Sadham Hussain',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SH&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I am truly thankful to the institute, especially CEO Mr. Siva and all the faculty members, for giving me hope and helping me achieve my dream job. I enrolled in the Java Selenium course and successfully got placed as a Software Test Engineer in a reputed company. Urban Code Training and Solutions is truly a one-stop destination for career growth.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_12',
            authorName: 'Jaison Sebastian',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=JS&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I had a great learning experience at UrbanCode Institute, where I completed a course in HTML and CSS under the guidance of Savita, my trainer. The sessions were well-structured and beginner-friendly. One of the most effective aspects was the daily tasks, which helped reinforce learning through consistent practice.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_13',
            authorName: 'Vel Murugan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=VM&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'Urbancode Edutech Solutions Private Limited is simply outstanding! I enrolled in their Full Stack Development and Power BI courses, and the learning experience was hands-on, structured, and focused on real-time projects. The mock interviews and career guidance sessions helped me build confidence.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_14',
            authorName: 'Vinetha U',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=VU&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I\'m currently learning Power BI and SQL at Urbancode Training Center as part of my career transition from a non-IT background into the IT field. The training has been outstanding. The instructors explain concepts clearly and engagingly. As someone without a development background, I now feel confident enough to take on a mini project.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_15',
            authorName: 'Aniruth Jaganath',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=AJ&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'The teaching approach was clear, structured, and beginner-friendly, making it easier to understand complex topics. Hands-on projects and real-time examples helped reinforce the learning and build confidence in developing functional mobile apps using React Native.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_16',
            authorName: 'Raja',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=R&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'I am currently pursuing a .NET Full Stack Developer course. I have successfully completed HTML, CSS, and JavaScript, and I am now attending Angular classes. The trainers are very friendly, supportive, and highly knowledgeable, making the learning experience enjoyable and effective. The interview support is truly commendable.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_17',
            authorName: 'Savitha Suganthan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SS&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'Urbancode Training and Solutions is the best place to upgrade your tech skills! I enrolled in the Full Stack Development course, and the training was top-notch. The trainers are experienced, friendly, and always ready to help. The hands-on projects and mock interviews really helped me gain confidence.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_18',
            authorName: 'Arnold Johnson',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=AJ&background=FBBC05&color=fff&size=60',
            rating: 5,
            text: 'I\'m currently doing the Full Stack Development course at Urbancode, and it\'s been a great experience so far. The sessions are clear, practical, and very helpful for understanding both frontend and backend concepts. A special thanks to Savitha ma\'am for her amazing teaching and support.',
            branchName: 'Pallikaranai'
        },
        {
            _id: 'plk_19',
            authorName: 'Mohamed Al Hafees',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=MA&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I opted for training and placement from Urbancode Training Institute. The trainer, Srikanth, is excellent in both Angular and .NET. His way of teaching is clear, practical, and easy to understand. The institute also provided good placement support along with training. I strongly recommend for anyone looking to build a career in Full Stack development.',
            branchName: 'Pallikaranai'
        },

        // ── Tirunelveli Branch ──
        {
            _id: 'tnv_1',
            authorName: 'Aravindhan',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=A&background=4285F4&color=fff&size=60',
            rating: 5,
            text: 'I enrolled in the Full Stack Development course. The people are very friendly, the course fee is affordable, and I\'m eager to start my learning journey with UrbanCode Tirunelveli.',
            branchName: 'Tirunelveli'
        },
        {
            _id: 'tnv_2',
            authorName: 'Subha Subha',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SS&background=EA4335&color=fff&size=60',
            rating: 5,
            text: 'I joined Urbancode for their Data Analytics training program and had a great learning experience. The trainers explained concepts with real-time examples and focused heavily on hands-on practice. The course structure was industry-oriented and helped me gain confidence in SQL, Power BI, and Python. Highly recommended for anyone looking to build a career in IT.',
            branchName: 'Tirunelveli'
        },
        {
            _id: 'tnv_3',
            authorName: 'Siva SS',
            profilePhotoUrl: 'https://ui-avatars.com/api/?name=SS&background=34A853&color=fff&size=60',
            rating: 5,
            text: 'The AWS and DevOps training at Urbancode exceeded my expectations. The sessions were completely practical and covered AWS services, Docker, Kubernetes, Jenkins, and Terraform. The trainer shared real industry use cases which made learning easier and more relevant.',
            branchName: 'Tirunelveli'
        },
    ];

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/google-reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();

                let fetchedReviews = [];
                if (data.success && data.data && data.data.length > 0) {
                    fetchedReviews = data.data;
                } else {
                    fetchedReviews = fallbackReviews;
                }
                setReviews(fetchedReviews);
            } catch (err) {
                console.error('Error fetching Google Reviews:', err);
                setError(err.message);
                setReviews(fallbackReviews);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atStart = scrollLeft <= 1;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
    };

    const slideNext = () => {
        if (sliderRef.current) {
            if (isAtEnd) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: 310, behavior: 'smooth' });
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -310, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && !loading) {
                slideNext();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isAtEnd, isPaused, loading]);

    // Filtered reviews by branch
    const filteredReviews = activeBranch === 'All'
        ? reviews
        : reviews.filter(r => (r.branchName || 'Velachery') === activeBranch);

    // Determine if cards should be centered (fewer than 4)
    const shouldCenter = filteredReviews.length <= 3;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="gr-star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="gr-star empty">&#9733;</span>);
            }
        }
        return stars;
    };

    if (loading) {
        return (
            <div className="google-reviews-section">
                <div className="gr-loading-container">
                    <div className="gr-spinner"></div>
                    <p>Loading Reviews...</p>
                </div>
            </div>
        );
    }

    return (
        <section className="google-reviews-section">
            <h2 className="section-main-title text-shine gr-custom-title">
                <span className="gr-logo-word">
                    <span className="g">G</span>
                    <span className="o1">o</span>
                    <span className="o2">o</span>
                    <span className="g2">g</span>
                    <span className="l">l</span>
                    <span className="e">e</span>
                </span> Reviews
            </h2>

            {/* Branch Filter + Write Review */}
      <div className="gr-branch-filter-bar">
    <div className="gr-branch-tabs">

        {branches.map(branch => (
            <button
                key={branch}
                className={`gr-branch-tab ${
                    activeBranch === branch ? "active" : ""
                }`}
                onClick={() => setActiveBranch(branch)}
            >
                {branch}
            </button>
        ))}

        <button
            type="button"
            className="gr-write-review-btn"
            onClick={() => setIsWriteReviewModalOpen(true)}
        >
             Write a Review
        </button>

    </div>
</div>

            <div className="gr-main-content">
                <div
                    className="gr-slider-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className={`gr-nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev}>&lt;</button>

                    <div className="gr-glass-track-wrapper">
                        <div
                            className={`gr-scroll-track ${shouldCenter ? 'gr-center-cards' : ''}`}
                            ref={sliderRef}
                            onScroll={checkScrollPosition}
                        >
                            {filteredReviews.map((review, idx) => (
                                <div
                                    key={`${review._id || review.googleReviewId}-${idx}`}
                                    className="gr-card"
                                    style={{ animationDelay: `${idx * 0.08}s` }}
                                >
                                    <div className="gr-profile">
                                        <img
                                            src={review.profilePhotoUrl || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                            alt={review.authorName}
                                            className="gr-avatar"
                                        />
                                    </div>
                                    <h3 className="gr-author-name">{review.authorName}</h3>
                                    <div className="gr-branch-name">{review.branchName || 'Velachery'}</div>
                                    <div className="gr-google-logo-container">
                                        <span className="gr-google-text">Google</span>
                                    </div>
                                    <div className="gr-stars-container">
                                        {renderStars(review.rating)}
                                    </div>
                                    <div className="gr-review-text-wrapper">
                                        <p className="gr-review-text">
                                            &ldquo;{review.text}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={`gr-nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext}>&gt;</button>
                </div>
            </div>

            {/* Write Review Branch Selection Modal */}
            {isWriteReviewModalOpen && (
                <div className="gr-modal-overlay" onClick={() => setIsWriteReviewModalOpen(false)}>
                    <div className="gr-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="gr-modal-close" onClick={() => setIsWriteReviewModalOpen(false)}>&times;</button>
                        <h3>Select a Branch</h3>
                        <p>Where would you like to leave a review?</p>
                        <div className="gr-modal-options">
                            {Object.entries(writeReviewLinks).map(([branch, link]) => (
                                <a 
                                    key={branch} 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="gr-modal-branch-btn"
                                    onClick={() => setIsWriteReviewModalOpen(false)}
                                >
                                    {branch}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GoogleReviews;
