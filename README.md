## RallyBC

![image of RallyBC]
(images/RallyBC.png)

**RallyBC** is a discussion-based social media type of web app for communities in British Columbia, Canada that are impacted by forest fires across the province

### Getting Started

**Fork and Configure**

- In Terminal, navigate to the directory you want the clone to live
- **Fork** this repo
- Once you have forked the above repo, `git clone git@github.com:katieagne/rallybc.git`
- `cd` into `katie-agne-capstone`
- `cd client && npm i`
- `cd ..`
- `cd server && npm i`
- `cp .env.sample .env`
- in your `.env` file, add a value for your `JWT_SECRET` env variable - choose any value

**Database Seeding**

- in Terminal, `cd server`
- run `npm run db:reset`

**Run Server**

- In a new Terminal window/tab, `cd` into the directory with the clone
- `cd katie-agne-capstone`
- `cd server`
- run `npm run dev`

**Run Client**

- In a new Terminal window/tab, `cd` into the directory with the clone
- `cd katie-agne-capstone`
- `cd client`
- run `npm start`
