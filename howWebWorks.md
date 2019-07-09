[how web works](https://github.com/vasanthk/how-web-works)

## Google's 'g' key is pressed
When you just press "g" the browser receives the event and the entore auto-complete machinery kicks into high gear. Depending on your browser's algorithm and if you are in private/incognito mode or not, various suggestiongs will be presented to you in the dropbox below the URL bar. Most of these algorithms prioritize results based on search history and bookmarks. You are going to type "google.com" so none of it matters, but a lot of code will run before you get there and the suggestions will be refined with each key press. It may even suggest "google.com" before you type it.

## when you hit "enter"
To pick a zero point, let's choose the Enter key on the keyboard hitting the bottom of its range. At this point, an electrical circuit specific to the enter key is closed (either directly or capacitively). This allows a small amount of current to flow into the logic circuitry of the keyboard, which scans the state of each key switch, debounces the electrical noise of the rapid intermitten closure of the switch, and converts it to a keycode integer, in this case 13. The key board controller then encode the keycode for transport to the computer. This is now almost universally over a Universal Serial Bus (USB) or bluetooth connection.

## Parse the URL
The browser now has the following information contained in the URL (Uniform Resource Locator): 
- Protocol "hhtp": Use 'Hyper Text Transfer Protocol'
- Resource "/": Retrieve main (index) page


When no protocol or valid domain name is given the browser proceeds to feed the text given in the address box to the browser's default web search engine.

## Check HSTS list
- The broswer checks its "preloaded HSTS (HTTP Strict Tranport Security)" list. This is a list of websites that have requested to be contacted via HTTPS only.
- If the website is in the list, the browser sends its request via HTTPS instead of HTTP. Otherwise, the initial request is sent via HTTP.


Note: the website can still use the HSTS policy without being in the HSTS lsit. The first HTTP request to the website by a user will receive a response requesting that the user only send HTTPS requests. However, this single HTTP request could potentially leave the user vulnerable to a downgrade attack, which is why the HSTS list is included in modern web browsers.

## DNS lookup
The browser tries to figure out the IP address for the entered domain. The DNS lookup proceeds as follows:
- **Browser cache**: The browser caches DNS records for some time. Interestingly, the OS does not tell the browser the time-to-live for each DNS record, and so the browser caches them for a fixed duration (varies between broswers, 2-30 min).
- **OS cache**: If the browser cache does not contain the desired record, the browser makes a system call (get host by name in Windows). The OS has its own cache.
- **Router cache** The request continues on to your router, which typically has its own DNS cache.
- **ISP DNS cache**: The next place checked is the cache ISP's DNS server. With a cache, naturally. 
- **Recursive search**: Your ISP's DNS server begins a recursive search, from the root nameserver, through the .com top-level nameserver, to Google's nameserver. Normally, the DNS server will have names of the .com nameservers in cache, and so a hit to the root nameserver will not be necessary.


DNS recurser ('where is wikipedia.org?') 
1. root nameserver 
2. org nameserver
3. wikipedia.org nameserver

one worrying thing about DNS is that the entire domain like wikipedia.org or facebook.com seems to map to a single IP address. Fortunately, there are ways of mitigating the bottleneck:

- **Round-robin DNS** is a solution where the DNS lookup returns multiple IP addresses, rather than just one. For example, facebook.com actually maps to four IP addresses. 
- **Load-balancer** is the piece of hardware that listens on a particular IP address and forwards the requests to other servers. Major sites will typically use expensive high-performance load balancers.
- **Geographic DNS** improves scalability by mapping a domain name to different IP addresses, depending on the client's geographic location. This is great for hosting static content so that different servers don't have to update shared state.
- **Anycast** is a routing technique where a single IP address maps to multiple physical servers. Unfortunately, anycast does not fit well with TCP and is rarely used in that scenario.

Most of the DNS servers themselves use anycast to achieve high availability and low latency of the DNS lookups. Users of an anycast (DNS is an excellent example) will always connect to the closest (from a routing protocol perspective) DNS server. This reduces latency, as well as providing a level of load-balancing (assuming that your consumers are evenly distributed around your network).


## Opening of a socket + TCL (Transmission Control Protocol)
- once the browser receives the IP address of the detination server, it takes that and the given port number from the URL (the HTTP protocol defaults to port 80, and HTTPS to port 443), and makes a call to the system library function named socket and requests a TCP socket stream.
- the client computer sends a ClientHello message to the server with its TLS version, list of cipher algorithms and compression methods available.
- the server replies with a ServerHello message to the client with the TLS version, selected cipher, selected compression methods and the server's public certificate signed by a CA (Certified Authority). The certificate contains a public key that will be used by the client to encrypt the rest of the handshake until a symmetric key can be agreed upon.


## Render Tree
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

A renderer knows how to lay out and paint itself and its children. Each renderer represents a rectangular area usually corresponding to a node's CSS box.