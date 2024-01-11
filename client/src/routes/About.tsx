function About() {
  return (
   <div className="bg-gray-100 p-6 rounded-xl max-w-screen-lg mx-auto row-span-2 col-span-4">
     <section className="mb-8">
       <h1 className="text-lg sm:text-2xl font-bold mb-4">About this project</h1>
       <p className="text-base sm:text-lg">
         An app should be intuitive, but here I'll explain its workings and the
         technologies used.
       </p>
       <p className="text-base sm:text-lg">
         This project serves as a platform to enhance my skills in React,
         Tailwind, React Router, Node.js, Firebase, and APIs.
       </p>
       <div className="flex items-center text-base sm:text-lg">
         <span>Here is the</span>
         <a className="ml-2 text-blue-500 underline hover:no-underline" href='https://github.com/RafaelSdeS/weather-app'>link for the project repo</a>
       </div>
     </section>
     <section>
       <h1 className="text-lg sm:text-2xl font-bold mb-4">How this app works</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div>
           <h2 className="text-base sm:text-lg font-semibold">Page Navigation</h2>
           <p className="text-sm sm:text-base">
             Utilizing React Router for seamless page transitions.
           </p>
         </div>
         <div>
           <h2 className="text-base sm:text-lg font-semibold">Styling</h2>
           <p className="text-sm sm:text-base">All styles crafted using Tailwind CSS.</p>
         </div>
         <div>
           <h2 className="text-base sm:text-lg font-semibold">Data Handling</h2>
           <p className="text-sm sm:text-base">
             Fetching data from the OpenWeather API and implementing user
             verification via Node.js.
           </p>
         </div>
         <div>
           <h2 className="text-base sm:text-lg font-semibold">Database</h2>
           <p className="text-sm sm:text-base">
             Firebase was chosen as the database for its simplicity and speed.
           </p>
         </div>
       </div>
     </section>
   </div>
  )
 }
 
 export default About;
 