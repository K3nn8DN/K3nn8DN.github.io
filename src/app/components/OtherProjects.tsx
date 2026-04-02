import { ImageWithFallback } from "./figma/ImageWithFallback";
import {  Github, FileText } from "lucide-react";
import { Button } from "./ui/button";
import  { useRef, useEffect, useState, useCallback } from 'react';

export function OtherProjects({ currentProject, theme }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index);
      setSelectedIndex(index);
    }
  };

  // Reset video when selected index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [selectedIndex]);

  const selectedProject = currentProject.projects[selectedIndex];
  const isVideo = typeof selectedProject.media === 'string' && 
                  (selectedProject.media.endsWith('.mp4') || 
                   selectedProject.media.endsWith('.webm') || 
                   selectedProject.media.endsWith('.mov'));

  return (
    <div className="grid md:grid-cols-2 md:h-[500px]">
      {/* Left side: Media Picker/Viewer */}
      <div className="w-full h-64 md:h-[500px] flex flex-col items-center justify-center bg-black/5 dark:bg-white/5">
        <div className="w-full h-full flex items-center justify-center p-4">
          {isVideo ? (
            <video
              ref={videoRef}
              className="max-w-full max-h-full object-contain rounded-lg"
              controls
              autoPlay
              loop
              muted
            >
              <source src={selectedProject.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <ImageWithFallback
              src={selectedProject.media}
              alt={selectedProject.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          )}
        </div>
      </div>

      {/* Right side: list of titles */}
      <div className="p-4 md:p-8 flex flex-col overflow-y-auto space-y-2">
        {currentProject.projects.map((proj, index) => (
          <div key={index}>
            <button
              onClick={() => handleClick(index)}
              className={`w-full text-left px-4 py-2 rounded-lg border ${
                theme.border
              } hover:bg-gray-100 transition-all`}
              style={{
                background:
                  openIndex === index
                    ? theme.cardGradient
                    : "transparent",
                color: theme.primaryRgb,
              }}
            >
              {proj.title}
            </button>
            {openIndex === index && (
              <div className="px-4 mt-2 space-y-2">
                {proj.description && (
                  <p className={`${theme.textOpacity}  text-sm`}>
                    {proj.description}
                  </p>
                )}
                {(proj.pageLink || proj.seeMore) && (
                  <div className="flex gap-2 mt-2">
                    {proj.pageLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${theme.border}`}
                        onClick={() => window.open(proj.pageLink, "_blank")}
                      >
                        <Github className="mr-1" size={16} />
                        Page Link
                      </Button>
                    )}
                    {proj.seeMore && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${theme.border}`}
                        onClick={() => window.open(proj.seeMore, "_blank")}
                      >
                        <FileText className="mr-1" size={16} />
                        See More
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}