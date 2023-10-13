import {useEffect, useState} from 'react';
import './write.css';
import {useNavigate} from 'react-router-dom';

export default function Write() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode
  const [formValues, setFormValues] = useState({
    image: '',
    posttitle: '',
    postdesc: '',
    date: '',
    author: '',
    publish_at: '',
  });

  // Extracting the ID from the URL
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1);

  useEffect(() => {
    // Check if an ID is present in the URL, indicating editing mode
    if (id) {
      setIsEditing(true);
      // Fetch the data for the post to edit and populate the form fields
      fetch(`http://localhost:3008/posts/${id}`)
        .then((response) => response.json())
        .then((postData) => {
          setFormValues({
            image: postData.image,
            posttitle: postData.posttitle,
            postdesc: postData.postdesc,
            date: postData.date,
            author: postData.author,
            publish_at: postData.publish_at,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else setIsEditing(false);
  }, [id]);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Publishing or editing a post to the JSON server
  const formSubmit = async (e) => {
    e.preventDefault();

    const post = {
      date: formValues.date,
      image: formValues.image,
      posttitle: formValues.posttitle,
      postdesc: formValues.postdesc,
      author: formValues.author,
      publish_at: formValues.publish_at,
    };

    if (isEditing == true) {
      // Handle the PUT request for editing here
      const response = await fetch(`http://localhost:3008/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post),
      });
      if (!response || !response.ok) {
        throw new Error(
          'Sorry, we cannot process your request at the moment. Please try again later.'
        );
      }
    } else {
      // Handle the POST request for creating a new post here
      const response = await fetch('http://localhost:3008/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post),
      });
      if (!response || !response.ok) {
        throw new Error(
          'Sorry, we cannot process your request at the moment. Please try again later.'
        );
      }
    }
    // Redirect to a different page or do something else after the form submission
    navigate('/'); // Change the path as needed
  };

  // Render the form for posting or editing
  return (
    <div className="write">
      <form className="writeform" onSubmit={formSubmit}>
        {/* Date input */}
        <div>
          <input
            type="text"
            name="date"
            value={formValues.date}
            onChange={handleChange}
            placeholder="Date"
          />
        </div>

        {/* Image upload */}
        {/* <div className="image_container">
          {formValues.image && (
            <div>
              <img
                className="writeimage"
                alt="postimage"
                src={URL.createObjectURL(formValues.image)}
              />
            </div>
          )}
        </div> */}

        <div style={{padding: '0 17rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {/* <div>
            <label htmlFor="fileinput">
              <i className="writeicon fa-solid fa-plus"></i>
            </label>
            <input
              id="fileinput"
              type="file"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  image: e.target.files[0],
                });
              }}
              style={{display: 'none'}}
            />
          </div> */}
          <p>OR</p>
          <div>
            <input
              type="text"
              name="image"
              value={formValues.image}
              onChange={handleChange}
              placeholder="Paste image url/link"
            />
          </div>
        </div>

        {/* Input for image upload */}
        <div className="writeformgroup">
          <input
            type="text"
            name="posttitle"
            value={formValues.posttitle}
            onChange={handleChange}
            placeholder="Post Title"
            autoFocus
          />

          {/* Text area for post description */}
          <textarea
            name="postdesc"
            value={formValues.postdesc}
            onChange={handleChange}
            placeholder="Post Description"
            className="writeinput writetext"></textarea>
        </div>

        <div className="creator">
          <label>CreatedBy: </label>
          <input
            type="text"
            name="author"
            value={formValues.author}
            onChange={handleChange}
            placeholder="author name"
          />
        </div>
        <div className="creator">
          <label>Created At: </label>
          <input
            type="text"
            name="publish_at"
            value={formValues.publish_at}
            placeholder="time created"
            onChange={handleChange}
          />
        </div>

        <button className="writesubmit">{isEditing ? 'Save' : 'Publish'}</button>
      </form>
    </div>
  );
}
