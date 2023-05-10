function Intro(){
    return(

   <>
 

      <div className="bg-neutral-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter items-center flex">
        <div className="max-w-5xl w-11/12 mx-auto ">
          <div className="flex justify-center flex-col pt-20 pb-6 text-xl md:text-2xl ">
            <div className="wrap">
              <p className="typing 
              text-slate-700 dark:text-orange-300 "> WELCOME . . . . . . . . . . . .  </p>
            </div>
           
            <h1 className="text-3xl md:text-4xl mb-1 md:mb-3 font-bold">
              HI👋, I'm Widya Febriandaru
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              Biasa dipanggil Daru, saat
              ini aku sedang memperdalam ilmu dalam bidang web developer
            </p>
            <div className="flex flex-row">
              <button type="button" className="intro-button">
                Portfolio
              </button>

              <button type="button" className="intro-button">
                Timeline
              </button>

              <button type="button" className="intro-button">
                Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
       )
}

export default Intro;