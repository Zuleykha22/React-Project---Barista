import React from 'react'
import '../BlogSidebar/BlogSidebar.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';

function BlogSidebar() {
    return (
        <div>
            <div className="blog-sidebar">
                <div className="blogs">
                    <div className="blog">
                        <div className="blog-img">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/blog-standard-img-1.jpg" alt="" />
                            <div className="blog-img-overlay"></div>
                        </div>
                        <div className="blog-details">
                            <h2>EXPAND YOUR MIND, CHANGE EVERYTHING</h2>
                            <h5>
                                <span>by Jane Doe </span>
                                <span className='blog-category'>Enjoyment</span>
                                <span className='blog-date'>30.01.2017</span>
                            </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique at sit amet libero. In aliquam in nisl nec sollicitudin. Sed consectetur volutpat sem vitae facilisis. Fusce tristique, magna ornare facilisis sagittis, tortor mi auctor libero, non pharetra sem ex eu felis. Aenean egestas ut purus nec vehicula. Morbi eu nisi erat. Nam mattis id lectus sit amet mattis. Suspendisse eget tristique neque...</p>
                            <div className="features">
                                <h5>Features</h5>
                                <div className="share-section">
                                    <h5>Share:  </h5>
                                    <FacebookIcon className='blog-icon' />
                                    <InstagramIcon className='blog-icon' />
                                    <TwitterIcon className='blog-icon' />
                                    <LinkedInIcon className='blog-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="sidebar-top">
                        <h3 className='sidebar-top-text'>ABOUT</h3>
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/blog-single-sidearea.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio id quis tempora.</p>
                    </div>
                    <div className="recents-posts">
                        <h3 className='sidebar-top-text'>RECENT POST</h3>
                        <div className="recent-post">
                            <div className="recent-post-img">
                                <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/02/home-1-blog-f-img-1.jpg" alt="" />
                                <div className="overlay-recent-post"></div>
                            </div>
                            <div className="recent-post-details">
                                <h5>MAKE IT SIMPLE</h5>
                                <h6>23.10.2022</h6>
                            </div>
                        </div>

                    </div>

                    <div className="categories">
                        <h3 className='sidebar-top-text'>CATEGORIES</h3>
                        <ul>
                            <li><ArrowRightIcon />  Competition</li>
                            <li><ArrowRightIcon />  Delicious</li>
                            <li><ArrowRightIcon />  Enjoyment</li>
                            <li><ArrowRightIcon />  Life</li>
                            <li><ArrowRightIcon />  Lifestyle</li>
                            <li><ArrowRightIcon />  Media</li>
                        </ul>
                    </div>

                    <div className="social-media-links">
                        <h3 className='sidebar-top-text'>ABOUT</h3>
                        <div className="accounts">
                            <InstagramIcon className='blog-icon' />
                            <TwitterIcon className='blog-icon' />
                            <FacebookIcon className='blog-icon' />
                            <LinkedInIcon className='blog-icon' />
                        </div>

                    </div>

                    <div className="tags">
                        <h3 className='sidebar-top-text'>TAGS</h3>
                        <div className="tag-names">
                            <h5 className='tag'>Artists</h5>
                            <h5 className='tag'>Exhibitions</h5>
                            <h5 className='tag'>Features</h5>
                            <h5 className='tag'>Jobs</h5>
                            <h5 className='tag'>Lectures</h5>
                        </div>
                    </div>

                    <div className="search">
                        <h3 className='sidebar-top-text'>ABOUT</h3>
                        <div className="search-box">
                            <input type="text" placeholder='Type here...' />
                            <div className="search-icon-box"><SearchIcon /></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogSidebar