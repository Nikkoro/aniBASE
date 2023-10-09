import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const Login = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      if (error) throw error;
      history.push("/");
    } catch (err) {
      throw err;
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="anime-page">
      <div className="wave"></div>
      <div className="container">
        <div>
          {!session ? (
            <>
              <div>
                <form style={{ color: "white", padding: "30px" }}>
                  <label
                    style={{ color: "white", padding: "30px" }}
                    htmlFor="name"
                  >
                    Email address
                  </label>
                  <input
                    name="name"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button onClick={Login}>Sign in</button>
                </form>
              </div>
            </>
          ) : (
            <>
              <p style={{ color: "red" }}>Welcome back {session.user.email}</p>
              <button onClick={Logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
