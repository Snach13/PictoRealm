import "../css/Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/" className="categories__item categories__item--active">
        Editorial
      </Link>
      <Link to="/" className="categories__item">
        Following
      </Link>

      <div className="categories__breaker"></div>

      <div className="categories__list">
        <Link to="/search/wallaper" className="categories__item">
          Wallpaper
        </Link>
        <Link to="/search/nature" className="categories__item">
          Nature
        </Link>
        <Link to="/search/people" className="categories__item">
          People
        </Link>
        <Link to="/search/architecture" className="categories__item">
          Architecture
        </Link>
        <Link to="/search/Events" className="categories__item">
          Events
        </Link>
        <Link to="/search/Business" className="categories__item">
          Busines
        </Link>
        <Link to="/search/Experimental" className="categories__item">
          Experimental
        </Link>
        <Link to="/search/fashion" className="categories__item">
          Fashion
        </Link>
        <Link to="/search/film" className="categories__item">
          Film
        </Link>
        <Link to="/search/health" className="categories__item">
          Health
        </Link>
        <Link to="/search/technology" className="categories__item">
          Technology
        </Link>
        <Link to="/search/travel" className="categories__item">
          Travel
        </Link>
        <Link to="/search/textures" className="categories__item">
          Textures{" "}
        </Link>
        <Link to="/search/animals" className="categories__item">
          Animals
        </Link>
        <Link to="/search/food" className="categories__item">
          Food{" "}
        </Link>
        <Link to="/search/athletics" className="categories__item">
          Athletics
        </Link>
        <Link to="/search/spirituality" className="categories__item">
          Spirituality
        </Link>
        <Link to="/search/arts" className="categories__item">
          Arts
        </Link>
        <Link to="/search/history" className="categories__item">
          History
        </Link>
      </div>
    </div>
  );
};

export default Categories;
