import React from "react";
import styles from "../../styles/Home.module.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { Layout } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import Player from "../../components/musicApp/Player";

import { useState, useEffect } from "react";
const { Content } = Layout;

const music = () => {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "../../public/music/images/song-1.jpg",
      src: "../../public/music/songs/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "../../public/music/images/song-2.jpg",
      src: "../../public/music/songs/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "../../public/music/images/song-3.jpg",
      src: "../../public/music/songs/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "../../public/music/images/song-4.jpg",
      src: ".../../public/music/songs/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <Breadcrumb />
        <Content className={styles.counter}>
          <Player
            songs={songs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
          />
        </Content>
      </div>
    </div>
  );
};

export default music;
