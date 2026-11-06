import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY } from "../../data";
import { value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState();

  const fetchData = async () => {
    const relatedVideos_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideos_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/view/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
      <div className="side-video-list">
        <img src={thumbnail2} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail3} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail4} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail5} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail6} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail7} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail8} alt="" />
        <div className="vid-info">
          <h4>Best channel that helps you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
