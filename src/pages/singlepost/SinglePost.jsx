import './singlepost.css';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useFetch from '../../components/useFetch';
import {TrendingNews} from '../../components/trendingNews/TrendingNews';

export default function SinglePost() {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1);
  const navigate = useNavigate();
  //fetching single post data to the Dom
  const {data: post, err404, loading} = useFetch(' http://localhost:3008/posts/' + id);

  //Deleting single post data from the Dom and json-server
  async function deleteBtn() {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await fetch('http://localhost:3008/posts/' + post.id, {
        method: 'DELETE',
      }).then((res) => {
        navigate('/');
      });
    }
  }

  return (
    <div className="singlepost_container">
      <div className="latestNews">
        <TrendingNews />
      </div>
      <div className="singlepost">
        {loading && <div>Loading.....</div>}
        {Error && <div>{err404}</div>}
        {post && (
          <div className="singlepostwrapper">
            <img className="singlepostwrapperimage" src={post.image} />

            <h1 className="singleposttitle">{post.posttitle}</h1>
            <div className="singlepostinfo">
              <span className="authurname">{post.author}</span>
              <span className="singlepostdate"> {post.date}</span>
            </div>
            <p className="singleposttext">{post.postdesc}</p>
            <div>
              <div>
                <button className="deletepost, singlepostedit" onClick={deleteBtn}>
                  <i className="singleposticon fa-solid fa-trash-can" style={{color: 'red'}}></i>
                </button>

                <a className="deletepost singlepostedit" href={`write/id=${id}`}>
                  <i
                    className="singleposticon fa-solid fa-pen-to-square"
                    style={{color: 'blue'}}></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// i want redirect to the homepage after deleting a post but not working, just remain on the page even after clicking the delete button, only know post is deleted when you refresh the page
