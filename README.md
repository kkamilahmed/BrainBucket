# BrainBucket

**BrainBucket** is a full-stack note management platform that organizes and retrieves notes efficiently using **Node.js, Redis Vector Search, and OpenAI embeddings**.  
It helps users manage large numbers of notes, links, and images in a dynamic, searchable interface, improving productivity and research organization.

---

## Features

- **Rich Note Organization**  
  Manage 100+ notes with support for text, links (with automatic previews), and images.

- **RAG-Based Search**  
  Uses a **Retrieve-and-Generate (RAG)** system to fetch relevant notes in under 1 second using Redis Vector Search and OpenAI embeddings.

- **Dynamic Frontend UI**  
  Displays notes in a responsive **NotesCard grid** built with **React** and **Tailwind CSS**, allowing real-time updates.

- **Efficient Backend Storage**  
  Stores notes and metadata in **MongoDB**, ensuring scalable and structured data management.

- **Cloud Deployment**  
  Containerized with **Docker** and deployed on **AWS EC2**, with S3 and CloudFront for storage and content delivery.

---

## System Architecture

```mermaid
flowchart TD
    User[User Browser]
    Frontend[React Frontend]
    Backend[Node.js / Express API]
    OpenAI[OpenAI Embeddings]
    Redis[Redis Vector Store]
    Mongo[MongoDB Storage]
    S3[AWS S3 / CloudFront]

    User --> Frontend
    Frontend --> Backend
    Backend --> OpenAI
    OpenAI --> Redis
    Backend --> Redis
    Backend --> Mongo
    Backend --> S3
