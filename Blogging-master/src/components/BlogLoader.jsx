 
 import {useState,useEffect} from 'react'
 import { Link, useParams } from 'react-router-dom';
 import {dataprovider} from '../data'
 export default function BlogLoader() {
 
   const { authorName } = useParams();
   const { blogid } = useParams();
   const blogData = dataprovider();
   const [filteredBlogs, setFilteredBlogs] = useState(blogData);
 
   
    const applyFilters = (blogid) => {
        const filteredData = blogData.filter((blog) =>
            blog.id==blogid && blog.author==authorName
        );
        setFilteredBlogs(filteredData);
        console.log(filteredData)
      };
 
      useEffect(() => {
       
          applyFilters(blogid);
        
      }, [blogid]);
 
  return ( <>
   
   <div class="s-content content">
            <main class="row content__page">
            {filteredBlogs.map((blog) => (
                <article class="column large-full entry format-standard">

                    <div class="media-wrap entry__media">
                        <div class="entry__post-thumb">
                            <img src="images/thumbs/single/standard/standard-1000.jpg" 
                                 srcset="images/thumbs/single/standard/standard-2000.jpg 2000w, 
                                         images/thumbs/single/standard/standard-1000.jpg 1000w, 
                                         images/thumbs/single/standard/standard-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt=""/>
                        </div>
                    </div>

                    <div class="content__page-header entry__header">
                        <h1 class="display-1 entry__title">
                       {blog.title}
                        </h1>
                        <ul class="entry__header-meta">
                            <li class="author">By<a href="#0">{blog.author}</a></li>
                            <li class="date">{blog.date}</li>
                            <li class="cat-links">
                                <a href="#0"></a><a href="#0">{blog.category}</a>
                            </li>
                        </ul>
                    </div>  
                     
                    <div class="entry__content">

                     
                        <p class="lead drop-cap">
                        {blog.excerpt}
                        </p>

                        <p style={{fontSize:"16px"}}>
                        {blog.content}
                        </p>
                     
                        <p>
                        <img src="images/wheel-1000.jpg" 
                             srcset="images/wheel-2000.jpg 2000w, 
                                     images/wheel-1000.jpg 1000w, 
                                     images/wheel-500.jpg 500w" 
                                     sizes="(max-width: 2000px) 100vw, 2000px" alt="" />
                        </p>

                        <h2>{blog.subtopic}</h2>
    
                        <p style={{fontSize:"16px"}}>
                        {blog.content}
                        </p>
                    
                        <blockquote style={{marginTop:"20px",marginBottom:"20px"}}> 
                            <p style={{marginLeft:"10px"}}>
                           {blog.intro}
                            </p>
                            <cite>Om</cite>
                        </blockquote>
    
                        <p style={{fontSize:"16px"}}>
                        A blogging site offers a dynamic platform for individuals and businesses to share insights, experiences, and expertise with a global audience. It serves as a digital hub where creativity meets communication, enabling content creators to express ideas, engage with readers, and build communities around shared interests. Through regular updates and interactions, bloggers can establish authority in their niche, attract like-minded individuals, and foster meaningful discussions. Moreover, blogging sites enhance visibility on search engines, driving organic traffic and expanding reach across diverse demographics. Whether aiming to educate, entertain, or inspire, the versatility of a blogging site empowers users to craft compelling narratives, showcase their unique perspectives, and contribute valuable content to the online landscape."

Does this capture what you had in mind? Let me know if you'd like any adjustments or if there's more you'd like to add!
                        </p>
                    <br></br>  <br></br>
                        <h3>Our site</h3>
    
                     
                        <br></br>  <br></br>

                        <p style={{fontSize:"16px"}}>
                        Welcome to our blogging site, where knowledge meets inspiration and community thrives. Our platform is more than just a space for words; it's a dynamic hub where diverse voices converge to share insights, stories, and expertise on a wide range of topics. Whether you're a seasoned professional, a passionate hobbyist, or someone eager to explore new ideas, there's a place for you here.

At , we believe in the power of storytelling and the transformative impact of shared knowledge. Our curated collection of blogs spans across categories such as News, Health, Travel, Lifestyle, Science, Technology, and more, offering readers a rich tapestry of content to explore and enjoy. Each blog is meticulously crafted to inform, entertain, and provoke thought, ensuring that every visit to our site is a journey of discovery.

What sets us apart is our commitment to quality and diversity. We pride ourselves on featuring content that is not only informative but also insightful, offering deep dives into subjects that matter most to our global audience. Whether it's the latest advancements in technology, personal reflections on health and wellness, or travel adventures that inspire wanderlust, our blogs are curated to resonate with readers from all walks of life.

Beyond content consumption, fosters a vibrant community where readers become participants. Engage with authors through comments, share your thoughts on social media, and join discussions that spark new ideas and perspectives. Our platform is designed to be interactive, encouraging dialogue and connection among like-minded individuals who share a passion for learning and discovery.

For aspiring writers and seasoned bloggers alike, offers a platform to showcase your voice and expertise. Whether you're looking to build a personal brand, promote a business, or simply share your passion with the world, our site provides the visibility and reach you need. Join our community of contributors and tap into a network of readers who are eager to engage with compelling content.

In today's digital age, where information overload is common, stands out as a beacon of quality content and meaningful interaction. We curate, create, and connect—bringing together a global community of thinkers, doers, and storytellers who are shaping the conversations of tomorrow. Explore, engage, and expand your horizons with [Your Blogging Site Name].

Join us on this journey of knowledge, inspiration, and community. Together, let's explore the world of ideas and share stories that matter. Welcome to [Your Blogging Site Name], where every blog is a window into a world of possibilities.
                        </p>
         
                       

                        <p class="entry__tags">
                            <span>Post Tags</span>
        
                            <span class="entry__tag-list">
                                <a href="#0">tech</a>
                                <a href="#0">blog</a>
                                <a href="#0">info</a>
                                <a href="#0">travel</a>
                            </span>
            
                        </p>
                    </div>   

                    <div class="entry__pagenav">
                        <div class="entry__nav">
                            <div class="entry__prev">
                                <a href="#0" rel="prev">
                                    <span>Previous Post</span> 
                                </a>
                            </div>
                            <div class="entry__next">
                                <a href="#0" rel="next">
                                    <span>Next Post</span>
                                   
                                </a>
                            </div>
                        </div>
                    </div>  

                    <div class="entry__related">
                        <h3 class="h2">Related Articles</h3>

                        <ul class="related">
                            <li class="related__item">
                                <a href="single-standard.html" class="related__link">
                                    <img src="images/thumbs/masonry/walk-600.jpg" alt=""/>
                                </a>
                                <h5 class="related__post-title">Using Repetition and Patterns in Photography.</h5>
                            </li>
                            <li class="related__item">
                                <a href="single-standard.html" class="related__link">
                                    <img src="images/thumbs/masonry/dew-600.jpg" alt=""/>
                                </a>
                                <h5 class="related__post-title">Health Benefits Of Morning Dew.</h5>
                            </li>
                            <li class="related__item">
                                <a href="single-standard.html" class="related__link">
                                    <img src="images/thumbs/masonry/rucksack-600.jpg" alt=""/>
                                </a>
                                <h5 class="related__post-title">The Art Of Visual Storytelling.</h5>
                            </li>
                        </ul>
                    </div>  

                </article>
                ))}
                </main>
                </div> 
  </>
  );
}
 