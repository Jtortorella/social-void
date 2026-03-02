function Spotify() {
  return (
      <iframe
        data-testid="embed-iframe"
        style={{borderRadius:12, border: 0}}
        src="https://open.spotify.com/embed/album/5eahtQWqkF3Uypcdror7lj?utm_source=generator&theme=0" 
        width="100%"
        height="400"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
  );
}

export default Spotify;
