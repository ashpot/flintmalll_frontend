# Flintmall API Reference Guide

### **Base URL & Auth**

* 
**Base URL**: `https://flintmall.com.ng/api/v1/` 


* 
**Auth Header**: `Authorization: Token <your_token>` 


* 
**Note**: Get your token from the `/auth/login/` response and store it in `localStorage`.



---

## 1. Authentication & Verification

**Register User** (`POST /auth/register/`) 

**Request Body:** 

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "type": "Individual", 
  "business_name": "My Business",
  "business_address": "Street Address",
  "whatsapp_link": "https://wa.me/...",
  "facebook_link": "https://fb.com/...",
  "instagram_link": "https://instgr.am/...",
  "website": "https://..."
}

```

**Response (201 Created):** 

```json
{
  "user_id": 1,
  "success": true,
  "message": "User successfully created"
}

```

**Login User** (`POST /auth/login/`) 

**Request Body:** 

```json
{
  "email": "john@example.com",
  "password": "password123"
}

```

**Response (200 OK):** 

```json
{
  "token": "abcd1234",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "first_name": "John",
    "last_name": "Doe"
  }
}

```

---

## 2. Home & Discovery

**Load Home Data (Authenticated)** (`GET /home/`) 

**Response Body:** 

```json
{
  "categories": [{ "id": 1, "name": "Electronics", "photo": "..." }],
  "premium_ads": [{ "id": 10, "title": "iPhone 15", "price": "..." }],
  "trending_ads": [{ "id": 11, "title": "Macbook", "price": "..." }],
  "notification_items": 2
}

```

---

## 3. Categories

**Category Details** (`GET /categories/<id>/`) 

**Response Body:** 

```json
{
  "category": { "id": 1, "name": "Electronics" },
  "subcategories": [{ "id": 5, "name": "Phones" }],
  "ads": [{ "id": 101, "title": "Laptop" }]
}

```

**Category Parameters** (`GET /categories/<id>/parameters/`) 

**Response Body:** 

```json
{
  "sub_categories": [{ "id": 1, "name": "..." }],
  "fields": [{ "name": "Brand", "type": "select", "options": [] }]
}

```

---

## 4. Ads Management

**Create New Ad** (`POST /ads/`) 

**Requirement**: Use `multipart/form-data` for image uploads. **Request Body:** 

```json
{
  "title": "My new Ad",
  "category": "1",
  "sub_category": "3",
  "state": "Abia",
  "city": "Aba",
  "video_link": "https://youtube.com/...",
  "description": "Ad description",
  "price": "500000",
  "price_negotiable": "Yes",
  "delivery_available": "Yes",
  "product_details": "[{\"key\":\"value\"}]",
  "ad_type": "2",
  "files": "[Binary Image File]"
}

```

---

## 5. Messaging & Saved Ads

**Conversation Messages** (`POST /conversations/messages/`) 

**Request Body:** 

```json
{
  "user_one": "2",
  "user_two": "12"
}

```

**Response Body:** 

```json
{
  "messages": [
    { "sender": "2", "text": "Hello!", "timestamp": "..." }
  ]
}

```

**Check if Ad is Saved** (`GET /ads/<id>/saved/`) 

**Response Body:** 

```json
{
  "is_saved": true
}

```
