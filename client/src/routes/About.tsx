function About() {
  return (
    <div className='bg-slate-400 row-span-2 col-span-4 h-[75vh] flex flex-col text-center rounded-xl p-10 mr-4'>
      <div className= "my-3">
      <h1 className="font-bold">About this project</h1>
      <p>An app should be self explanatory and shouldn't need instructions, 
        but I want to explain how everything works and the technologies I've chosen.</p>
        <p>This project was made to practice and improve my abilities with React, Tailwind 
          and some other techs, like React Router, Node, MongoDB and APIs
        </p>
      </div>
      <div className="flex flex-row justify-center my-3">
          <div>
            <h1 className="font-bold">FrontEnd</h1>
            <p>React</p>
            <p>Tailwind</p>
            <p>Vite</p>
          </div>
          <div>
            <h1 className="font-bold">BackEnd</h1>
            <p>NodeJs</p>
            <p>MongoDB</p>
            <p>OpenWeather API</p>
          </div>
      </div>
      <div className="my-3">
          <h1 className="font-bold">How to use this app</h1>
          <p>I use react Router to make the navigation</p>
          <p>The styles are all from Tailwind</p>
          <p>With Node I fetch the data from the OpenWeather Api</p>
          <p>MongoDB stores the locations</p>
      </div>
    </div>
  )
}

export default About