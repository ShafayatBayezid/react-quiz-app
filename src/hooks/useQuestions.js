import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      //database works
      const db = getDatabase();
      const QuizRef = ref(db, "quiz/" + videoID + "/questions");
      const QuizQuery = query(QuizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //request firebase
        const snapshot = await get(QuizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return { loading, error, questions };
}
