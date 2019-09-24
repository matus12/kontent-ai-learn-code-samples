// DocSection: delivery_api_get_types
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
const KenticoCloud = require('@kentico/kontent-delivery');

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3'
});

deliveryClient.types()
    .limitParameter(3)
    .toObservable()
    .subscribe(response => console.log(response.types));
// EndDocSection