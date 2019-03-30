export const isMobile = () => {
  const doc = document.documentElement || document.body
  return doc.clientWidth <= 768
}
