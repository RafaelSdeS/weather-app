import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import fiverr from '../assets/fiverr.svg'

function Contact() {
  return (
    <div className="bg-gray-100 row-span-2 col-span-4 h-[75vh] flex flex-col text-center rounded-xl mr-4">
      <div className="mx-auto my-5">
        <h1 className="font-bold">
          Feel free to contact me and see my work and other projects
        </h1>
      </div>
      <div className="flex flex-row justify-around h-3/4 mx-4">
        <div className="flex flex-col justify-center">
          <a href="https://github.com/RafaelSdeS">
            <img
              src={github}
              alt="Github"
              className="h-16 md:h-20 lg:h-28 w-20 md:w-24 lg:w-32"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://www.linkedin.com/in/rafael-silva-de-souza">
            <img
              src={linkedin}
              alt=""
              className="h-20 md:h-24 lg:h-32 w-20 md:w-24 lg:w-32"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://www.instagram.com/rafael.sdesouza/">
            <img
              src={instagram}
              alt=""
              className="h-20 md:h-24 lg:h-32 w-20 md:w-24 lg:w-32"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://br.fiverr.com/rafaelsdesouza?up_rollout=true">
            <img
              src={fiverr}
              alt=""
              className="h-20 md:h-24 lg:h-32 w-20 md:w-24 lg:w-32"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
