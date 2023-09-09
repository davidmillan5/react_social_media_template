import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function Search() {
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     var test = {};
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setPosts(json));
//   }, []);

  async function search() {
    console.log("Search for " + searchInput);

    // Get Request using search to get the Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    var postId = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + searchInput
    )
      .then((response) => response.json())
      .then((data) => {
        //return data.artists.items[0].id;
        console.log("data");
        console.log(data);
        setPost(data);
      });
  }

  return (
    <>
      <Container className="my-5 mx-auto px-5">
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search a post"
            type="input"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={search} className="btn-dark">
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
        <Card key={post.id} className="m-5 p-4 text-center">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="my-2">
                    {post.description}
                  </Card.Subtitle>
                </Card.Body>
              </Card>

          {/* {posts.map((post, i) => {
            console.log(post);
            return (
              <Card key={post.id} className="m-5 p-4 text-center">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="my-2">
                    {post.description}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })} */}
        </Row>
      </Container>
    </>
  );
}

export default Search;
