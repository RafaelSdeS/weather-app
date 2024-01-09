function About() {
  return (
    <div className="bg-gray-100 p-6 rounded-xl lg:max-w-screen-lg mx-auto col-span-5 lg:col-span-4 lg:col-start-2">
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">About this project</h1>
        <p className="text-lg">
          An app should be intuitive, but here I'll explain its workings and the
          technologies used.
        </p>
        <p className="text-lg">
          This project serves as a platform to enhance my skills in React,
          Tailwind, React Router, Node.js, Firebase, and APIs.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">How this app works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold">Page Navigation</h2>
            <p className="text-base">
              Utilizing React Router for seamless page transitions.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Styling</h2>
            <p className="text-base">All styles crafted using Tailwind CSS.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Data Handling</h2>
            <p className="text-base">
              Fetching data from the OpenWeather API and implementing user
              verification via Node.js.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Database</h2>
            <p className="text-base">
              Firebase was chosen as the database for its simplicity and speed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
