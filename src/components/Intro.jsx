function Intro(){
    return(

   <>
 

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            Welcome to my website
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
              HAI👋{" "}
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              Perkenalkan namaku Widya Febriandaru biasa dipanggil Daru, saat
              ini aku sedang memperdalam ilmu dalam bidang web developer
            </p>
            <p className="text-sm max-w-xl mb-6">
              Silahkan tekan tombol dibawah ini untuk mengetahui diriku lebih
              lanjut
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