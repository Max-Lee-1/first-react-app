import React, { useState } from "react";

export default function Article() {
  const [selectedBlog, setSelectedBlog] = useState(null);

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
  };

  // ArticleCard component representing each blog card
  function ArticleCard({ id, imageUrl, webUrl, title, className }) {
    //Toggle onClick from Blog button
    const handleClick = () => {
      selectBlog(id, title, webUrl, imageUrl, className);
    };
    //Condition: different html on "latest" vs "redirect" section
    if (className === "latest") {
      return (
        <div id={id}>
          {/* Render article previews here */}
          <button
            className={`snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow`}
            onClick={handleClick}
          >
            <img className="aspect-video object-cover" src={imageUrl} alt="" />
            <p className="text-white font-Arial text-left pl-4">{title}</p>
          </button>
        </div>
      );
    } else if (className === "redirect") {
      return (
        <div id={id}>
          {/* Render article previews here without onClick */}
          <a
            className={`snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow`}
            href={webUrl}
            target="blank"
          >
            <img className="aspect-video object-cover" src={imageUrl} alt="" />
            <p className="text-white font-Arial text-left pl-4">{title}</p>
          </a>
        </div>
      );
    }
  }

  React.useEffect(() => {
    console.log("Selected Blog:", selectedBlog);
  }, [selectedBlog]);

  // Article component representing the entire article section

  return (
    <section
      data-section
      id="Article"
      className="w-screen min-h-screen grid z-10 relative justify-center items-center pt-20 my-20"
    >
      <h1 className="font-Proxima text-white text-5xl font-bold drop-shadow-lg ml-20 mb-8">
        Latest Article
      </h1>

      <div className="grid media-scroller snap-mandatory snap-both  gap-4 grid-flow-col overflow-x-auto overscroll-contain ml-20">
        {/* Grid of ArticleCards */}
        <ArticleCard
          className="latest"
          id="Blog1"
          imageUrl="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
          title="Blog 1"
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

      {/* Render the selected blog if it's not null */}
      {selectedBlog && (
        <div>
          <h1 className="font-Proxima w-screen text-white text-5xl font-bold drop-shadow-lg pb-1 ml-20 mb-8 mt-20">
            {selectedBlog.title}
          </h1>
          <div className="flex gap-4 m-20">
            <img
              className="z-0 w-screen h-1/2 "
              src={selectedBlog.imageUrl}
              alt=""
            />
            {/* Render full article content here */}
            <div className="justify-end">
              <button
                className="gap-4 pb-4 bg-Charcoal rounded-lg shadow"
                onClick={() => setSelectedBlog(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 class="font-Proxima w-screen text-white text-5xl font-bold drop-shadow-lg pb-1 ml-20 mb-8 mt-20">
        Gaming Etiquette
      </h1>

      <div class="media-scroller snap-mandatory snap-both grid gap-4 grid-flow-col overflow-x-auto overscroll-contain ml-20">
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
