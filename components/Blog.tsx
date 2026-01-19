
import React from 'react';

interface BlogProps {
  t: any;
}

const Blog: React.FC<BlogProps> = ({ t }) => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">The Journal</span>
          <h1 className="text-4xl md:text-8xl font-black font-oswald uppercase leading-none mb-4">{t.blog.title}</h1>
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{t.blog.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.blog.posts.map((post: any) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden border border-neutral-900 bg-black relative">
                 <img 
                   src={`https://images.unsplash.com/photo-${1517836357463 + post.id}-d25dfeac3438?auto=format&fit=crop&q=80&w=800`} 
                   className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                   alt={post.title} 
                 />
                 <div className="absolute top-4 left-4 bg-accent text-[10px] font-black px-3 py-1 uppercase">{post.cat}</div>
              </div>
              <h2 className="text-2xl font-black font-oswald uppercase mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
              <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between text-[10px] font-black tracking-widest text-neutral-700 uppercase">
                <span>{post.date}</span>
                <span className="group-hover:text-white transition-colors">Read Post <i className="fas fa-arrow-right ml-2 text-accent"></i></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
