// DocSection: latest_articles_get_all
const KenticoCloud = require('@kentico/kontent-delivery');

const deliveryClient = new DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3'
});

deliveryClient.items<ContentItem>()
    .toObservable()
    .subscribe(response => console.log(response));
// EndDocSection