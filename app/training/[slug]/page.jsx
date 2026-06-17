import React from 'react';
import NewInternalCourse from '@/app/components/CourseLayout/NewInternalCourse';
import { newCourseData } from '@/app/data/newCourseData';
import coursesData from '@/app/courses/[categorySlug]/coursesData';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(newCourseData).map((slug) => ({
        slug: slug,
    }));
}

const trainingToCourseMapping = {
    "mern-stack": "mern-stack",
    "mean-stack": "mean-stack",
    "dotnet-angular": ".net-angular",
    "data-analytics": "data-analytics",
    "ai-ml": "ai-and-ml",
    "aws-devops": "aws-devops",
    "automation-testing": "automation-testing",
};

const CoursePage = async ({ params }) => {
    const { slug } = await params;
    if (slug === "mern-stack") {
        redirect("/courses/fullstack-development/ai-powered-fullstack");
    }
    const baseData = newCourseData[slug];
    let data = baseData;

    if (baseData) {
        const targetSlug = trainingToCourseMapping[slug] || slug;
        let foundCourse = null;
        for (const category of Object.values(coursesData)) {
            const match = category?.courses?.find(
                (c) => c && c.title && c.title.toLowerCase().replace(/\s+/g, "-") === targetSlug
            );
            if (match) {
                foundCourse = match;
                break;
            }
        }
        data = {
            ...baseData,
            batches: foundCourse?.batches || baseData.batches
        };
    }

    return <NewInternalCourse data={data} />;
};

export default CoursePage;
