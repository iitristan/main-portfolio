import React from "react";
import { motion } from "framer-motion";

// Image file paths
const images = [
  "IMG_8044.webp",
  "IMG_6864.webp",
  "IMG_6782.webp",
  "IMG_1418.webp",
  "IMG_6458.webp",
  "IMG_1003.webp",
];

const gridSizes = [
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

// Video editing work - Facebook video IDs
const videoWorks = [
  "1031012917922571",
  "313541611262021", 
  "620578073572981",
  "293253270117272",
  "973216147315887",
  "3465657200314667"
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MediaPortfolio = () => {
  return (
    <div className="bg-[#121212] pt-12">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Video Editing Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Video Editing Text Section */}
          <motion.p
            className="text-sm text-gray-500 text-left mb-1"
            variants={textVariants}
          >
            Video Editing Portfolio
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-blue-400 text-left mb-1"
            variants={textVariants}
          >
            Video Editing & Motion Graphics
          </motion.h2>
          <motion.p
            className="text-md text-gray-600 text-left mb-8"
            variants={textVariants}
          >
            Some of my past video editing and motion graphics work
          </motion.p>

          {/* Video Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoWorks.map((videoId, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=${videoId}&show_text=false&width=400&height=225&appId`}
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="rounded-lg"
                    title={`Video ${index + 1}`}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photography Section */}
        {/* Animated Text Section */}
        <motion.p
          className="text-sm text-gray-500 text-right mb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          Fun fact about me
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-blue-400 text-right mb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          I also do photography, and it's one of my hobbies
        </motion.h2>
        <motion.p
          className="text-md text-gray-600 text-right mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          Here are some photos I took over the past few years
        </motion.p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                gridSizes[index % gridSizes.length]
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={`/${image}`}
                srcSet={`/${image}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Media ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg"></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPortfolio;
