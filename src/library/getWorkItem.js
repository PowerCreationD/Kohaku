import workItems from '@/assets/data/work.js'

const getWorkItem = (project) => {
  const workItem = workItems.find((item) => item.project === project)
  return workItem
}

export { getWorkItem }
