import Feedback from "./feedback";
import styles from "./feedbackBlock.module.scss";

async function getStaticProps() {
  const response = await fetch(
    "https://my-json-server.typicode.com/Mypmansk/JSONServer/users"
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function FeedbackBlock() {
  const data = await getStaticProps();
  return (
    <ul className={styles.feedbackSection}>
      {data &&
        data.map(
          ({
            id,
            name,
            surname,
            profession,
            feedback,
            date_feedback,
            avatar_url,
          }) => (
            <li key={id}>
              <Feedback
                name={name}
                surname={surname}
                profession={profession}
                feedback={feedback}
                date_feedback={date_feedback}
                avatar_url={avatar_url}
              />
            </li>
          )
        )}
    </ul>
  );
}
