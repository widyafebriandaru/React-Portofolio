
function Intro() {
  return <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">Widya Febriandaru;
  <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">HAI👋 </h1>
  <p className="text-base md:text-xl mb-3 font-medium">Front End Web Developer</p>
  <p className="text-sm max-w-xl mb-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio fugiat aperiam enim ipsum quasi? Molestias tempore pariatur ipsa in.
  </p>
  <div className="flex flex-row">
  <button
			type="button"
			className="intro-button">
		Portfolio</button>

		<button
			type="button"
			className="intro-button">
		Timeline</button>
    
		<button
			type="button"
			className="intro-button">
    Kontak</button>
    </div>
  </div>
}

export default Intro;
