import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => {
            setPage(page + 8);
          }}
        >
          {/* if there is no video then user cann't enter to quiz sections (video.noq>0) */}
          {videos.map((video) =>
            video.noq > 0 ? (
              <NavLink to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </NavLink>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found</div>}
      {!error && videos.length === 0 && <div>There was an error!</div>}
      {loading && <div>Loading...!</div>}
    </div>
  );
}
