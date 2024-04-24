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
        <div id={id} className="bg-black">
          <button
            className={`col-span-1 bg-cover bg-center h-screen text-transparent w-full opacity-75 transition duration-200 hover:opacity-100 hover:text-white`}
            onClick={handleClick}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <p className="h-screen flex justify-start items-end p-8 font-Arial font-normal text-center text-4xl">
              {title}
            </p>
          </button>
        </div>
      );
    } else if (className === "redirect") {
      return (
        <div id={id}>
          <a
            className={`snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow hover:scale-105 transition duration-100`}
            href={webUrl}
            target="blank"
          >
            <img
              className="aspect-video object-cover rounded-t-lg"
              src={imageUrl}
              alt=""
            />
            <p className="text-white font-Arial text-center pl-4">{title}</p>
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
      className="w-screen grid z-10 relative justify-center items-center mt-20"
    >
      {!latestHidden && ( // Check if "Latest Article" section should be visible
        <div className="w-screen h-screen grid grid-cols-4">
          {/* Grid of ArticleCards */}
          <ArticleCard
            className="latest"
            id="Blog1"
            imageUrl="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            title="Gaming Etiquette"
          />
          {/* Add more ArticleCard components for each blog */}

          <ArticleCard
            className="latest"
            id="Blog2"
            imageUrl="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            title="Blog 2"
          />

          <ArticleCard
            className="latest"
            id="Blog3"
            imageUrl="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            title="Blog 3"
          />

          <ArticleCard
            className="latest"
            id="Blog4"
            imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            title="Blog 4"
          />
        </div>
      )}

      {/* Render the selected blog if it's not null */}
      {selectedBlog && (
        <div className="w-screen h-screen">
          <div className="w-screen h-screen relative">
            <div
              className="-z-20 absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedBlog.imageUrl})` }}
            ></div>
            <div className="-z-10 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>

            <div className="flex flex-row justify-between h-10 pt-40 p-20">
              <h1 className="font-Proxima text-white text-5xl font-bold drop-shadow-lg">
                {selectedBlog.title}
              </h1>
              <button
                className="w-auto self-center rounded-lg hover:scale-110 transition duration-100"
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
              incididunt elit exercitation ex proident ea magna dolor. Officia
              ad qui esse irure et laboris aliquip laboris irure enim. Dolor
              elit consectetur excepteur cillum in ullamco quis. Ad exercitation
              nisi pariatur eu velit anim consectetur nulla incididunt.
            </div>
          </div>
        </div>
      )}

      <h1 class="font-Proxima w-screen text-white text-5xl font-bold drop-shadow-lg ml-20 mb-8 mt-20">
        Other Blog Sites
      </h1>

      <div class="h-screen media-scroller snap-mandatory snap-both grid gap-4 grid-flow-col overflow-x-auto overflow-y-auto ml-20">
        <ArticleCard
          className="redirect"
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
          webUrl="https://www.verizon.com/about/parenting/healthy-gamer-habits"
        />
        <ArticleCard
          className="redirect"
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
          webUrl=""
        />
        <ArticleCard
          className="redirect"
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
          webUrl=""
        />
        <ArticleCard
          className="redirect"
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
          webUrl=""
        />
        <ArticleCard
          className="redirect"
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
          webUrl=""
        />
        <ArticleCard
          id="Blog5"
          imageUrl="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 5"
        />
      </div>
    </section>
  );
}
