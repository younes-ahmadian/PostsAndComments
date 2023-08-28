import { useState } from "react";
import PostContent from "../../components/Post/IPostContent";
import Post from "../../components/Post";
import useFetchData from "../../hooks/useFetchData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import styles from "./Posts.module.scss";

const App = () => {
  const [lastElement, setLastElement] = useState<Element | null>(null);
  const [numberOfPostsToShow, setNumberOfPostsToShow] = useState<number>(10);

  const { isLoading, data } = useFetchData<PostContent[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //implementing intersection observer
  useIntersectionObserver(lastElement, setNumberOfPostsToShow);

  return (
    <section className={styles.postsContainer}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.postsList}>
          <ul>
            <h2>List of the Posts</h2>
            {data?.slice(0, numberOfPostsToShow).map((post) => (
              <Post post={post} setLastElement={setLastElement} key={post.id} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
export default App;
