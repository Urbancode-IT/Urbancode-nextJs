import React from 'react';
import NewInternalCourse from '@/app/components/CourseLayout/NewInternalCourse';
import { newCourseData } from '@/app/data/newCourseData';

export async function generateStaticParams() {
    return Object.keys(newCourseData).map((slug) => ({
        slug: slug,
    }));
}

const CoursePage = async ({ params }) => {
    const { slug } = await params;
    const data = newCourseData[slug];

    return <NewInternalCourse data={data} />;
};

export default CoursePage;
