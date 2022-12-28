import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Home(props) {
    const { setLogin } = props.setLogin;
    const { login } = props.login;

    const [postdata, setPostData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:5000/posts").then(res => {
                res.json().then((info) => {
                    setPostData(info.data);
                })
            })
        }
        fetchData();
    }, [])

    return (
        <>
            <div>
                <div>
                    <img src="" alt="Logo" />
                </div>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/createpost"}>Create</Link>
                    <Link to={"/"} onClick={() => { setLogin(false) }}>Logout</Link>
                </div>
            </div>
            <div>
                {postdata !== undefined && postdata.length !== 0 &&
                    postdata.map((element, index) => {
                        return (

                            <div key={index}>
                                <h3>{element.title}</h3>
                                <img src="" alt={element.image} />
                                <p>{element.description}</p>
                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Home;