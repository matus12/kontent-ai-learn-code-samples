// DocSection: latest_articles_get_5articles_orderfilt
const KenticoCloud = require('@kentico/kontent-delivery');

// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', (rawData) => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .orderParameter('elements.post_date', KenticoCloud.SortOrder.desc)
    .limitParameter(5)
    .elementsParameter(['title', 'teaser_image'])
    .toObservable()
    .subscribe(response => console.log(response));  
// EndDocSection