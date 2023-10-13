import './post.css';
import useFetch from '../../components/useFetch';

export default function Post() {
  const {data: posts, err404, loading} = useFetch(' http://localhost:3008/posts');

  return (
    <div className="post_content">
      {posts &&
        posts.map(({id, image, posttitle, postdate, postdesc, author, date, publish_at}) => {
          return (
            <div key={id} className="post">
              <div className="postimage">
                <img src={image} alt="imagedescription" />
              </div>
              <div className="postinfo">
                {/* <div className="postcats">
                  <span className="postcast">Music</span>
                  <span className="postcast">Life</span>
                  <span className="postcast">Events</span>
                </div> */}
                <span className="posttitle">
                  <a href={`post/id=${id}`}>{posttitle}</a>
                </span>
                <br />
              </div>
              <div className="author">
                <span className="postauthor">CreatedBy: {author}</span>
                <div>
                  <span className="postdate"> {date}</span>
                  <span className="at"> @ </span>
                  <span className="postdate"> {publish_at}</span>
                </div>
              </div>

              <p className="postdesc">
                {postdesc.slice(0, 150)}...
                <span>
                  <a href={`post/id=${id}`}>Continue reading</a>
                </span>
              </p>
            </div>
          );
        })}
    </div>
  );
}
