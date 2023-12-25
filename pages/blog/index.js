// pages/blog.js
import React from 'react';
import BlogPost from '../../components/BlogPost.js/BlogPost';

const Blog = () => {
    const blogPosts = [
        { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
        { title: 'Thirt Blog Post', content: 'This is the content of the second blog post.' },
        { title: 'Fourth Blog Post', content: 'This is the content of the second blog post.' },
        { title: 'Fith Blog Post', content: 'This is the content of the second blog post.' },
        { title: 'Six Blog Post', content: 'This is the content of the second blog post.' },
        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
            <div className='grid grid-cols-4 gap-4'>

                {blogPosts.map((post, index) => (
                    <BlogPost key={index} title={post.title} content={post.content} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
