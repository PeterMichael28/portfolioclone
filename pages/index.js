import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
 return (
  <div className="bg-primary/60 h-full">
   {/* text sec */}
   <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
    <div className="text-center flex flex-col justify-center pt-48 xl:pt-40 xl:text-left h-full container mx-auto">
     {/* title */}
     <motion.h1 
        className="h1"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
      Transforming Ideas <br /> Into{" "}
      <span className="text-accent">Digital Reality</span>
     </motion.h1>

     {/* sub */}
     <motion.p 
        className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10"
        variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
     >
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ratione suscipit provident excepturi voluptas
      animi similique, cum magnam. Fugit labore tenetur
      molestias, magni voluptatibus quos dolores facere
      voluptate sequi? Pariatur accusamus, dolores quasi
      sint beatae consequatur nulla quo dolore odit neque.
     </motion.p>

     <div className="flex justify-center xl:hidden">
      <ProjectsBtn />
     </div>

     <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
     >
      <ProjectsBtn />
     </motion.div>
    </div>
   </div>

   {/* Image sec */}
     <div className="w-[1200px] h-full absolute right-0 bottom-0">
       {/* bg imh */}
       <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0"></div>

       {/* particles */}
       <div className="">
         {/* <ParticlesContainer /> */}
       </div>

       {/* avatar */}
       <motion.div
        variants={fadeIn("up", 0.5)}
        transition={{duration: 1, ease: 'easeInOut'}}
        initial="hidden"
        animate="show"
        exit="hidden"
         className="w-full h-full max-w-[637px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
         <Avatar />
       </motion.div>
   </div>
  </div>
 );
};

export default Home;
