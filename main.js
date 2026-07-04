const contact = {
  telegram: "https://t.me/MN_videomaker",
  label: "Telegram @MN_videomaker",
};

const portfolioItems = [
  {
    title: "Огляд годинника",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Блогер", "Продукт", "Shorts"],
    url: "https://youtube.com/shorts/VTaHJNUSpLc",
  },
  {
    title: "Машина edit",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Авто", "Динаміка", "Shorts"],
    url: "https://youtube.com/shorts/JBBnTnvMLZ8",
  },
  {
    title: "Маркетинг",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Блогер", "Продажі", "Shorts"],
    url: "https://youtube.com/shorts/HRXhMVkj5jY",
  },
  {
    title: "ШІ",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["ШІ", "Технології", "Shorts"],
    url: "https://www.youtube.com/shorts/itocDkVfkHo",
  },
  {
    title: "Футбол",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Футбол", "Спорт", "Shorts"],
    url: "https://www.youtube.com/shorts/02HpuCf0fGY",
  },
  {
    title: "Відома співачка",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Співачка", "Динаміка", "Shorts"],
    url: "https://www.youtube.com/shorts/kktz3EzlX_g",
    preview: false,
  },
  {
    title: "Експертне відео",
    category: "Вертикальні відео",
    filter: "vertical",
    shape: "vertical",
    format: "9:16",
    tags: ["Експерт", "Освіта", "Shorts"],
    url: "https://youtube.com/shorts/V1FklajQqJk",
  },
  {
    title: "HiPhi Z",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Авто", "Огляд", "B-roll"],
    url: "https://www.youtube.com/watch?v=92CFPcKBznM",
  },
  {
    title: "Кліп",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Кліп", "Vimeo", "Монтаж"],
    url: "https://vimeo.com/584926462",
  },
  {
    title: "Режим бога",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["YouTube", "Монтаж", "Динаміка"],
    url: "https://youtu.be/d2qNQRoZ7hk",
  },
  {
    title: "Монстри",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["YouTube", "Сюжет", "Монтаж"],
    url: "https://youtu.be/qlOIsJdO5TE",
  },
  {
    title: "FORD RANGER",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Авто", "Огляд", "YouTube"],
    url: "https://www.youtube.com/watch?v=ftGMGyDcEvA",
  },
  {
    title: "Нерухомість",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Нерухомість", "Преміум", "Clean"],
    url: "https://youtu.be/9wJvrernhkw?list=PLwL5C5aCIGqLG2xGdAiOQ5ujW39qfB_uk",
  },
  {
    title: "Інтерв'ю",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Інтерв'ю", "Сюжет", "Звук"],
    url: "https://youtu.be/WhFjHb-2NIU",
  },
  {
    title: "Крипта в масці",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Крипта", "Графіка", "Темп"],
    url: "https://www.youtube.com/watch?v=kywhTJ3DSU4",
  },
  {
    title: "ANTMINER S21 188",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Крипта", "Огляд", "YouTube"],
    url: "https://youtu.be/OPR9cuZ1Ysk",
  },
  {
    title: "Спарта",
    category: "Горизонтальні відео",
    filter: "horizontal",
    shape: "horizontal",
    format: "16:9",
    tags: ["Історія", "Сюжет", "YouTube"],
    url: "https://www.youtube.com/watch?v=P1M6u7uXZJQ",
  },
];

const grid = document.querySelector("[data-portfolio-grid]");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const contactLink = document.querySelector("[data-contact-link]");

if (contactLink) {
  contactLink.href = contact.telegram;
  contactLink.textContent = contact.label;
}

function getYouTubeId(url) {
  if (!url) {
    return null;
  }

  const patterns = [
    /youtube\.com\/shorts\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&/]+)/,
    /youtu\.be\/([^?&/]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

function getVimeoId(url) {
  if (!url) {
    return null;
  }

  const patterns = [
    /vimeo\.com\/manage\/videos\/(\d+)/,
    /vimeo\.com\/(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

function createYouTubePreviewPlayer(videoId, title) {
  const iframe = document.createElement("iframe");
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videoId,
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    disablekb: "1",
    fs: "0",
  });

  iframe.className = "work-preview-player";
  iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  iframe.title = `${title} preview`;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture";
  iframe.loading = "lazy";
  iframe.tabIndex = -1;

  return iframe;
}

function createVimeoPreviewPlayer(videoId, title) {
  const iframe = document.createElement("iframe");
  const params = new URLSearchParams({
    autoplay: "1",
    muted: "1",
    loop: "1",
    background: "1",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  iframe.className = "work-preview-player";
  iframe.src = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
  iframe.title = `${title} preview`;
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  iframe.loading = "lazy";
  iframe.tabIndex = -1;

  return iframe;
}

function renderPortfolio(filter = "all") {
  if (!grid) {
    return;
  }

  const items =
    filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.filter === filter);

  grid.replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = "work-card";
      card.dataset.shape = item.shape;
      card.dataset.reveal = "";

      const preview = item.url ? document.createElement("a") : document.createElement("div");
      preview.className = "work-preview";

      if (item.url) {
        preview.href = item.url;
        preview.target = "_blank";
        preview.rel = "noreferrer";
        preview.setAttribute("aria-label", `Дивитись роботу: ${item.title}`);
      } else {
        preview.setAttribute("aria-hidden", "true");
      }

      const youtubeId = getYouTubeId(item.url);
      const vimeoId = getVimeoId(item.url);

      if (youtubeId) {
        const thumbnail = document.createElement("img");
        thumbnail.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
        thumbnail.alt = "";
        thumbnail.loading = "lazy";
        preview.append(thumbnail);

        if (item.preview !== false) {
          const startPreview = () => {
            if (!preview.querySelector("iframe")) {
              preview.append(createYouTubePreviewPlayer(youtubeId, item.title));
            }
          };

          const stopPreview = () => {
            preview.querySelector("iframe")?.remove();
          };

          card.addEventListener("pointerenter", startPreview);
          card.addEventListener("pointerleave", stopPreview);
          card.addEventListener("focusin", startPreview);
          card.addEventListener("focusout", stopPreview);
        }
      } else if (vimeoId) {
        preview.dataset.provider = "vimeo";

        const previewLabel = document.createElement("span");
        previewLabel.className = "work-preview-label";
        previewLabel.textContent = "Vimeo";
        preview.append(previewLabel);

        const startPreview = () => {
          if (!preview.querySelector("iframe")) {
            preview.append(createVimeoPreviewPlayer(vimeoId, item.title));
          }
        };

        const stopPreview = () => {
          preview.querySelector("iframe")?.remove();
        };

        card.addEventListener("pointerenter", startPreview);
        card.addEventListener("pointerleave", stopPreview);
        card.addEventListener("focusin", startPreview);
        card.addEventListener("focusout", stopPreview);
      }

      const body = document.createElement("div");
      body.className = "work-body";

      const meta = document.createElement("div");
      meta.className = "work-meta";
      meta.innerHTML = `<span>${item.category}</span><span>${item.format}</span>`;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const tags = document.createElement("div");
      tags.className = "work-tags";
      tags.replaceChildren(...item.tags.map((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        return tagElement;
      }));

      body.append(meta, title, tags);
      card.append(preview, body);
      return card;
    }),
  );

  observeReveals();
}

function setActiveFilter(nextFilter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === nextFilter);
  });

  renderPortfolio(nextFilter);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter || "all");
  });
});

let revealObserver;

function observeReveals() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );
  }

  revealElements.forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      revealObserver.observe(element);
    }
  });
}

renderPortfolio();
observeReveals();
