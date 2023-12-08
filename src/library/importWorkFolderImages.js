const imageModulesArray = [
  import.meta.glob('@/assets/image/work/content/sustainable-agri-mover/*'),
  import.meta.glob('@/assets/image/work/content/tech-agri-workshop/*'),
  import.meta.glob('@/assets/image/work/content/lathe-tech-workshop/*'),
  import.meta.glob('@/assets/image/work/content/digital-craft-platform/*'),
  import.meta.glob('@/assets/image/work/content/ceatec-agri-week/*'),
  import.meta.glob('@/assets/image/work/content/supermarket-japan-station/*'),
  import.meta.glob('@/assets/image/work/content/pingtung-pineapple-export/*'),
  import.meta.glob('@/assets/image/work/design/mu-maison/*'),
  import.meta.glob('@/assets/image/work/design/recycled-pottery-furniture/*'),
  import.meta.glob('@/assets/image/work/design/woodworking-craft-tool-guide/*'),
  import.meta.glob('@/assets/image/work/design/power-creation-business-card/*'),
  import.meta.glob('@/assets/image/work/design/japan-gov-business-card/*'),
  import.meta.glob('@/assets/image/work/design/breakfast-nightshop-branding/*'),
  import.meta.glob('@/assets/image/work/design/leek-kimchi-packaging/*'),
  import.meta.glob('@/assets/image/work/system/japan-agri-ecom-logistics/*'),
  import.meta.glob('@/assets/image/work/system/auto-robot-control-platform/*'),
  import.meta.glob('@/assets/image/work/system/koko-bot/*'),
  import.meta.glob('@/assets/image/work/system/koko-scale/*'),
  import.meta.glob('@/assets/image/work/design/kohaku-business-card/*')
]

// Function to process the imported images
const processImages = (imageModules) => {
  return Object.keys(imageModules).map((path, index) => {
    const fileName = path.split('/').pop()
    return {
      index: index + 1,
      path,
      fileName
    }
  })
}

const importWorkFolderImages = (folderNumber) => {
  const imagesFromFolder = imageModulesArray[folderNumber - 1]
  return imagesFromFolder ? processImages(imagesFromFolder) : null
}

export { importWorkFolderImages }
