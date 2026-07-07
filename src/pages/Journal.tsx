import { useState } from "react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";
import { Search, Calendar, User, Clock, X, ArrowUpRight } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

export default function Journal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ["All", "Home Planning", "Materials", "Lighting"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const seoTitle = activeArticle 
    ? `${activeArticle.title}`
    : "Architecture & Interior Design Journal | DEVRA Architects";
  
  const seoDescription = activeArticle
    ? `${activeArticle.summary} Read the full educational guide on DEVRA Architects Journal.`
    : "Read expert educational essays and design frameworks by Ar. Rajkumar Devra on planning luxury residences, passive solar cooling, local materials, and circadian lighting in India.";

  return (
    <div id="journal-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title={seoTitle}
        description={seoDescription}
        keywords={[
          activeArticle ? activeArticle.category.toLowerCase() : "architectural journal",
          "indian house planning tips",
          "passive cooling architecture",
          "local stones chandigarh",
          "teak wood door design punjab",
          "circadian home lighting guidelines",
        ]}
        path={activeArticle ? `journal?article=${activeArticle.id}` : "journal"}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // JOURNAL
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Architectural Insights & Guides
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            A serious collection of educational essays, planning frameworks, and material curation advice designed to assist premium homeowners on their construction journeys.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-stone-200/60">
          {/* Categories */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] uppercase tracking-widest font-sans font-semibold py-1 transition-colors cursor-pointer ${
                    isActive ? "text-stone-950 border-b border-stone-900" : "text-stone-400 hover:text-stone-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-100 border border-stone-200 text-xs py-2.5 pl-9 pr-4 rounded-none focus:outline-none focus:border-stone-400 transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer bg-stone-100 border border-stone-200 p-6 md:p-8 flex flex-col justify-between hover:border-stone-400 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                  <span className="text-stone-700 font-semibold">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-200 text-[10px] font-mono text-stone-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <span className="flex items-center gap-1 uppercase tracking-widest text-stone-900 font-semibold border-b border-stone-900 pb-0.5 group-hover:text-stone-600 group-hover:border-stone-600 transition-colors">
                  Read Essay <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Results State */}
        {filteredPosts.length === 0 && (
          <div className="py-24 text-center border border-dashed border-stone-300">
            <p className="text-stone-500 text-xs uppercase tracking-widest">
              No articles match your search parameters.
            </p>
          </div>
        )}

      </div>

      {/* IMMERSIVE MODAL OVERLAY FOR READING FULL ESSAYS */}
      {activeArticle && (
        <div id="journal-modal" className="fixed inset-0 bg-stone-950/60 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-50 text-stone-900 w-full max-w-3xl my-8 border border-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto rounded-none">
            
            {/* Header / close bar */}
            <div className="sticky top-0 bg-stone-50 border-b border-stone-200 py-4 px-6 md:px-8 flex items-center justify-between z-10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-bold">
                DEVRA JOURNAL // {activeArticle.category}
              </span>
              <button
                id="close-journal-modal"
                onClick={() => setActiveArticle(null)}
                className="text-stone-500 hover:text-stone-900 p-1 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main content body */}
            <div className="p-6 md:p-10 space-y-8">
              
              {/* Meta metrics */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeArticle.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {activeArticle.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              {/* Styled text block */}
              <div className="prose prose-stone max-w-none text-stone-800 text-xs md:text-sm leading-relaxed space-y-6 font-light">
                {activeArticle.content.split("\n\n").map((para, idx) => {
                  if (para.startsWith("###")) {
                    return (
                      <h4 key={idx} className="font-serif text-lg md:text-xl text-stone-900 font-medium pt-4 tracking-tight">
                        {para.replace("###", "").trim()}
                      </h4>
                    );
                  }
                  return <p key={idx}>{para}</p>;
                })}
              </div>

              {/* Author footer */}
              <div className="pt-8 border-t border-stone-200 mt-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Ar. Rajkumar Devra"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-xs font-serif text-stone-900 font-medium">Ar. Rajkumar Devra</p>
                  <p className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Principal Architect, DEVRA</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
