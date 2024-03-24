import instance from "./instance"

export const apiRequests = {
    getPharmacies: () => instance.get('pharmacies'),
    getProducts: (id) => instance.get(id),
    postItems: (order) => instance.post('orders', order),
}