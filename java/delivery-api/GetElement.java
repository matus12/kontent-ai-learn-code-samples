// DocSection: delivery_api_get_element
// Tip: Find more about Java/JavaRx SDKs at https://developer.kenticocloud.com/docs/javaandroid
import com.kenticocloud.delivery;

DeliveryClient client = new DeliveryClient("975bf280-fd91-488c-994c-2f04416e5ee3");

Element element = client.getContentTypeElement("coffee", "processing");
// EndDocSection