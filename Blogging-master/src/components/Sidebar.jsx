import { Link } from 'react-router-dom';


export default function Sidebar(){



return(<>
        <header class="s-header">

            <div class="header__top">
                <div class="header__logo">
                    <a class="site-logo" href="/">
                        
                    </a>
                </div>

                <div class="header__search">
                <div id="respond" style={{width:"400px",marginLeft:"38%"}}>
            
            <h3 class="h2">Fill up your blog here !</h3>

            <form name="contactForm" id="contactForm" method="post" action="" autocomplete="off">
                <fieldset>

                    <div class="form-field">
                        <input name="cName" id="cName" class="full-width" placeholder="Author Name" value="" type="text"/>
                    </div>

                    <div class="form-field">
                        <input name="cEmail" id="cEmail" class="full-width" placeholder="Category" value="" type="text"/>
                    </div>

                    <div class="form-field">
                        <input name="cWebsite" id="cWebsite" class="full-width" placeholder="Title" value="" type="text"/>
                    </div>

                    <div class="message form-field" style={{height:"90px"}}>
                        <textarea name="cMessage" id="cMessage" class="full-width" placeholder="Introduction" style={{fontSize:"18px"}}></textarea>
                    </div>
                    <div class="form-field"  >
                        <input name="cWebsite" id="cWebsite" class="full-width" placeholder="Sub-Topic Heading" value="" type="text"/>
                    </div>
                    <div class="message form-field">
                        <textarea name="cMessage" id="cMessage" class="full-width" placeholder="Sub-Topic Body" style={{fontSize:"18px"}}></textarea>
                    </div>
                    <input name="submit" id="submit" class="btn btn--primary btn-wide btn--large full-width" value="Post" type="submit"/>

                </fieldset>
            </form>  

        </div>
        
                    <a href="#0" title="Close Search" class="header__search-close">Close</a>
        
                </div>   
        
           
               
                <a href="#0" class="header__menu-toggle"><span>Menu</span></a>

            </div>  

            <nav class="header__nav-wrap">

                <ul class="header__nav">
                    <li class="current"><a href="/" title="">Home</a></li>
                    <li class="has-children">
                        <a href="#0" title="">Categories</a>
                        <ul class="sub-menu">
                         
                        <li><Link to="/category/tech">Tech</Link></li>
        <li><Link to="/category/health">Health</Link></li>
        <li><Link to="/category/News">News</Link></li>
        <li><Link to="/category/Travel">Travel</Link></li>
        <li><Link to="/category/LifeStyle">LifeStyle</Link></li>
                        </ul>
                    </li>
                   
                    <li><a href="/resume" title="">My Resume</a></li>
                    <li><a href="page-about.html" title="">About</a></li>
                    <li><a href="page-contact.html" title="">Contact</a></li>
                </ul> 

                <ul class="header__social">
                    <li class="ss-facebook">
                        <a href="https://facebook.com/">
                            <span class="screen-reader-text">Facebook</span>
                        </a>
                    </li>
                    <li class="ss-twitter">
                        <a href="#0">
                            <span class="screen-reader-text">Twitter</span>
                        </a>
                    </li>
                    <li class="ss-dribbble">
                        <a href="#0">
                            <span class="screen-reader-text">Dribbble</span>
                        </a>
                    </li>
                    <li class="ss-pinterest">
                        <a href="#0">
                            <span class="screen-reader-text">Behance</span>
                        </a>
                    </li>
                </ul>

            </nav> 

            

        </header> 
</>);


}