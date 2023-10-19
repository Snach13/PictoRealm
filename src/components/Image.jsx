import { Button, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../css/Image.css";

const Image = ({ data }) => {
  return (
    <div className="image">
      <div className="image__header">
        <Button
          variant="contained"
          size="small"
          disableElevation
          className="image__button"
        >
          <FavoriteIcon fontSize="small" />
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button
          variant="contained"
          size="small"
          disableElevation
          className="image__button"
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>

      <img src={data.imageUrl} alt="" className="image__img" />

      <div className="image__footer">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="image__footerLeft"
        >
          <Avatar src={data.userImageUrl}>{data.username[0]}</Avatar>
          <h4 className="image__footerLeftName">{data.username}</h4>
        </a>
        <Button
          variant="contained"
          size="small"
          disableElevation
          className="image__button"
          title="Download Photo"
        >
          <ArrowDownwardIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default Image;
