import PropTypes from "prop-types";

function PortfolioPreview({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:border-slate-400 dark:hover:border-orange-400">
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
        </p>
      </div>
    </div>
  );
}

PortfolioPreview.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioPreview;
