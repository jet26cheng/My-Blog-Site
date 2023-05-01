export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://www.wapititravel.com/blog/wp-content/uploads/2019/05/diamond_Gwangandaegyo_bridge_busan_night-1024x683.jpg.webp"></img>
      </div>
      <div className="texts">
        <h2>My First Blog Post</h2>
        <p className="info">
          <a className="author"> Jeddy Cheng </a>
          <time>2023-04-20 19:17</time>
        </p>
        <p className="summary">
          Busan 부산 is located at the southwestern tip of the country. The city
          is sometimes referred to in English as ‘Pusan’. This is mostly in
          older references and tourist documents, which you may see around town.
          It’s a massive Korean city with a small-town feel that captures the
          imagination of many a newcomer to the region.
        </p>
      </div>
    </div>
  );
}
