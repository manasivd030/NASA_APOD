## Site: [NASA site](https://api.nasa.gov/)
#### NASA offers a treasure trove of space-related information, including pictures and videos, for anyone who's curious about the universe. To make this data easily accessible, they provide open APIs. These APIs act like a gateway, allowing developers to use code to grab NASA's data and build their own cool apps and projects that explore and showcase the wonders of space.

Before we start with APIs Key. Understand what is API Key? https://www.geeksforgeeks.org/what-is-an-api/

Below are the lists of open source APIs:
![image](https://github.com/user-attachments/assets/3f8e23e2-3ae1-4998-9a07-3093781201ce)

# NASA_APOD 
Astronomy Picture of the day which is not only popular website amongst NASA but also across all the federal agencies. This API endpoint organizes NASA's Astronomy Picture of the Day (APOD) images and related information in a way that's easy for other programs to use. Plus, if you ask for it, the API will also provide keywords extracted from the image's description. These keywords can be helpful for things like automatically generating hashtags for social media posts or simply making it easier to find relevant images.

1. Get the APIs key from the [NASA site](https://api.nasa.gov/)
![image](https://github.com/user-attachments/assets/239a00b5-c561-473c-8ecd-1e22dbfb99db)

2. In email you will get the API key 
Note: Do not share the API key as per their instruction along with account_Id
![image](https://github.com/user-attachments/assets/199e2000-ebad-415d-a031-ee00da55bfe6)

3. There are some limits on the requests and responses that we get from webservice:

##### Web Service Rate Limits
Hourly Limit: 1,000 requests per hour

Note: ##### DEMO_KEY is the default key if you do not want to generate your own API key then use the below default key as provided by NASA.
##### DEMO_KEY Rate Limits - 
Hourly Limit: 30 requests per IP address per hour
Daily Limit: 50 requests per IP address per day

Example: If you made 500 requests at 10:15AM and 500 requests at 10:25AM, your API key would become temporarily blocked. This temporary block of your API key would cease at 11:15AM, at which point you could make 500 requests. At 11:25AM, you could then make another 500 requests.

4. HTTPS request
Below data is for newbee:
The NASA Astronomy Picture of the Day (APOD) API endpoint is:

`https://api.nasa.gov/planetary/apod`

Breakdown:

*   `https://`: Secure Hypertext Transfer Protocol.
*   `api.nasa.gov`: NASA API server domain.
*   `/planetary`:  Path for planetary-related APIs.
*   `/apod`:  The Astronomy Picture of the Day API endpoint.

Type of the request is ##### GET

**Note:**  The `concept_tags` parameter is no longer available in this service.  Also, if the image is not in the public domain, a `copyright` field will be returned in the response.

### Query Parameters

| Parameter   | Type       | Default   | Description                                                                                                                                                              |
| :---------- | :--------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`      | `YYYY-MM-DD` | `today`   | The date of the APOD image to retrieve.                                                                                                                                |
| `start_date`| `YYYY-MM-DD` | `none`    | The start of a date range, when requesting data for a range of dates. Cannot be used with `date`.                                                                       |
| `end_date`  | `YYYY-MM-DD` | `today`   | The end of the date range, when used with `start_date`.                                                                                                                  |
| `count`     | `int`      | `none`    | If specified, returns a specified count of randomly chosen images. Cannot be used with `date` or `start_date` and `end_date`.                                             |
| `thumbs`    | `bool`     | `False`   | Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.                                                                               |
| `api_key`   | `string`   | `DEMO_KEY`| Your api.nasa.gov key for expanded usage.  You can obtain a key [here](https://api.nasa.gov/).  Using the `DEMO_KEY` is subject to rate limiting. |

5. ##### Example query
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY/API key receive in email





