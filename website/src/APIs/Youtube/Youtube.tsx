function Youtube() {
  return (
    <>
      <iframe
        id="Watch"
        width="90%"
        height="352"
        src="https://www.youtube.com/embed/WF6q-tOTlv0?si=-Adr1dAgUCNf9k0q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation"

      ></iframe>
    </>
  );
}

export default Youtube;