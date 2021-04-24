import React, { useEffect, useState } from "react";
import { useAuthContext } from "./context/AuthContext";

import { Switch } from "react-router";
import { HomeNavbar } from "./components/Navs/Navs";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./views/HomePage/HomePage";
import PitchPage from "./views/PitchPage/PitchPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import Preloader from "./components/PreLoader/Preloader";
import Pitches from "./views/Pitches/Pitches";

const PrivatePages = () => {
  // states
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // other hooks
  const { getUserProfile } = useAuthContext();

  useEffect(() => {
    const unsub = getUserProfile()
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setProfile(res.payload);
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.Error || err);
      });
    return unsub;
  }, [getUserProfile]);

  return (
    <div className="user-pages">
      {loading && <Preloader size={50} border={5} color="#d63e39" />}

      {error && <p>Page couldn't load because it {error.toLowerCase()}</p>}
      {profile && (
        <>
          <HomeNavbar payload={profile} />
          <main>
            <Switch>
              <PrivateRoute
                exact
                path="/user"
                component={() => <HomePage payload={profile} />}
              />
              <PrivateRoute exact path="/user/pitches" component={Pitches} />

              <PrivateRoute path="/user/pitch/:pitchId" component={PitchPage} />
              <PrivateRoute
                path="/user/profile/:userId"
                component={ProfilePage}
              />
            </Switch>
          </main>
        </>
      )}
    </div>
  );
};

export default PrivatePages;
