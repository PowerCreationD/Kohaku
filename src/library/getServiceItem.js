import servicesItems from '@/assets/data/services.js'

const getServiceItem = (type) => {
  const serviceItem = servicesItems[type]
  return serviceItem
}

export { getServiceItem }
