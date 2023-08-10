import PropTypes from "prop-types";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons'


function PortfolioItem({ title, imgUrl, stack, link, github, github2 }) {
  return (
    <>
    <Dialog.Root>
    <Dialog.Trigger className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:border-slate-400 dark:hover:border-orange-400">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md hover:border-slate-400 dark:hover:border-orange-400"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 inset-0 fixed"/>
    <Dialog.Content className="bg-white/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-2 shadow max-h-screen ">
      <Dialog.Close className="flex justify-end w-full pb-1"><Cross2Icon className="font-bold h-5 w-5 text-white dark:text-black"/></Dialog.Close>
            <img src={imgUrl} alt="Preview" className=" object-cover  " />


            <div className="mt-2 flex items-center">
              <a href={link} target="_blank" rel="noreferrer" className="p-2 bg-orange-300 hover:bg-orange-400 rounded-md text-sm mr-2 items-center">Go to website</a>
              <a 
								href={github}
                                target="_blank"
                                rel="noopener noreferrer"
								className="bg-stone-600 hover:bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="w-5 h-5"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
                                
								>
								<g fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
										fill="currentColor"
									/>
								</g>
								</svg>
							</a>

            {github2 && (
              <a 
								href={github2}
                                target="_blank"
                                rel="noopener noreferrer"
								className="bg-stone-600 hover:bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="w-5 h-5"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
                                
								>
								<g fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
										fill="currentColor"
									/>
								</g>
								</svg>
							</a>
              )}
            </div>
    </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
    </>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioItem;
