import React, { memo } from "react";
import styles from "../video_item/video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      // const {
      //   categoryId, // "23"
      //   channelId, // "UChbE5OZQ6dRHECsX0tEPEZQ"
      //   channelTitle, //"장삐쭈"
      //   defaultAudioLanguage, // "ko"
      //   description, // "스튜디오 장삐쭈↵장삐쭈, 정영준, 안류천, 포포, 윤성원, 허혜원, 정대준↵support : 원동우, 주현우"
      //   liveBroadcastContent, // "none"
      //   localized, // { description: "스튜디오 장삐쭈↵장삐쭈, 정영준, 안류천, 포포, 윤성원, 허혜원, 정대준↵support : 원동우, 주현우"
      //   //title: "[신병] 물자창고"}
      //   publishedAt, // "2020-12-31T08:00:04Z"
      //   tags, //["장삐쭈", "삐쭈", "ㅋㅋㅋ", "삐쮸", "장삐쮸", "병맛더빙", "더빙", "웃긴동영상", "꿀잼", "신병", "장삐쭈 단편선", "단편선", "창작애니", "볼만한 애니", "재밌는애니", "웃긴애니", "볼만한애니", "애니추천", "만화추천", "장비주", "신병 유격", "신병신작", "장삐쭈 군대", "군대만화", "박민석", "김상훈", "최일구", "임다혜", "차병호", "후임", "물류창고"]
      //   title, //"[신병] 물자창고"
      //   thumbnails,
      //   // {default: {height: 90, url: "https://i.ytimg.com/vi/yKGrcJw6WLs/default.jpg", width: 120},
      //   // {medium: {height: 180, url: ""https://i.ytimg.com/vi/yKGrcJw6WLs/hqdefault.jpg"", width: 320},
      //   // {high: {height: 360, url: "https://i.ytimg.com/vi/yKGrcJw6WLs/default.jpg", width: 480},
      //   // {standard: {height: 640, url: "https://i.ytimg.com/vi/yKGrcJw6WLs/default.jpg", width: 480},
      //   // {maxres: {height: 720, url: "https://i.ytimg.com/vi/yKGrcJw6WLs/default.jpg", width: 1280},
      // } = data.snippet;

      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="thumbImg"
          />
          <div className={styles.metadate}>
            <div className={styles.title}>{snippet.title}</div>
            <div className={styles.channel}>{snippet.channelTitle}</div>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
