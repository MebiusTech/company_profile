'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = id ? projectsData[id] : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="flex-1 pixel-grid py-12 px-6 md:px-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="display-lg text-white mb-4">PROJECT NOT FOUND</h1>
          <Link href="/projects" className="pixel-sticker bg-primary text-black hover:bg-primary-light">
            BACK TO PROJECTS
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images || ['1.png', '2.png', '3.png'];
  const currentImage = `/projects/${project.slug}/${images[currentImageIndex]}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-4">
          <Link 
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            <ChevronLeft size={20} />
            <span>BACK</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-primary-container text-black">PROJECT DETAIL</span>
            <span className="font-code text-sm text-gray-400">[{project.id}]</span>
          </div>
          <h1 className="display-lg text-white text-shadow-hard uppercase">
            {project.title}
          </h1>
          <p className="body-lg text-gray-700 max-w-2xl">
            {project.fullDescription || project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
              <span key={tag} className="pixel-sticker bg-surface-container text-black text-sm">{tag}</span>
            ))}
          </div>
        </div>

        {/* Image Gallery Slider */}
        <div className="relative w-full">
          <div className="neo-card">
            {/* Image Container */}
            <div className="relative w-full h-[400px] md:h-[600px] bg-gray-900 overflow-hidden">
              <Image
                src={currentImage}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white transition-all"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 px-4 py-2 text-white font-code text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-24 h-24 shrink-0 border-2 transition-colors ${
                  index === currentImageIndex ? 'border-primary' : 'border-gray-500 hover:border-primary'
                }`}
              >
                <Image
                  src={`/projects/${project.slug}/${image}`}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Details Card */}
        <div className="neo-card">
          <div className={`neo-card-header ${project.headerColor} text-white`}>
            <span className="font-code text-sm">PROJECT INFORMATION</span>
          </div>
          <div className="neo-card-body flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="headline-md text-black mb-2">TYPE</h3>
                <p className="body-md text-gray-700">{project.type}</p>
              </div>
              <div>
                <h3 className="headline-md text-black mb-2">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="pixel-sticker bg-gray-200 text-black text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="headline-md text-black mb-2">DESCRIPTION</h3>
              <p className="body-md text-gray-700 leading-relaxed">
                {project.fullDescription || project.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Related Projects Link */}
        <div className="flex gap-4">
          <Link 
            href="/projects"
            className="pixel-sticker bg-primary text-black hover:bg-primary-light transition-colors"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}
