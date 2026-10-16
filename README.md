```text
campus-eats/
├── config/
│   ├── db.js                    (PostgreSQL — unchanged)
│   └── mongo.js                 (new — MongoDB connection)
├── controllers/
│   ├── adminController.js       (dashboard now also loads feedback)
│   └── feedbackController.js    (new — submitFeedback)
├── models/
│   └── Feedback.js              (new — createFeedback, getFeedbackForRestaurant)
├── routes/
│   └── index.js                 (temporary /mongo-test route removed; adds POST /restaurants/:id/feedback)
├── views/
│   ├── menu.ejs                 (adds the feedback form)
│   └── admin-dashboard.ejs      (adds the Customer Feedback section)
├── app.js                       (calls connectMongo() once at startup)
├── .env                         (adds MONGO_URI)
└── package.json                  (adds mongodb dependency)

```
