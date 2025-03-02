### Project Links

- **GitHub Repo:** [**Pregnancy Support GitHub**](https://github.com/Pranav6185/HM0075_TEAM_LIGHT)
- **Live Demo:** [**Pregnancy Support Live Demo**](https://www.loom.com/share/461826200afd498e91035935a6e3181d?sid=dba07e34-695c-4cca-af40-a440316cd3b9 )
- **Google Drive:** [**Documentation And PPT Presentation**](https://drive.google.com/drive/folders/1U_nakTgaEFPRxDAo7_D96g3G8t8w8Gc5?usp=drive_link)

### Problem Statement

- Expectant mothers need continuous guidance and support during pregnancy.
- A dedicated platform can provide reliable health and wellness information.
- A calendar feature helps track doctor’s appointments and health progress.
- Prenatal and postnatal care guidelines ensure proper care at every stage.
- A food and diet tracking feature promotes a healthy lifestyle.
- The goal is to create a structured and supportive system for an informed and organized pregnancy experience.

### Introduction

Pregnancy is a beautiful yet challenging journey, and expectant mothers deserve all the support they can get. This platform is designed to be a trusted companion, providing essential health and wellness information to help them feel informed and empowered. With a user-friendly calendar, mothers can easily track medical appointments, monitor their health progress, and stay on top of important milestones. The platform also offers comprehensive prenatal and postnatal care guidelines, ensuring mothers receive the right guidance at every stage. Additionally, a food and diet tracking feature help maintain a healthy lifestyle, making the pregnancy experience smoother and more organized.

### Tech Stack

- **Frontend:** React.js, Tailwind CSS.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB/MySQL.
- **AI/ML:** TensorFlow, Python, OpenAI API.
- **Deployment:** Vercel.

### Objectives

1. **Provide Reliable Health and Wellness Information**.

- Offer accurate and up-to-date medical guidance for expectant mothers.

1. **Enable Efficient Pregnancy Tracking with a Calendar.**

- Help monitor pregnancy milestones, health progress, and reminders.

1. **Support Prenatal and Postnatal Care.**

- Educate mothers on essential prenatal and postnatal health practices.

1. **Facilitate Food and Diet Management.**

- Guide expectant mothers on proper nutrition and diet plans.

1. **Ensure Accessibility and User-Friendliness.**

- Develop a user-friendly platform for easy access anytime, anywhere.

### Workflow

**1\. User Entry & Navigation:**

- **Users Visit the Homepage** → Introduction to pregnancy-related content, featured articles, and trending topics.
- **Navigation Menu Access** → Users can explore categories like "Getting Pregnant," "Pregnancy," "Labor & Birth," "Postpartum," and "Resources."

**2\. Content Exploration:**

- **Informational Pages** → Users click on sections to read articles, guides, and expert advice on pregnancy and postpartum topics.
- **Search Functionality** → Users can search for specific topics (e.g., “morning sickness remedies”).
- **Interactive Elements:**

1. Due Date Calculator
2. Ovulation Calendar
3. Pregnancy Symptoms Checker

**3\. Engagement & Tools:**

- **Newsletter Sign-up** → Users enter emails to receive pregnancy-related content.
- **Hotline & Support Access** → Users can reach out for help with pregnancy-related questions.
- **Chat & Contact Forms** → Users may interact with support teams for inquiries.
- **Donation & Support Options** → Users contribute to the non-profit organization.

**4\. External Resources & Redirections:**

- **Links to Partner Services** → Redirects to healthcare providers, pregnancy tests, and counselling resources.
- **Social Media Integration** → Users can follow APA on social platforms for updates.

**5\. Conversion & User Retention:**

- **Encouraging Return Visits** → Articles, updates, and newsletters keep users engaged.
- **Personalized Recommendations** → Based on browsing history and search terms.

### Flowchart Of Website


![Website Flowchart](frontend/src/assets/flowchart.jpg)
### Implementation Details

- **Frontend:** Built using React.js and Tailwind CSS for a modern UI.
- **Backend:** Developed with Node.js and Express.js to ensure efficient data handling.
- **AI/ML:** Machine learning models trained for symptom analysis and personalized recommendations.
- **Deployment:** Hosted on Vercel with auto-scaling for high availability.

### Challenges & Learnings

**Challenges:**

1. Content Accuracy – Keeping medical information updated and reliable.
2. User Engagement – Lack of personalization in static content.
3. Performance Issues – Handling high traffic and slow page loads.
4. SEO Challenges – Competing for search rankings.
5. Trust & Credibility – Building user confidence in medical content.

**Learnings:**

1. Ensure Medical Accuracy – Content should be expert-reviewed.
2. Use Interactive Tools – Calculators & trackers boost engagement.
3. Optimize for Speed – Mobile-first design and caching are key.
4. Leverage SEO Best Practices – Structured data improves visibility.
5. Build Trust – Doctor-backed articles and testimonials enhance credibility.

### Future Scope & Enhancements

- **Integration with Wearable Devices** – Sync with smartwatches to monitor heart rate, sleep patterns, and physical activity.
- **Telemedicine Integration** – Enabling direct communication with doctors and specialists.
- **AI-Powered Chatbot** – Providing 24/7 real-time pregnancy-related assistance.
- **Augmented Reality (AR) Feature** – Visualizing fatal growth and changes during pregnancy.
- **Voice-Assisted Navigation** – Hands-free interaction for convenience.
- **AI & ML Integration** – Personalized tips, risk assessment.
- **Health Tracking** – Sync with wearables, symptom checker, appointment reminders.
- **Telemedicine** – Virtual consultations, community forums, 24/7 support.
- **Enhanced UX** – Voice navigation, multilingual support, dark mode.
- **E-commerce** – Affiliate marketing, premium content, health service integration.

### Installation & Usage Instructions

1. **Clone the GitHub repository:** git clone <http://github.com/Pranav6185/HM0075_TEAM_LIGHT.git>
2. **Frontend Setup:**

- **Navigate to Frontend Folder:** cd frontend
- **Install Frontend Dependencies:** npm install

1. **Backend Setup:**

- **Navigate to Backend Folder:** cd server
- **Install Backend Dependencies:** npm install

1. **Setup MongoDB Connection:**

- **.env file configurations:**

MONGO_URI=mongodb+srv://light18:Light181@atlasdemo.dtstj2t.mongodb.net/?retryWrites=true&w=majority&appName=AtlasDemo

PORT=5000 JWT_SECRET=5fea131039bfd9d70e13f146c9b1a77330c0e020de9a182b87f3507c301e292ef69d12e5c3453b39c50663e0ad611b2631b4876bf61a183d51ad0e7925eb480d

- **Or you can add your own Mongo URI:**

MONGO_URI = Your_mongo_URI.

JWT_SECRET = JWT_SECRET_KEY.
