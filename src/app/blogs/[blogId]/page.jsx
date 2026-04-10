 //create dynamic route in Next.js
 const blogs =  [
  {
    "id": 1,
    "title": "Getting Started with React",
    "author": "John Doe",
    "date": "2026-04-01",
    "category": "Web Development",
    "content": "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently.",
    "tags": ["React", "JavaScript", "Frontend"],
    "readTime": "5 min"
  },
  {
    "id": 2,
    "title": "Understanding JavaScript Closures",
    "author": "Jane Smith",
    "date": "2026-03-28",
    "category": "Programming",
    "content": "Closures are a fundamental concept in JavaScript where a function retains access to its lexical scope even when executed outside that scope.",
    "tags": ["JavaScript", "Closures", "Functions"],
    "readTime": "7 min"
  },
  {
    "id": 3,
    "title": "Top 5 CSS Tricks for Beginners",
    "author": "Alex Johnson",
    "date": "2026-03-25",
    "category": "Design",
    "content": "CSS can be fun and powerful. Learn some useful tricks like flexbox centering, hover effects, and responsive layouts to improve your designs.",
    "tags": ["CSS", "Design", "Frontend"],
    "readTime": "4 min"
  },
  {
    "id": 4,
    "title": "Introduction to Data Structures",
    "author": "Emily Davis",
    "date": "2026-03-20",
    "category": "Computer Science",
    "content": "Data structures are essential for organizing and storing data efficiently. Common types include arrays, linked lists, stacks, and queues.",
    "tags": ["Data Structures", "Algorithms", "CS"],
    "readTime": "6 min"
  }
]
const BlogDetailsPage = async({ params }) => {
    const { blogId } = await params
    const blog = blogs.find(blog => blog.id === parseInt(blogId))
    console.log('show me params', blog)
    return (

        <div>
            <h4 className="text-3xl">
                Blog detail coming soon
            </h4>
            {
                blog && <div>
                    <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailsPage;