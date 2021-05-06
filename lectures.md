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
OBS.: What is a byte stream? Programs use byte streams to perform input and output of 8-bit bytes. What is a binary stream? Binary streams contain a sequence of bytes. 
OBS.2: Explicação do Danniel: streams são literalmente fluxos; em programação temos algo semelhante e que são categorizados nesses ai: binários e de byte; um stream binário consegue enviar mais dados do que um de byte, pois o binário está “compactado”, e o byte é meio que uma string; no binário quem escreve e quem lê tem que saber o formato de como virá o dado, com isso economizamos em dados. um outro conceito de stream que também é aplicado, mas em outro contexto, é que geralmente eles não são carregados em memória, a gente lê de um ponto e escreve em outro imediatamente. Isso é válido para quanto temos que mexer com uma quantidade enorme de dados.

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