import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

import { PitchCard } from "../../components/Cards/Cards";
import { SearchField } from "../../components/FormView/Inputs";
import { ErrorToast } from "../../components/Errors/Error";
import Preloader from "../../components/PreLoader/Preloader";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";

// css
import "./Pitches.css";

const Pitches = () => {
  // states
  const [pitches, setPitches] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [pagedPitches, setPagedPitches] = useState(null);

  // other hooks
  const { getAllPitches } = useAuthContext();

  useEffect(() => {
    getAllPitches()
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setPitches(res.payload);
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.Error || err);
      });
  }, [getAllPitches]);

  return (
    <div className='pitches-page'>
      <SearchField />
      <div className='pitches'>
        <h2>Explore pitches</h2>
        {error && <ErrorToast>{error}</ErrorToast>}
        {loading && <Preloader size={50} border={5} color='#d63e39' />}
        {pitches && (
          <>
            <div className='pitch-card-grid'>
              {pitches.map((pitch) => {
                const {
                  author: { avatar_url, fullname },
                  like_count,
                  title,
                  _id,
                } = pitch;
                return (
                  <PitchCard
                    pitchData={{ avatar_url, fullname, like_count, title, _id }}
                    key={_id}
                  />
                );
              })}
            </div>
            {pitches.length > 20 && <Pagination />}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pitches;
