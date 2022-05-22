import Hikes from './hike.js';

const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
    myHikes.showHikeList();
  });
myHikes.hikeList;
