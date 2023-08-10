import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <>
      <div className="bg-neutral-300 dark:bg-stone-900 flex flex-col items-center">
        <div className="text-base md:text-xl mb-3 font-medium text-stone-900 dark:text-stone-300">
          <Title>My Projects So Far</Title>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5  my-5">
            {portfolio.map((project, index) => (
              <PortfolioItem
                key={index} // Add a unique key based on the index
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                github={project.github}
                github2={project.github2}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
