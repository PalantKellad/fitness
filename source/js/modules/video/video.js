function findVideos() {
  const videos = document.querySelectorAll('[data-video]');

  if (videos || videos.length > 0) {
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
}

function setupVideo(video) {
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__button');
  const id = parseLinkURL(link);

  if (link) {
    video.addEventListener('click', () => {
      const iframe = createIframe(id);

      link.remove();
      if (button) {
        button.remove();
      }
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }
}

function parseLinkURL(link) {
  if (link) {
    const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
    const url = link.href;
    const match = url.match(regexp);
    return match[1];
  } else {
    return 'dQw4w9WgXcQ';
  }
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__iframe');

  return iframe;
}

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {findVideos};
