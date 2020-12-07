import React from 'react';
import PropTypes from 'prop-types';
import '../../dist/style.css';

const SimilarListItem = ({ game, transformStr }) => (
  <div className="similarItem" style={{ transform: transformStr, transition: "transform 0.3s ease-in-out", display: "inline-block", maxHeight: "255px", height: "100%", width: "20%", maxWidth: "200px", overflow: "hidden" }}>
    <img src={game.imgurl} style={{ width: "100%", maxWidth: "200px", maxHeight: "200px" }} />
    <h4 style={{ margin: "5px auto" }}>${game.price}</h4>
    <p style={{ margin: "5px auto", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "80%", padding: "0 10%" }}>{game.item}</p>
  </div>
);

SimilarListItem.propTypes = {
  game: PropTypes.object.isRequired,
  transformStr: PropTypes.string.isRequired
}

export default SimilarListItem;