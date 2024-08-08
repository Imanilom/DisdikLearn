import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // styles for carousel
import { Carousel } from 'react-responsive-carousel';

const reviews = [
    {
        name: "John Deo",
        review: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Praesentium Laudantium Distinctio Dolore Molestias Facilis Velit Pariatur Maiores Debitis Inventore.",
        image: "../src/assets/teacher-1.png",
        rating: 5
    },
    {
        name: "John Deo",
        review: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Praesentium Laudantium Distinctio Dolore Molestias Facilis Velit Pariatur Maiores Debitis Inventore.",
        image: "../src/assets/teacher-1.png",
        rating: 4
    },
    {
        name: "John Deo",
        review: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Praesentium Laudantium Distinctio Dolore Molestias Facilis Velit Pariatur Maiores Debitis Inventore.",
        image: "../src/assets/teacher-1.png",
        rating: 5
    }
];

const ReviewCard = ({ name, review, image, rating }) => (
    <div className="p-4 bg-white rounded-lg shadow-md text-center mx-2 max-w-xs">
        <p className="mb-4 text-sm">{review}</p>
        <div className="flex items-center justify-center mb-4">
            <img src={image} alt={name} className="object-scale-down h-48 w-96 ..." />
        </div>
        <h3 className="font-bold text-lg text-blue-500">{name}</h3>
        <div className="flex justify-center mt-2">
            {Array(rating).fill(0).map((_, index) => (
                <svg key={index} className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.363 1.118l1.286 3.95c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.84-.198-1.54-1.118l1.286-3.95a1 1 0 00-.363-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.95z" />
                </svg>
            ))}
        </div>
    </div>
);

const StudentReviews = () => (
    <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">OUR STUDENTS REVIEW</h2>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} centerMode={true} centerSlidePercentage={33.33}>
            {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
            ))}
        </Carousel>
    </div>
);

export default StudentReviews;
