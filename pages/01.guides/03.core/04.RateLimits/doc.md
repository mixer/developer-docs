---
title: 'Rate Limits'
---

# Rate Limits

Mixer's Core API has rate limiting in place to ensure service and platform stability. When making requests you should keep these limits in mind. The rate limits are structured into buckets. Each Bucket has its own limit and your requests contribute to the matching bucket for that endpoint.

## Buckets

| Name               | Request Count | Time Interval (in Seconds) |
| ------------------ | ------------- | -------------------------- |
| analytics          | 100           | 60                         |
| channel-follow     | 100           | 60                         |
| channel-read       | 1000          | 300                        |
| channel-search     | 20            | 5                          |
| channel-write      | 250           | 300                        |
| chats              | 500           | 60                         |
| contact            | 3             | 60                         |
| global             | 1000          | 60                         |
| ingest             | 5             | 60                         |
| mail-subscribe     | 3             | 60                         |
| notification-read  | 100           | 60                         |
| report             | 10            | 60                         |
| upload             | 5             | 600                        |
| upload-interactive | 15            | 300                        |
| user-email         | 2             | 86400                      |
| user-login         | 50            | 60                         |
| user-login-failed  | 8             | 900                        |
| user-read          | 500           | 60                         |
| user-write         | 100           | 60                         |

Endpoints within each Bucket can be called `Request Count` times per `Time Interval`.


## Exceeding Rate Limits

When you exceed a rate limit you will see a `429 Too Many Requests`.

If you are regularly exceeding our rate limits first ensure that you're calling pattern is optimized. Here are some things to try:
- Adjust the interval at which you make requests.
- Instead of polling try using [Constellation for live updates](/guides/core/introduction#live-updates-via-constellation)


## Rate Limit Exceptions

If you're use case is unique or you'd like to discuss getting a rate limit exception please reach out to our [Developer Inquiry Address](mailto:mixerdevinfo@microsoft.com). Fair warning though, we rarely grant these at this time.
