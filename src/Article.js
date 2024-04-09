export default function Article() {
  return (
    <section
      data-section
      id="Article"
      className="w-screen min-h-screen z-10 relative grid justify-center items-center pt-20 my-20"
    >
      <h1 class="font-Proxima w-screen text-white text-5xl font-bold drop-shadow-lg ml-20 mb-8">
        Latest Article
      </h1>

      <div class="media-scroller snap-mandatory snap-both grid gap-4 grid-flow-col overflow-x-auto overscroll-contain ml-20">
        <button
          id="Article1"
          class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow"
        >
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Blog 1</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Blog 2</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Blog 3</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Blog 4</p>
        </button>
      </div>

      <h1 class="font-Proxima w-screen text-white text-5xl font-bold drop-shadow-lg pb-1 ml-20 mb-8 mt-20">
        Gaming Etiquette
      </h1>

      <div class="media-scroller snap-mandatory snap-both grid gap-4 grid-flow-col overflow-x-auto overscroll-contain ml-20">
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Blog 5</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Ut enim ad minim veniam</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Duis aute irure dolor</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Cillum dolore eu</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4"></p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">
            Excepteur sint occaecat cupidatat non proident
          </p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">At lectus urnaVestibulum</p>
        </button>
        <button class="snap-start grid gap-4 pb-4 bg-Charcoal rounded-lg shadow">
          <img
            className="aspect-video object-cover"
            src="https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
            alt=""
          />
          <p class="font-Arial text-left pl-4">Vestibulum</p>
        </button>
      </div>
    </section>
  );
}
