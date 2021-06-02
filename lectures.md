# gRPC [Golang] Master Class: Build MOdern API & Microservices

## gRPC Introduction
- Microservices are built in different language and encompass (cover) a function of your business;
- These microservices must exchange information and need to agree on:
    - the API to exchange data;
    - the data format;
    - the error patterns;
    - Load balancing;
    - Many other.
- One of the popular choice for building API is REST (HTTP-JSON)
- While building an API:
    - need to think about data model:
        - JSON;
        - XML;
        - Something Binary?
    - need to think about the endpoint
        - GET /api/v1/user/123/post/456
        - POST /api/v1/user/123/post
    - need to think about how to invoke it and handle errors
        - API
        - Errors
    - need to think about efficiency of the API
        - how much data do I get out of one call?
        - too much data
        - too little data => many API calls?
    - how about latency?
    - how about scalability to 1000s clients?
    - how about load balancing?
    - how about inter operability with many languages?
    - how about authentication, monitoring, logging?
- gRPC is a framework that does all these stuff for us!
- What's an API?
    - At its core, an API is a contract, saying:
        - send me this REQUEST (Client)
        - I'll send you this RESPONSE (Server)
    - It's all about the data
    - The rest, we'll leave to the gRPC framework
- What's gRPC?
    - Is a free and open-source framework developed by Google;
    - Is a part of the Cloud Native Computation Foundation (CNCF) - like Docker and Kubernetes for example;
    - At a high level, it allows you to define REQUEST and RESPONSE for RPC (Remote Procedure Calls) and handles all the rest for you;
    - On top of it, it's modern, fast and efficient, build on top of HTTP/2, low latency, supports streaming, language independent, and makes it super easy to plug in authentication, load balancing, logging and monitoring.
- What's an RPC?
    - Is a Remote Procedure Call
    - In your CLIENT code, it looks like you're just calling a function directly on the SERVER.
    - It's not a new concept (CORBA had this before)
    - With gRPC, it's implemented very cleanly and solves a lot of problems
- How to get started?
    - At the core of gRPC, you need to define the messages and services using **Protocol Buffers**;
    - The rest of the gRPC code will be generated for you and you'll have to provide an implementation for it;
    - One **.proto** file works for over 12 programming languages (server and client), and allows you to use a framework that scales to millions of RPC per seconds.
- Why Protocol Buffers?
    - Protocol Buffers are language agnostic;
    - Code can be generated for pretty much any language;
    - Data is binary and efficiently serialized (small payloads);
    - Very convenient for transporting a lot of data;
    - Protocol Buffers allows for easy API evolution using rules;
    - You should know the basics of Protocol Buffers before starting this course;
- Why should I learn it?
    - Many companies have embraced it fully in Production
        - Google (internally and for Google Cloud services like Pub/Sub)
        - Netflix
        - Square (first contributor, replacement of all their APIs)
        - CoreOS (etcd 3 is built on gRPC for server-server communication)
    - gRPC is the future of micro-services API and mobile-server API (and maybe Web APIs)

## Course Objective
- Course Objectives
    1. Learn the gRPC theory to understando how gRPC works
    2. Compare gRPC and REST API paradigm
    3. Write your gRPC service definition in .proto files
    4. Generate Server and Client COde
    5. Implement Unary, Server Streaming, Client Streaming & Bi-Directional Streaming API
    6. Practice your learning with Exercises & Solutions
    7. Implement advanced concepts such as Error Handling, Deadlines & SSL Security
    8. Get pointers to expand your learning journey and get inspired by real world gRPC services

- Pre-requisites
    - Good understanding of the programming language for this course
    - Asynchronous programming is a plus
    - Good Understanding of Protocol Buffers
    - Lots of willingness to learn something new!
    - This course will be challenging

- Who is this course for?
    - **Developers** who want to understand how to write gRPG Services and Clients
    - **Architects** who want to understand how gRPC works and the concepts behind the different types of API

## Aside: Protocol Buffers
### Youtube: Protocol Buffers Tutorial - An Introduction to Protobufs
**Source: https://www.youtube.com/watch?v=72mPlAfHIjs**
- The transfer protocol you've never heard of;
- How to send data?
    - What protocol should we use?
    - What format should the data be in?
    - Size and efficienty consideration
    - What is the requesting server usinf the data for?
- JSON and XML
    - JSON: JavaScript Object Notation
    - XML: Extensible Markup Language
        - Great for the front end, but what about the back end server to server communication?
- Protobufs
    - Google's Creation in 2008
    - Mostly used for internal protocols
    - Benchmarked with XML
    - Language neutral
- How Do They Work?
    - Binary Serialization
    - Uses a determined schema to encode and decode?
    - Compiled into many languages
- OBS.: What is a byte stream? Programs use byte streams to perform input and output of 8-bit bytes. What is a binary stream? Binary streams contain a sequence of bytes. 
- OBS.2: Explicação do Danniel: streams são literalmente fluxos; em programação temos algo semelhante e que são categorizados nesses ai: binários e de byte; um stream binário consegue enviar mais dados do que um de byte, pois o binário está “compactado”, e o byte é meio que uma string; no binário quem escreve e quem lê tem que saber o formato de como virá o dado, com isso economizamos em dados. um outro conceito de stream que também é aplicado, mas em outro contexto, é que geralmente eles não são carregados em memória, a gente lê de um ponto e escreve em outro imediatamente. Isso é válido para quanto temos que mexer com uma quantidade enorme de dados.

- Schema
    - Fields are indicated and aliased with a number and a tag
    - Required, optional, repeated
    - Schemas allow messages to be extensible
- Advantages of protobufs 
    - Lightweight
        - takes up less space
        - faster transmission
    - Validation of data structure
    - Easy to modify schema
- But then, I've never heard of this... why now?
    - Hacking Pokemon Go
        - Created by Niantic
        - Use protobufs for data transfer
        - Mobile Scraping
        - Interception of Data
    - MitM Attacks
        - Man in the Middle
        - Intercept the traffic between client and server
        - Fake authentication
        - Certificate Pinning
    - Unknown 6 and Unknown 22
        - Lots of APIs suddenly stopped working
        - Scrapers viewed the protobufs and found some new fields (6, 22)
        - Took three days to crack
    - Server Side Protection
        - Rate Limiting
        - Certificate Pinning
        - IP Blocking
        - Behavior Analysis

### Youtube: The Need for Protocol Buffers
**Source: https://www.youtube.com/watch?v=BywIOD_Y3CE**
- An Evolution of data:
    1. CSV (Comma Separeted Values)
    2. Relational tables
    3. JSON
        - JSON format
        - Advantages
            1. Data can take any form (arrays, nested elements)
            2. Is a widely accepted format on the web
            3. Can be read by pretty much any language
            4. Can be easily shared over a network
        - Disadvantages
            1. Data has no schema enforcing
            2. JSON Objects can be quite big in size because of repeated keys
            3. No comments, metadata, documentation
    4. Protocol Buffers
        - Protocol Buffers is defined by a .proto text file;
        - You can easily read it and understand it as a human.
        > example.proto
        >       
        >       syntax = "proto3"
        >       
        >       message MyMessage {
        >       int32 id = 1;
        >       string first_name = 2;
        >       bool is_validated = 3;
        >       } 
        > ------------------------------------

        - Advantages:
            - Data is fully typed
            - Data is compressed automatically (less CPU usage)
            - Schema (defined used .proto file) is needed to generate code and read the data
            - Documentation can be embedded in the schema
            - Data can be read across any language (C#, Java, Go, Python, JavaScript, etc...)
            - Schema can evolve over time, in a safe manner (schema evolution)
            - 3-10x smaller, 20-100x faster than XML
            - Code is generated for you automatically!
        - Disadvantages:
            - Protobuf support for some languages might be lacking (but the main ones is fine);
            - Can't "open" the serialized data with a text editor (because it's compressed and serialized)

### Youtube: How is Protocol Buffer Used?
**Source: https://www.youtube.com/watch?v=ZEw9YryQotE&list=PLt1SIbA8guut1SomKGlEizCHLIEkAm_6k&index=2**
- How is Protocol Buffers Used? To share data across languages!
    - It uses serialized data, which can be interpreted by any programming language (it's universal);
- How is Protocol Buffers Used?
    - Some databases may have support for Protocol Buffers data format;
    - Lots of RPC frameworks, including gRPC, use Protocol Buffers to exchange data; 
    - Google uses it for all their internal API;
    - Some big projects like 'etcd' use Protocol Buffers for transporting data.
- OBS.: What is ETCD? etcd is a strongly consistent, distributed key-value store that provides a reliable way to store data that needs to be accessed by a distributed system or cluster of machines. It gracefully handles leader elections during network partitions and can tolerate machine failure, even in the leader node. **Source: https://etcd.io/**
- Proto2 vs Proto3
    - Mid 2016, Google released the 3rd iteration of Protocol Buffers, named proto3;
    - It will be the most common format used forward, and it has the best compatibility across a wide array of programming languages;
    - It is also the easiest to learn!

### Youtube: Protocol Buffers Crash Course
**Source: https://www.youtube.com/watch?v=46O73On0gyI**
- Protocol Buffers (Protobuf) is a method of serializing structured data useful for transmitting data over the wire or storing it; Representation of structured data;
- JSON is not a structured data: you're responsible for maintaining the righteousness of the schema.
- With protocol buffers we need to use a structure and a schema.
- Protocol Buffers are neutral but not agnostic: there's a compiler to give us a file in the language we want with the schema we've created.
- Benefits of ProtoBuff:
    * Schema 
    * Binary compact size
    * Language neutral 

- Cons:
    * Have to have structured data (barrier to entry)
    * More involved processed for small applications.
    * Have to make sure to update compiled boilerplate code (bugs, security vulnerability, etc.)
    * hard to use with JSON based application (Javascript/browser)


- protoc compiler

        $ protoc --js_out=import_style=commonjs,binary:. employees.proto 

        $ npm install google-protobuf

## Protocol Buffers & Language Interoperability
- Protocol Buffers role in gRPC:
    - Protocol Buffers is used to define the:
        - Messages (data, Request, Response);
        - Service (Service name and RPC endpoints);
    - We then generate code from it!
- Efficiency of Protocol Buffers over JSON
    - gRPC uses Protocol Buffers for communications;
    - One JSON data may weight 55 bytes, and the same in protocol buffers weights 20 bytes;
    - We save in Network Bandwidth!
    - Parsing JSON is actually CPU intensive (because the format is human readable);
    - Parsing Protocol Buffers (binary format) is less CPU intensive because it's closer to how a machine represents data;
    - By using gRPC, the use of Protocol Buffers means faster and more efficient communication, friendly with mobile devices that have a slower CPU;
- gRPC can be used by any language
    - Because the code can be generated for any language, it makes it super simple to create micro-services in any language that interact with each other.
- Summary: Why Protocol Buffers?
    - Easy to write message definition;
    - The definition of the  API is independent from the implementation;
    - A huge amount of code can be generated, in any language, from a simple .proto file;
    - The payload is binary, therefore very efficient to send / receive on a network and serialize / de-serialize on a CPU;

## HTTP/2
- What's HTTP/2?
    - Is the newer standard for internet communications that address common pitfall of HTTP/1.1 on modern webpages;
- How HTTP/1.1 works
    - HTTP/1.1 was released in 1997. It has worked great for many years!
    - HTTP/1.1 opens a new TCP connection to a server at each request;
    - It does not compress headers(which are plaintext);
    - It only works with Request / Response mechanism (no server push);
    - HTTP was originally composed of two commands:
        - GET: to ask for content;
        - POST: to send content
    - Nowadays, a webpage loads 80 assets on average;
    - Headers are sent at every request and are PLAINTEXT (heavy size);
    - Each request opens a TCP connection;
    - These inefficiencies add latency and increase network packet size
- How HTTP/2 works
    - HTTP/2 was released in 2015. It has been battled tested for many years! (and was before that tested by Google under the name SPDY);
    - HTTP/2 supports multiplexing
        - The client and server can push messages in parallel over the same TCP connection;
        - This greatly reduces latency;
    - HTTP/2 supports server push
        - Servers can push streams (multiple messages) for one request from the client;
        - This saves round trips (latency);
    - HTTP/2 supports header compression
        - Headers (text based) can now be compressed;
        - These have much less impact on the packet size;
        - (remember the average http request may have over 20 headers, due to cookies, content cache, and application headers)
    - HTTP/2 is binary
        - While HTTP/1 text makes it easy for debugging, it's not efficient over the network;
        - (Protocol Buffers is a binary protocol and makes is a great match for HTTP/2);
        - HTTP/2 is secure (SSL is not required but recommended by default)
- HTTP/2: Bottom Line
    - Less chatter
    - More efficient protocol (less bandwidth)
    - Reduce Latency
    - Increased Security
    - And you get all these improvements out of the box by using the gRPC framework!

## 4 Types of gRPC APIs
- There are 4 types of calls/APIs in gRPC:
    - Unary: you send something and you receive something (Request/Response);
    - Server Streaming: as the server gets new data for the client it will just send it as it receiveis it, in only one request;
    - Client Streaming: the client sends different requests and expects only one response from the server at some point;
    - Bi Directional Streaming: client sends different requests and server sends different responses asynchronously.
- Unary is what a traditional API looks like (HTTP REST);
- HTTP/2 as we've seen, enables APIs to now have streaming capabilities;
- The server and the client can push multiple messages as part of one request!
- In gRPC it's very easy to define these APIs as we'll see.

## Scalability in gRPC
- gRPC Servers are asynchronous by default;
- This means they do not block threads on request;
- Therefore, each gRPC server can serve millions of requests in parallel;
- gRPC Clients can be asynchronous or synchronous (blocking);
- The client decides which model works best for the performance needs;
- gRPC Clients can perform client side load balancing;
- As a proof of scalability: Google has 10 BILLION gRPC requests being made per second internally;

## Security in gRPC (SSL)
- By default gRPC strongly advocates for you to use SSL (encryption over the wire) in your API;
- This means that gRPC has security as a first class citizen;
- Each language will provide an API to load gRPC with the required certificates and provide encryption capability out of the box;
- Additionally using Interceptors, we can also provide authentication (we'll learn about Interceptors in the advanced section).

## gRPC vs REST
| GRPC | REST |
| :----: | :----: |
| Protocol Buffers - smaller, faster | JSON - text based, slower, bigger |
| HTTP/2 (lower latency) - from 2015 | HTTP/1.1 (higher latency) - from 1997 |
| Bidirectional & Async | Client => Server requests only |
| Sream Support | Request/Response Support only |
| API Oriented - "What" (no constraints - free design) | CRUD Oriented (Create - Retrieve - Update - Delete / POST GET PUT DELETE) |
| Code generation through Protocol Buffers in any language - 1rst class citizen | Code generation through OpenAPI / Swagger (add-on) - 2nd class citizen |
| RPC Based - gRPC does the plumbing for us | HTTP verbs based - we have to write the plumbing or use a 3rd party library |

## Section Summary - why use gRPC
- Why use gRPC
    - Easy code definition in over 11 languages
    - Uses a modern, low latency HTTP/2 transport mechanism
    - SSL Security is built in
    - Support for streaming APIs for maximum performance
    - gRPC is API oriented, instead of Resource Oriented like REST

## Go Dependencies Setup
    $ go get -u google.golang.org/grpc
    $ go get -u github.com/golang/protobuf/protoc-gen-go

## Code Generation Test
    $ sudo apt install protobuf-compiler
    $ protoc greet/greetpb/greet.proto --go_out=plugins=grpc:.

- what is a .sh file? A .SH file is a simple text file that contains the commands and a little logic to it. 
- if there's errors, try these commands:

        $ go get google.golang.org/protobuf/reflect/protoreflect@v1.26.0

        $ go get google.golang.org/protobuf/runtime/protoimpl@v1.26.0

        $ go run tidy
    - Or, try seeing what the error is. 