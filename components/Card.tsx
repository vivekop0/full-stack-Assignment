// Assuming this is in data.ts
import i from "../public/design-1714994165907.png";
export interface DataItem {
    image: StaticImageData;
    title: string;
    heading: string;
}

export const data: DataItem[] = [
    {
        image: i,
        title: 'Title 1',
        heading: 'Heading 1'
    },
    {
        image: i,
        title: 'Title 2',
        heading: 'Heading 2'
    },
    {
        image: i,
        title: 'Title 2',
        heading: 'Heading 2'
    },
    {
        image: i,
        title: 'Title 2',
        heading: 'Heading 2'
    },
    // Add more items as necessary
];

// Card.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    heading: string;
}

export  default function Card({ image, title, heading }:DataItem) {
    return (
        <div className="max-w-sm text-center bg-slate-900 border m-4 border-gray-200 rounded-lg shadow-lg overflow-hidden ">
            <div className="relative h-40 w-60 p-4">  
                <Image 
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">
                    {heading}
                </p>
                <button className="text-white bg-blue-500 w-full hover:bg-blue-600 rounded px-4 py-2">
                    Read More
                </button>
            </div>
        </div>
    );
};

