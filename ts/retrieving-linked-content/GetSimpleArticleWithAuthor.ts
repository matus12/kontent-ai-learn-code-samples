// DocSection: linked_content_get_article_with_author
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
import { ContentItem, DeliveryClient, Elements, TypeResolver } from '@kentico/kontent-delivery';

// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
export class Author extends ContentItem {
    constructor(){
        super();
    }
}

export class SimpleArticle extends ContentItem {
    public title: Elements.TextElement;
    public body: Elements.RichTextElement;
    public author: Elements.LinkedItemsElement<Author>;

    constructor(){
        super();
    }
}

const deliveryClient = new DeliveryClient({
    projectId: 'e6d2946e-0e24-003f-a397-9d2d458c6d6e',
    typeResolvers: [
      new TypeResolver('author', (rawData) => new Author)
    ]
});

deliveryClient.item<SimpleArticle>('the_origin_of_coffee')
    .depthParameter(1)
    .toObservable()
    .subscribe(response => console.log(response.item));
// EndDocSection