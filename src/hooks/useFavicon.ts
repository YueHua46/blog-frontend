export function useFavicon(favicon: string) {
  const HYfavicon = document.querySelector<any>('link[rel="icon"]');
  HYfavicon.href = favicon;
}