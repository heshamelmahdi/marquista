export const finalVideos = [
  "https://storage.googleapis.com/marquista-videos/ahmed-ali1.mp4",
  "https://storage.googleapis.com/marquista-videos/batates1.mp4",
  "https://storage.googleapis.com/marquista-videos/batates2.mp4",
  "https://storage.googleapis.com/marquista-videos/donuts1.mp4",
  "https://storage.googleapis.com/marquista-videos/exile1.mp4",
  "https://storage.googleapis.com/marquista-videos/paris1.mp4",
  "https://storage.googleapis.com/marquista-videos/reel1.mp4",
  "https://storage.googleapis.com/marquista-videos/sobya1.mp4",
];

export const getTwoRandomVideos = () => {
  const randomVideos = finalVideos.sort(() => Math.random() - 0.5);
  return [randomVideos[0], randomVideos[1]];
};

export const generateVideoGroups = (numGroups = 4, videosPerGroup = 6) => {
  const shuffledVideos = [...finalVideos].sort(() => Math.random() - 0.5); // Shuffle the original array
  const result: string[][] = Array.from({ length: numGroups }, () => []); // Create empty groups

  let currentIndex = 0;

  // Distribute videos into groups
  for (let i = 0; i < numGroups * videosPerGroup; i++) {
    result[i % numGroups].push(shuffledVideos[currentIndex]);
    currentIndex = (currentIndex + 1) % finalVideos.length;
  }

  return result;
};
