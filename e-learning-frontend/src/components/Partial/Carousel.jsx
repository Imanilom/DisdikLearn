import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // styles for carousel
import { Carousel } from 'react-responsive-carousel';

const reviews = [
    {
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentium laudantium distinctio dolore molestias facilis velit.",
        image: "../src/assets/teacher-1.png",
        rating: 5
    },
    {
        name: "Jane Smith",
        review: "Consectetur adipiscing elit. Praesentium laudantium distinctio dolore molestias facilis velit pariatur maiores debitis inventore.",
        image: "../src/assets/teacher-2.png",
        rating: 4
    },
    {
        name: "Alice Johnson",
        review: "Praesentium laudantium distinctio dolore molestias facilis velit pariatur maiores debitis inventore. Lorem ipsum dolor sit amet.",
        image: "../src/assets/teacher-3.png",
        rating: 5
    }
];

const ReviewCard = ({ name, review, image, rating }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
        <img src={image} alt={name} className="w-24 h-full rounded-full object-cover mb-4" />
        <p className="text-gray-700 mb-4 text-lg">{review}</p>
        <h3 className="font-semibold text-xl text-blue-600 mb-2">{name}</h3>
        <div className="flex justify-center">
            {Array.from({ length: 5 }, (_, index) => (
                <svg key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.363 1.118l1.286 3.95c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.84-.198-1.54-1.118l1.286-3.95a1 1 0 00-.363-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.95z" />
                </svg>
            ))}
        </div>
    </div>
);

const StudentReviews = () => (
    <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Students' Reviews</h2>
        <div className="w-16 border-t-2 items-center border-blue-600 mb-6 mx-auto"></div>
        <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={33.33}
            className="w-full"
        >
            {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
            ))}
        </Carousel>
    </div>
);

export default StudentReviews;
