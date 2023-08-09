function Contact() {
  return (
    <>
      <div className="flex flex-col mx-auto pt-20 px-10 bg-neutral-300 dark:bg-stone-900 items-center justify-center min-h-screen">
        <div className="text-base md:text-xl mb-3 font-medium text-stone-900 dark:text-stone-300">
          <p>Leave me message</p>
        </div>
        <form
          action="https://getform.io/f/c14e25fd-7936-4c53-a95c-fc7aadba59a1"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent dark:text-white placeholder:text-stone-900 dark:placeholder:text-stone-300 border-stone-900 dark:border-white border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent dark:text-white placeholder:text-stone-900 dark:placeholder:text-stone-300  border-stone-900 dark:border-white border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent dark:text-white placeholder:text-stone-900 dark:placeholder:text-stone-300  border-stone-900 dark:border-white border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white dark:text-stone-900 bg-stone-900 dark:bg-slate-100 drop-shadow-md hover:bg-slate-400 dark:hover:bg-orange-400"
          >
            Submit
          </button>
        </form>
        <div className="mt-11"></div>
      </div>
    </>
  );
}

export default Contact;
