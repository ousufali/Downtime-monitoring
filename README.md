Website monitoring apps are, at their core, based on an incredibly simple core functionality: they make an HTTP request and report the
status code response. If the response is not 200 OK , the website is considered "down". Monitoring apps go through this request and
response cycle frequently (sometimes up to several times per minute) and trigger an alert whenever the request returns an unexpected
status code.
