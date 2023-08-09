import PropTypes from 'prop-types';

function TimelineItem({ year, title, duration, details, skill }) {
   return (
      <>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-600 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md cursor-pointer">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-700 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-700 dark:text-stone-400">
               {details}
            </p>
      <div className="w-full">
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {skill.map(item => (
            <span key={item} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md cursor-pointer hover:border-slate-400 dark:hover:border-orange-400">
              {item}
            </span>
          ))}
        </p>
      </div>
         </li>
      </ol>
    
   </>
   )
}
TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    skill: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default TimelineItem;