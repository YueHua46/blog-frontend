export function setTitle(title: string) {
  document.title = title;
}

export function setFavicon(favicon: string) {
  const HYfavicon = document.querySelector<any>('link[rel="icon"]');
  HYfavicon.href = favicon;
}

// change markdown mode
export function changeMarkdownMode(mode: 'dark' | 'light') {
  document.documentElement.setAttribute('data-color-mode', mode)
}