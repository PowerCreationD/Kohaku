import workItems from '@/assets/data/work.js'

const getWorkItemInfo = (project) => {
  const workInfo = workItems.find((item) => item.project === project)
  return workInfo
}

export { getWorkItemInfo }
