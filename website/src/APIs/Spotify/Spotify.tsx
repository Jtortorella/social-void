function Spotify() {
  return (
      <iframe
        id="Listen"
        data-testid="embed-iframe"
        style={{borderRadius:12}}
        src="https://open.spotify.com/embed/track/4sRaw2KslWobX9OkNKM7TX?utm_source=generator&theme=0"
        width="92%"
        height="352"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
  );
}

export default Spotify;
