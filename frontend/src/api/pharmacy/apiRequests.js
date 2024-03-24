export default function requests(instance) {
    return {
        getPharmacies() {
            return instance.get('pharmacies')
        },
        getProducts(id) {
            return instance.instance.get(id)
        },
        postOrders(order) {
            return instance.instance.post('orders', order)
        },
  }
}