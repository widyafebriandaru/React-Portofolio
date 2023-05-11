import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Button from "./Button";

function Portfolio() {
  return (
    <div className="bg-neutral-300 dark:bg-stone-900 flex flex-col items-center ">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className=" pb-8 ">
        <Button />
      </div>
    </div>
  );
}

export default Portfolio;
