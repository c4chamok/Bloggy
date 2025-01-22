export default async function BlogDetails({ params }) {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  