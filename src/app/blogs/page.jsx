import Link from "next/link";


const BlogsPage = () => {
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
    return (
        <div>
           <h2 className="text-3xl font-bold mb-4">Blogs</h2> 
           {
            blogs.map(blog => <div key={blog.id}>
                <h3 className="text-4xlfont-bold mb-2">{blog.title}</h3>
                <Link href="/">Show details</Link>
            </div>)
           }
        </div>
    );
};

export default BlogsPage ;