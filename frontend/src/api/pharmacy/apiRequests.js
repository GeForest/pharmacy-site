export default function requests(instance) {
    return {
        getPharmacies() {
            return instance.get('pharmacies')
        },
        getProducts(id) {
            return instance.get(id)
        },
        postOrders(order) {
            return instance.post('orders', order)
        },
  }
}