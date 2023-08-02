function Contact() {
  return (
    <div className='bg-slate-400 row-span-2 col-span-4 h-[75vh] flex flex-col text-center rounded-xl mr-4'>
      <div className= "mx-auto my-5">
        <h1 className="font-bold">Feel free to contact me and see my work and other projects</h1>
      </div>
      <div className="flex flex-row justify-around h-3/4 mx-4">
        <div className="flex flex-col justify-center">
          <a href='/contact/1'>GitHub</a>
          <h1>Imagem</h1>
        </div>
        <div className="flex flex-col justify-center">
          <a href='/contact/1'>GitHub</a>
          <h1>Imagem</h1>
        </div>
        <div className="flex flex-col justify-center">
          <a href='/contact/1'>GitHub</a>
          <h1>Imagem</h1>
        </div>
        <div className="flex flex-col justify-center">
          <a href='/contact/1'>GitHub</a>
          <h1>Imagem</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact