const PostCard = ({ title, desc, link, tags }) => {
  return (
    <div className="card  bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <div className="flex gap-2">
            {tags.map((tag , i) => (
              <tag key={i} className="badge badge-primary"> {tag} </tag>
            ))}
          </div>
        <p> {desc} </p>
        <div className="card-actions justify-end">
         
          <a className="btn btn-sm rounded-full btn-primary" href={link}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
