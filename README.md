## Request Header Parser Microservice

  
Getting the IP address, preferred languages (from header `Accept-Language`)  
and system infos (from header `User-Agent`) from a client device.

### Example Usage:

[/api/whoami](http://localhost:3000/api/whoami)

### Example Output:

`{"ipaddress":"93.184.216.34","language":"en-US,en;q=0.5",  
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/69.0"}`
