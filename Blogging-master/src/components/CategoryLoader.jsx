import { Link, useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import {dataprovider} from '../data'
import React   from "react";
import $ from "jquery";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
 
import '../App.css';import Sidebar from './Sidebar';
export default function CategoryLoader({ category }) {
    const { authorName } = useParams();
    console.log(authorName)
    const navigateTo = (path) => {
        window.location.href = path;
      };
    const blogData = dataprovider();
    const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  
    // useEffect(() => {
    //   applyFilters(category);
    // }, [category]);

    useEffect(() => {
        if (authorName) {
 
          const filteredData = blogData.filter(blog => blog.author.toLowerCase() === authorName.toLowerCase());
          setFilteredBlogs(filteredData);
          category=blogData.category
        } else {
 
          applyFilters(category);
        }
      }, [category, authorName]);
  
    const applyFilters = (categoryFilter) => {
      if (!categoryFilter) return;
  
      const filteredData = blogData.filter((blog) =>
        blog.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
  
      setFilteredBlogs(filteredData);
    };

    console.log(filteredBlogs)
    useEffect(() => {
       
        
       
      
        document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    
        
        const handleLoad = () => {
          $('html').removeClass('ss-preload').addClass('ss-loaded');
          $('#loader').fadeOut('slow', () => {
            $('#preloader').delay(300).fadeOut('slow');
          });
        };
    
        $('html').addClass('ss-preload');
        window.addEventListener('load', handleLoad);
    
        
        const searchWrap = $('.header__search');
        const searchField = searchWrap.find('.search-field');
        const closeSearch = searchWrap.find('.header__search-close');
        const searchTrigger = $('.header__search-trigger');
        const siteBody = $('body');
    
        searchTrigger.on('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          siteBody.addClass('search-is-visible');
          setTimeout(() => {
            searchField.focus();
          }, 100);
        });
    
        closeSearch.on('click', (e) => {
          e.stopPropagation();
          siteBody.removeClass('search-is-visible');
          setTimeout(() => {
            searchField.blur();
          }, 100);
        });
    
        searchWrap.on('click', (e) => {
          if (!$(e.target).is('.search-field')) {
            closeSearch.trigger('click');
          }
        });
    
        searchField.on('click', (e) => {
          e.stopPropagation();
        });
    
        searchField.attr({ placeholder: 'Type Keywords', autocomplete: 'off' });
    
        // Menu
        const menuToggle = $('.header__menu-toggle');
        menuToggle.on('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          menuToggle.toggleClass('is-clicked');
          siteBody.toggleClass('nav-wrap-is-visible');
        });
    
        $('.header__nav .has-children').children('a').on('click', function (e) {
          e.preventDefault();
          $(this)
            .toggleClass('sub-menu-is-open')
            .next('ul')
            .slideToggle(200)
            .end()
            .parent('.has-children')
            .siblings('.has-children')
            .children('a')
            .removeClass('sub-menu-is-open')
            .next('ul')
            .slideUp(200);
        });
     
        const containerBricks = document.querySelector('.masonry');
        if (containerBricks) {
          const msnry = new Masonry(containerBricks, {
            itemSelector: '.masonry__brick',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: true,
          });
    
          imagesLoaded(containerBricks).on('progress', () => {
            msnry.layout();
          });
        }
   
        const animateEl = $('.animate-this');
        const handleResize = () => {
          animateEl.removeClass('animate-this animated');
        };
        window.addEventListener('resize', handleResize);
    
        setTimeout(() => {
          animateEl.each((index, el) => {
            setTimeout(() => {
              $(el).addClass('animated');
            }, index * 200);
          });
        }, 300);
     
        const goTopButton = $('.go-top');
        const pxShow = 500;
        const handleScroll = () => {
          if ($(window).scrollTop() >= pxShow) {
            if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible');
          } else {
            goTopButton.removeClass('link-is-visible');
          }
        };
        $(window).on('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('load', handleLoad);
          window.removeEventListener('resize', handleResize);
          $(window).off('scroll', handleScroll);
        };
      }, []);
    
      const slickSettings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'linear',
      };

return(<>               
    <div id="top" class="s-wrap site-wrapper">
 
 <Sidebar></Sidebar>
<div class="s-content">

    <header class="listing-header">
    {authorName ? (
      <h1 class="h2">Author:  {authorName.toUpperCase()} </h1>
      ) 
        :(<h1 class="h2">Category:  {category.toUpperCase()} </h1>)}
    </header>
<div class="masonry-wrap">

    <div class="masonry">

        <div class="grid-sizer"></div>
        <article class="masonry__brick entry format-quote animate-this">
                    
                <div class="entry__thumb">
                    <blockquote>
                        <p>Practice makes man perfect</p>

                        <cite>Om gawde</cite>
                    </blockquote>
                </div>   

            </article>  
        {filteredBlogs.map((blog) => (<article class="masonry__brick entry format-standard animate-this">
                        
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/woodcraft-600.jpg" 
                                        srcset="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x" alt="" />
                            </a>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
    
                                <h2 class="entry__title">  <a href={`/author/${blog.author}/${blog.id}`} style={{color:"black" }}>{blog.title}</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <Link href={`/category/${blog.category}`}>Programming language</Link> 
                                        <Link href={`/category/${blog.category}`}>{blog.category}</Link>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a  href={`/${blog.author}/${blog.id}`}>{blog.date}</a>
                                    </span>
                                    <span class="entry__meta-date">
                                    <a href={`/author-search/${encodeURIComponent(blog.author)}`}>{blog.author}</a>
                                    </span>
                                </div>
                                
                            </div>
                            <div class="entry__excerpt">
                                <p>
                              {blog.excerpt} </p>
                            </div>
                        </div>
        
                    </article>) ) }
                    <article class="masonry__brick entry format-quote animate-this">
                    
                <div class="entry__thumb">
                    <blockquote>
                        <p>Where there is a will there is a way</p>

                        <cite>Rayid</cite>
                    </blockquote>
                </div>   

            </article>  
                    </div>
                    </div>
                    </div>
                    </div>
    </>);
}