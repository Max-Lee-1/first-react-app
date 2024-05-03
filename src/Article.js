import online_etiquette from "./img/gaming-etiquette.webp";
import screentime from "./img/screentime-3.webp";
import spending from "./img/online-spending-2.webp";
import cybersecurity from "./img/cyber-security.webp";
import green_blob from "./img/blob-haikei.svg";
import red_stacks from "./img/stacked-peaks-haikei.svg";
import poly_grid from "./img/low-poly-grid-haikei.svg";
import blue_circles from "./img/circle-scatter-haikei-1.svg";
import yellow_blob_wave from "./img/blob-scene-haikei.svg";
import React, { useState } from "react";

export default function Article() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [latestHidden, setLatestHidden] = useState(false);

  // Function to handle click event and select a blog
  const selectBlog = (
    blogId,
    blogTitle,
    blogWebUrl,
    blogImageUrl,
    blogClass
  ) => {
    setSelectedBlog({
      id: blogId,
      title: blogTitle,
      webUrl: blogWebUrl,
      imageUrl: blogImageUrl,
      className: blogClass,
    });
    // Hide "Latest Article" section when a blog is clicked
    setLatestHidden(true);
  };

  // ArticleCard component representing each blog card
  function ArticleCard({ id, imageUrl, webUrl, title, className }) {
    // Toggle onClick from Blog button
    const handleClick = () => {
      selectBlog(id, title, webUrl, imageUrl, className);
    };

    // Condition: different code on "latest" vs "redirect" section
    if (className === "latest") {
      return (
        <button
          id={id}
          className={`lg:h-screen h-full col-span-1 row-span-1 bg-cover bg-center opacity-85 text-transparent w-full transition duration-200 lg:text-transparent lg:hover:text-white text-white`}
          onClick={handleClick}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="flex h-full lg:bg-none lg:hover:bg-gradient-to-b bg-gradient-to-b from-transparent to-gray-900">
            <div className="flex items-end justify-start h-auto p-8 text-xl font-normal text-left font-Arial lg:text-3xl ">
              {title}
            </div>
          </div>
        </button>
      );
    } else if (className === "redirect") {
      return (
        <div
          id={id}
          className="snap-start grid gap-4 my-6 xl:w-[25vw] w-[75vw] xl:h-[65vh] h-[70vh] bg-cover bg-no-repeat bg-center rounded-lg shadow hover:scale-105 transition duration-100"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <a
            className="flex items-center justify-center w-full h-full bg-cover rounded-lg bg-gradient-to-br from-transparent to-gray-900"
            href={webUrl}
            target="blank"
          >
            <div className="xl:px-8 px-[10vw] font-Arial text-center text-white lg:text-2xl text-xl">
              {title}
            </div>
          </a>
        </div>
      );
    }
  }

  // Article component representing the entire article section
  return (
    <section
      data-section
      id="Article"
      className="w-screen min-h-screen grid z-10 relative justify-center items-start mt-4 bg-gradient-to-b from-Rhino from-75% to-transparent to-100%"
    >
      {!latestHidden && ( // Check if "Latest Article" section should be visible
        <div className="grid w-screen h-screen grid-cols-2 grid-rows-2 lg:grid-cols-4 bg-Rhino snap-start">
          {/* Grid of ArticleCards */}
          <ArticleCard
            className="latest"
            id="Blog1"
            imageUrl={online_etiquette}
            title="Gaming Etiquette"
          />
          {/* Add more ArticleCard components for each blog */}

          <ArticleCard
            className="latest"
            id="Blog2"
            imageUrl={screentime}
            title="Screentime Management"
          />

          <ArticleCard
            className="latest"
            id="Blog3"
            imageUrl={spending}
            title="Online Spending"
          />

          <ArticleCard
            className="latest"
            id="Blog4"
            imageUrl={cybersecurity}
            title="Cybersecurity"
          />
        </div>
      )}

      {/* Render the selected blog if it's not null */}
      {selectedBlog && (
        <div className="relative w-screen h-screen snap-start">
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-20 opacity-85"
            style={{ backgroundImage: `url(${selectedBlog.imageUrl})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-black"></div>

          <div className="flex flex-row justify-between h-10 p-20 pt-40">
            <h1 className="text-5xl font-bold text-white font-Proxima drop-shadow-lg">
              {selectedBlog.title}
            </h1>
            <button
              className="self-center w-auto text-lg transition duration-100 rounded-lg hover:scale-110"
              onClick={() => {
                setSelectedBlog(null);
                setLatestHidden(false); // Unhide Latest Article Section
              }}
            >
              X
            </button>
          </div>
          <div className="w-screen p-20 pt-10">
            Deserunt cillum voluptate exercitation adipisicing ea aute
            incididunt elit exercitation ex proident ea magna dolor. Officia ad
            qui esse irure et laboris aliquip laboris irure enim. Dolor elit
            consectetur excepteur cillum in ullamco quis. Ad exercitation nisi
            pariatur eu velit anim consectetur nulla incididunt.
          </div>
        </div>
      )}

      <div className="w-screen h-screen">
        <div class="font-Proxima w-screen text-white lg:text-5xl text-4xl font-bold drop-shadow-lg lg:ml-20 mx-10 mb-4 pt-28 snap-start">
          Other Blog Sites
        </div>

        <div class="media-scroller snap-mandatory snap-both grid grid-flow-col grid-cols-subgrid gap-4 overflow-x-auto overflow-y-hidden lg:ml-20 ml-8 ">
          <ArticleCard
            className="redirect"
            id="Blog5"
            imageUrl={red_stacks}
            title="How to limit screen time and help your gamer build healthy habits5"
            webUrl="https://www.verizon.com/about/parenting/healthy-gamer-habits"
          />
          <ArticleCard
            className="redirect"
            id="Blog5"
            imageUrl={poly_grid}
            title="Video Games and Mental Health: How Gaming Affects Your Mental Health"
            webUrl="https://gamequitters.com/how-gaming-affects-your-mental-health/"
          />
          <ArticleCard
            className="redirect"
            id="Blog5"
            imageUrl={yellow_blob_wave}
            title="Coping with life - Gaming and mental health
            "
            webUrl="https://www.youngminds.org.uk/young-person/coping-with-life/gaming-and-mental-health/"
          />
          <ArticleCard
            className="redirect"
            id="Blog5"
            imageUrl={green_blob}
            title="Why gaming is better for your mental health than you might think"
            webUrl="https://www.barnardos.org.uk/blog/why-gaming-better-your-mental-health-you-might-think"
          />
          <ArticleCard
            className="redirect"
            id="Blog5"
            imageUrl={blue_circles}
            title="Video Games and Mental Health: A Surprising Ally"
            webUrl=""
          />
        </div>
      </div>
    </section>
  );
}
