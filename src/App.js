import Banner from './components/banner'
import { useEffect, useState } from 'react'
import { bannerList } from './utils/courses'


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {

  const [banner, setBanner] = useState(bannerList[getRandomInt(0, bannerList.length)])
  useEffect(() => {
    const interval = setInterval(() => {
      setBanner(bannerList[getRandomInt(0, bannerList.length)])
    }, 60000);
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <Banner
        copy={banner.copy}
        url={banner.url}
      />
    </>
  );
}

export default App;
