

function CreatePost() {


    return (
        <div className="create">
            <h3>Create Post</h3>
            <form className="create-form">
                <input type="text" placeholder="title" className="title" /><br />

                <label htmlFor="image" className="pick-btn">Pick Image</label> <br />
                <input type={"file"} name="image" />
                <p>No file Chosen</p>

                <label htmlFor="description" className="desc">Description</label> <br />
                <input type="text" name="description" className="desc-box" /><br />

                <button onClick={() => { alert("Post created successfully") }} className="btn">Create</button>
            </form>
        </div>
    )
}

export default CreatePost;