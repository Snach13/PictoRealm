import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Image from "../components/Image";

import { getRandomImages } from "../unsplash";
import Popup from "../components/Popup";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [popupArry, setPopupArry] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getRandomImages()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(
          data.map((image) => ({
            id: image.id,
            imageUrl: image.urls.regular,
            downloadUrl: image.urls.full,
            username: image.user.username,
            userImageUrl: image.user.profile_image.medium,
            profileUrl: image.user.links.html,
          }))
        );
      })
      .catch((error) => alert(error));
  }, []);

  const handlePopup = (event) => {
    let id = event?.target?.getAttribute("id");
    let popupPhotos = images?.filter((photo) => photo?.id === id);
    setPopupArry(popupPhotos[0]);
    setToggle(true);
  };

  const handleHide = () => {
    setToggle(false);
  };

  return (
    <>
      <Hero />

      <div className="wrapper">
        <div className="container">
          <div className="images__container">
            {images.map((image) => (
              <Image
                key={image.imageUrl}
                data={image}
                handlePopup={handlePopup}
              />
            ))}
          </div>
        </div>

        {toggle && (
          <div onClick={handleHide} className="popudp">
            <Popup handlePopup={popupArry} />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
