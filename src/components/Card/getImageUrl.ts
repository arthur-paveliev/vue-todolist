export const getImageUrl = (src: string): string => {
  const image = require.context('../../assets', false)

  return image(src)
}
