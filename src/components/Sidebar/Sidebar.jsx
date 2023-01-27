import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getGenres } from '../../utils/fetch';

import './sidebar.css';

const Sidebar = () => {
  const [genres, setGenres] = useState();

  useEffect(() => {
    fetch(getGenres)
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, []);

  const genreList = genres?.genres?.map((genre, idx) => (
    <NavLink to={`/genre/${genre?.id}`} className='sidebar__genre' key={idx}>
      {genre?.name}
    </NavLink>
  ));

  return <div className='sidebar'>{genreList}</div>;
};

export default Sidebar;
